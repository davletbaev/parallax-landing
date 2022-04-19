type CreateUserProps = {
  email: string,
  wallet: string,
  referrer?: string
}

type UserResponse = {
  uuid: string,
  email: string,
  referrals_ammt: number,
  needs_activation: boolean
}

export type User = {
  id: string,
  email: string,
  referrals: number,
  verified: boolean
}

type VerifyUserProps = {
  id: string,
  secret: string
}

function useApi() {
  const baseUrl = 'https://mntixvzfga.execute-api.us-east-1.amazonaws.com/setUser';

  const transformUserResponse = ({ uuid, email, referrals_ammt, needs_activation }: UserResponse): User => ({
    id: uuid,
    email,
    referrals: referrals_ammt,
    verified: !needs_activation,
  });

  const createUser = ({ email, wallet, referrer }: CreateUserProps): Promise<User> => {
    const data = {
      email,
      wallet,
      r_id: referrer || 0,
    };

    return fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((res) => {
        if (!res.uuid) return Promise.reject(res.message);

        return transformUserResponse(res);
      });
  };

  const verifyUser = ({ id, secret }: VerifyUserProps): Promise<User> => {
    const data = {
      uuid: id,
      secret: secret,
    };

    return fetch(baseUrl, {
      method: 'PUT',
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((res) => {
        if (!res.uuid) return Promise.reject(res.message);

        return transformUserResponse(res);
      });
  };

  const getUser = (id: string): Promise<User> => {
    return fetch(`${ baseUrl }?uuid=${ id }`, {
      method: 'GET',
    }).then((res) => res.json())
      .then((res) => {
        if (!res.uuid) return Promise.reject(res.message);

        return transformUserResponse(res);
      });
  };

  return {
    createUser,
    verifyUser,
    getUser,
  };
}

export default useApi;