import { useEffect, useReducer, useRef } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

import useApi, { User } from '@shared/hooks/useApi';

type EthereumProvider = {
  on: (event: string, callback: () => void) => void,
  request: ({ method }: {method: string}) => Promise<any>
}

type MetamaskUser = User & {
  connected: boolean,
  wallet: string | null,
  referrer: string,
  hasMetamask: boolean,
  skippedConnection: boolean
}

type MetamaskConnectState = {
  user: MetamaskUser,
  isLoading: boolean,
  error: string | null,
}

const initialState: MetamaskConnectState = {
  user: {
    id: null,
    email: null,
    wallet: null,
    referrer: '',
    referrals: 0,
    connected: false,
    verified: false,
    hasMetamask: false,
    skippedConnection: false,
  },
  isLoading: false,
  error: null,
};

type MetamaskConnectAction = {
  type: 'createUser/start',
} | {
  type: 'createUser/success',
  payload: User
} | {
  type: 'createUser/failed',
  payload?: string
} | {
  type: 'verifyUser/start',
} | {
  type: 'verifyUser/success',
  payload: string
} | {
  type: 'verifyUser/failed',
  payload?: string
} | {
  type: 'setupConnection/start',
} | {
  type: 'setupConnection/success',
  payload: string
} | {
  type: 'setupConnection/failed',
  payload?: string
} | {
  type: 'connectUser/start',
} | {
  type: 'connectUser/success',
} | {
  type: 'connectUser/failed',
  payload?: string
} | {
  type: 'getUser/start',
} | {
  type: 'getUser/success',
  payload: User
} | {
  type: 'getUser/failed',
  payload?: string
} | {
  type: 'skipConnection'
} | {
  type: 'updateUser',
  payload: Partial<MetamaskUser>
} | {
  type: 'setError',
  payload: string
}

const metamaskConnectReducer = (state: MetamaskConnectState, action: MetamaskConnectAction): MetamaskConnectState => {
  switch (action.type) {
    case 'createUser/start':
    case 'verifyUser/start':
    case 'setupConnection/start':
    case 'connectUser/start':
    case 'getUser/start':
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case 'verifyUser/success':
      return {
        ...state,
        user: {
          ...state.user,
          connected: true,
          verified: true,
          id: action.payload,
        },
        isLoading: false,
      };
    case 'setupConnection/success':
      return {
        ...state,
        user: {
          ...state.user,
          connected: true,
          wallet: action.payload,
        },
        isLoading: false,
      };
    case 'createUser/success':
    case 'getUser/success':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        isLoading: false,
      };
    case 'updateUser':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case 'skipConnection':
      return {
        ...state,
        user: {
          ...state.user,
          connected: true,
        },
      };
    case 'connectUser/success':
      return {
        ...state,
        isLoading: false,
      };
    case 'connectUser/failed':
    case 'createUser/failed':
    case 'verifyUser/failed':
    case 'setupConnection/failed':
    case 'getUser/failed':
      return {
        ...state,
        error: action.payload || null,
        isLoading: false,
      };
    case 'setError':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

function useMetamaskConnect() {
  const providerRef = useRef<EthereumProvider>();
  const [{ user, error, isLoading }, dispatch ] = useReducer(metamaskConnectReducer, initialState);

  const endpoints = useApi();

  const skipMetamaskConnection = () => {
    localStorage.setItem('connectionSkipped', 'true');
    dispatch({ type: 'skipConnection' });
  };

  const getMetamaskProvider = () => {
    return detectEthereumProvider({
      mustBeMetaMask: true,
      silent: true,
    });
  };

  const createUser = async (email: string, recaptcha: string) => {
    dispatch({ type: 'createUser/start' });

    try {
      const res = await endpoints.createUser({
        email: email,
        wallet: user.wallet || '',
        referrer: user.referrer,
        recaptcha
      });

      localStorage.setItem('user', JSON.stringify(res));
      dispatch({
        type: 'createUser/success',
        payload: res,
      });
      if (typeof window.gtag !== 'undefined'){
        window.gtag('event', 'User_Created');
      }
    } catch (e: any) {
      dispatch({
        type: 'createUser/failed',
        payload: 'Sign up error',
      });
      console.error(e);
    }
  };

  const updateUser = (user: Partial<MetamaskUser>) => {
    dispatch({
      type: 'updateUser',
      payload: user,
    });
  };

  const verifyUser = async ({ id, secret }: {id: string, secret: string}) => {
    dispatch({ type: 'verifyUser/start' });

    try {
      await endpoints.verifyUser({
        id,
        secret,
      });

      dispatch({
        type: 'verifyUser/success',
        payload: id,
      });
      if (typeof window.gtag !== 'undefined'){
        window.gtag('event', 'User_Verified');
      }

    } catch (e: any) {
      dispatch({
        type: 'verifyUser/failed',
        payload: e.message,
      });
    }
  };

  const checkUser = async () => {
    if (user.id) return;

    const userData = localStorage.getItem('user');

    if (!userData) return;

    const parsedData = JSON.parse(userData);

    if (!parsedData.id) return;

    dispatch({
      type: 'getUser/start',
    });

    try {
      const existsUser = await endpoints.getUser(parsedData.id);

      dispatch({
        type: 'getUser/success',
        payload: existsUser,
      });
    } catch (e: any) {
      dispatch({
        type: 'getUser/failed',
      });
      localStorage.removeItem('user');
      console.error(e);
    }
  };

  const setupConnection = async () => {
    dispatch({ type: 'setupConnection/start' });

    const currentProvider: any = await getMetamaskProvider();

    if (!currentProvider) {
      dispatch({ type: 'setupConnection/failed' });

      return Promise.reject();
    }

    dispatch({
      type: 'updateUser',
      payload: { hasMetamask: true },
    });

    providerRef.current = currentProvider;

    try {
      const accounts = await currentProvider.request({ method: 'eth_accounts' });

      if (!accounts[0]) {
        dispatch({ type: 'setupConnection/failed' });

        return Promise.resolve();
      }

      dispatch({
        type: 'setupConnection/success',
        payload: accounts[0] || '',
      });

      return Promise.resolve();
    } catch (e: any) {
      dispatch({
        type: 'setupConnection/failed',
        payload: 'Error connecting wallet',
      });

      console.error(e);

      return Promise.reject();
    }

  };

  const connectUser = async () => {
    if (!providerRef.current) return;

    dispatch({ type: 'connectUser/start' });

    try {
      await providerRef.current.request({ method: 'eth_requestAccounts' });
      dispatch({ type: 'connectUser/success' });
      if (typeof window.gtag !== 'undefined'){
        window.gtag('event', 'Metamask_Conected');
      }

    } catch (e) {
      dispatch({
        type: 'connectUser/failed',
        payload: 'Error connecting wallet',
      });
      console.error('error');
    }
  };

  const checkConnection = async () => {
    const connectionStepSkipped = localStorage.getItem('connectionSkipped');

    if (connectionStepSkipped) {
      dispatch({ type: 'skipConnection' });
    }

    try {
      await setupConnection();
      await checkUser();
    } catch (e) {
      localStorage.removeItem('user');
    }
  };

  useEffect(() => {
    checkConnection()
      .then(() => {
        if (providerRef.current) {
          providerRef.current.on('chainChanged', checkConnection);
          providerRef.current.on('accountsChanged', checkConnection);
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {
      });
  }, []);

  return {
    isLoading,
    user,
    error,
    connectUser,
    updateUser,
    createUser,
    verifyUser,
    skipMetamaskConnection,
  };
}

export default useMetamaskConnect;