import { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

import useApi, { User } from '@shared/hooks/useApi';

function useMetamaskConnect() {
  const [ isConnectionSkipped, setSkipConnection ] = useState(false);
  const [ hasMetamask, setHasMetamask ] = useState(false);
  const [ isConnected, setIsConnected ] = useState(false);
  const [ wallet, setWallet ] = useState('');
  const [ isLoading, setLoading ] = useState(false);
  const [ user, setUser ] = useState<User | null>(null);

  const { getUser } = useApi();

  const skipMetamaskConnection = () => {
    localStorage.setItem('connectionSkipped', 'true');
    setSkipConnection(true);
  };

  const getMetamaskProvider = () => {
    return detectEthereumProvider({
      mustBeMetaMask: true,
      silent: true,
    });
  };

  const checkUser = async () => {
    if (user) return;

    const userData = localStorage.getItem('user');

    if (!userData) return;

    const parsedData = JSON.parse(userData);

    if (!parsedData.id) return;

    setUser(parsedData);

    try {
      const existsUser = await getUser(parsedData.id);

      setUser(existsUser);
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  const checkConnection = async () => {
    setLoading(true);

    const currentProvider: any = await getMetamaskProvider();

    if (currentProvider) {
      setHasMetamask(true);

      localStorage.removeItem('connectionSkipped');
      const accounts = await currentProvider.request({ method: 'eth_accounts' });
      const currentWallet = accounts[0] || '';

      setWallet(currentWallet);

      if (currentWallet) {
        setIsConnected(true);
        await checkUser();
      } else {
        localStorage.removeItem('user');
        setIsConnected(false);
        setUser(null);
      }

      setLoading(false);

      return currentProvider;
    }

    setHasMetamask(false);
    setLoading(false);

    return Promise.reject();
  };

  useEffect(() => {
    const connectionStepSkipped = localStorage.getItem('connectionSkipped');

    setSkipConnection(connectionStepSkipped === 'true');
    
    checkConnection()
      .then((provider) => {
        provider.on('chainChanged', checkConnection);
        provider.on('accountsChanged', checkConnection);
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {
      });
  }, []);

  return {
    isLoading,
    setLoading,
    user,
    updateUser: setUser,
    wallet,
    hasMetamask,
    isConnected,
    isConnectionSkipped: isConnectionSkipped && !hasMetamask,
    skipMetamaskConnection,
  };
}

export default useMetamaskConnect;