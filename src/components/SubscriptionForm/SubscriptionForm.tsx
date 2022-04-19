import React, { ChangeEventHandler, FormEvent, useState } from 'react';
import debounce from 'lodash/debounce';

import Button from '@components/Button';

import * as styles from './SubscriptionForm.module.scss';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type SubscriptionFormProps = {
  error: string | null,
  onSubmit: (data: { email: string }) => void
}

function SubscriptionForm({ error, onSubmit }: SubscriptionFormProps) {
  const [ email, setEmail ] = useState('');
  const [ valid, setValid ] = useState(false);
  const [ touched, setTouched ] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = debounce((e) => {
    const value = e.target.value;

    setTouched(true);
    setEmail(value);

    setValid(EMAIL_REGEX.test(value));
  }, 300);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({ email });
  };

  return (
    <form className={ styles.form } onSubmit={ handleSubmit }>
      <div className={ styles.field }>
        <input
          className={ styles.input }
          type="email"
          placeholder="Enter your email address"
          onChange={ handleChange }
        />
        {
          touched && !valid && !error && (
            <span className={ styles.error }>Incorrect email address</span>
          )
        }
        {
          touched && error && (
            <span className={ styles.error }>{error}</span>
          )
        }
      </div>

      <div className={ styles.field }>
        <Button type="submit" variant="secondary" disabled={ !valid } block>Submit</Button>
      </div>
    </form>
  );
}

export default SubscriptionForm;