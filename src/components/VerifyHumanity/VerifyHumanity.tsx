import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import SubscriptionForm from '@components/SubscriptionForm';
import { Heading, Paragraph } from '@components/Typography';

import useApi, { User } from '@shared/hooks/useApi';

// import useQueryParams from '@shared/hooks/useQueryParams';
import * as styles from './VerifyHumanity.module.scss';

type VerifyHumanityProps = {
  wallet: string,
  // user: User | null,
  // setLoading: (isLoading: boolean) => void
  onSuccess: (user: User) => void
}

/* Commented code is implementing user verification via email */
const VerifyHumanity = ({
  wallet,
  // user,
  // setLoading,
  onSuccess
}: VerifyHumanityProps) => {
  const [ error, setError ] = useState<string | null>(null);
  // const query = useQueryParams();
  const {
    createUser,
    // verifyUser
  } = useApi();

  const handleSubmit = async ({ email }: { email: string }) => {
    setError(null);

    try {
      const user = await createUser({
        email,
        wallet
      });

      localStorage.setItem('user', JSON.stringify(user));

      onSuccess(user);
    } catch (e) {
      setError('Unable to connect to server. Please try again');
      console.error(e);
    }
  };

  // useEffect(() => {
  //   if (!query) return;
  //
  //   const secret = query.get('secret');
  //   const id = query.get('uuid');
  //
  //   if (secret && id) {
  //     setLoading(true);
  //
  //     verifyUser({
  //       id,
  //       secret
  //     })
  //       .then(onSuccess)
  //       .catch((e) => {
  //         console.error(e);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }
  // }, [ query ]);

  // return (
  //   <div className={ styles.container }>
  //     <div className={ styles.content }>
  //
  //       {
  //         user && !user.verified ? (
  //           <>
  //             <Heading type="h3">Check your inbox</Heading>
  //
  //             <Paragraph marginTop="16" marginBottom="24">We sent letter with verification instructions to your
  //                   email</Paragraph>
  //           </>
  //         ) : (
  //           <>
  //             <Heading type="h3">Verify Humanity</Heading>
  //
  //             <Paragraph marginTop="16" marginBottom="24">Enter your email to finish claiming your NFT
  //                   item.</Paragraph>
  //
  //             <SubscriptionForm error={ error } onSubmit={ handleSubmit }/>
  //           </>)
  //       }
  //
  //     </div>
  //
  //     <StaticImage className={ styles.background } alt="NFT Lamborghini" src="background.jpg"/>
  //   </div>
  // );

  return (
    <div className={ styles.container }>
      <div className={ styles.content }>
        <Heading type="h3">Verify Humanity</Heading>

        <Paragraph marginTop="16" marginBottom="24">Enter your email to finish claiming your NFT
            item.</Paragraph>

        <SubscriptionForm error={ error } onSubmit={ handleSubmit }/>

      </div>

      <StaticImage className={ styles.background } alt="NFT Lamborghini" src="background.jpg"/>
    </div>
  );
};

export default VerifyHumanity;