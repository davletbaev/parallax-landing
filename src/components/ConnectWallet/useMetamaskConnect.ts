import { useEffect, useState } from 'react';

import useApi, { User } from '@shared/hooks/useApi';

function useMetamaskConnect() {
  const [ hasMetamask, setHasMetamask ] = useState(false);
  const [ isConnected, setIsConnected ] = useState(false);
  const [ wallet, setWallet ] = useState('');
  const [ isLoading, setLoading ] = useState(false);
  const [ user, setUser ] = useState<User | null>(null);

  const { getUser } = useApi();

  const hasMetamaskInstalled = () => {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  };

  const isConnectedToMetamask = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    setWallet(accounts[0] || '');

    return Boolean(accounts[0]);
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

    if (hasMetamaskInstalled()) {
      setHasMetamask(true);

      if (await isConnectedToMetamask()) {
        setIsConnected(true);

        await checkUser();
      } else {
        localStorage.removeItem('user');
        setUser(null);
        setWallet('');
        setIsConnected(false);
      }
    } else {
      setHasMetamask(false);
    }

    setLoading(false);
  };

  // Listen to metamask changes
  useEffect(() => {
    checkConnection();

    if (window.ethereum) {
      window.ethereum.on('chainChanged', checkConnection);
      window.ethereum.on('accountsChanged', checkConnection);
    }
  }, []);

  return {
    isLoading,
    setLoading,
    user,
    updateUser: setUser,
    wallet,
    hasMetamask,
    isConnected,
  };
}

export default useMetamaskConnect;