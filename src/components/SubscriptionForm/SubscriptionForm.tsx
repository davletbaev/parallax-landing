import React, { ChangeEventHandler, FormEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import debounce from 'lodash/debounce';

import Button from '@components/Button';

import * as styles from './SubscriptionForm.module.scss';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type SubscriptionFormProps = {
  error: string | null,
  loading: boolean,
  onSubmit: (data: { email: string, recaptcha: string }) => void
}

function SubscriptionForm({ error, loading, onSubmit }: SubscriptionFormProps) {
  const [ email, setEmail ] = useState('');
  const [ recaptcha, setRecaptcha ] = useState<string | null>(null);
  const [ valid, setValid ] = useState(false);
  const [ touched, setTouched ] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = debounce((e) => {
    const value = e.target.value;

    setTouched(true);
    setEmail(value);

    setValid(EMAIL_REGEX.test(value));
  }, 300);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptcha(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!recaptcha) return;

    onSubmit({
      email,
      recaptcha
    });
    // alert('Subscribed successfully!')
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
          touched && !valid && (
            <span className={ styles.error }>Incorrect email address</span>
          )
        }
        {
          !email && error && (
            <span className={ styles.error }>{error}</span>
          )
        }
      </div>

      <ReCAPTCHA
        className={ styles.recaptcha }
        sitekey="6LeDrh0gAAAAAGeqVs6x1UCYwGELN6aQwV9ETN3Q"
        onChange={ handleRecaptchaChange }
      />

      <div className={ styles.field }>
        <Button type="submit" variant="secondary" disabled={ !valid || loading || !recaptcha } block>Submit</Button>
      </div>
    </form>
  );
}

export default SubscriptionForm;