import { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { InputRefData } from '@/components/small/Input/types';
import { TokenResponse, login } from '@/api/auth';
import { validateEmail } from '../helpers';
import { authModalStore } from '../store';

const { onCloseAuthModal } = authModalStore.getStore();

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const emailInputRef = useRef<InputRefData>(null);
  const passwordInputRef = useRef<InputRefData>(null);

  const onSuccess = ({ accessToken }: TokenResponse) => {
    emailInputRef.current?.setError(false);
    passwordInputRef.current?.setError(false);

    localStorage.setItem('access_token', accessToken);
    onCloseAuthModal();

    // TODO GET ME
  };

  const onError = () => {
    emailInputRef.current?.setError(true);
    passwordInputRef.current?.setError(true);
  };

  const { mutate } = useMutation(
    () => login(email, password),
    { onSuccess, onError },
  );

  const validate = () => {
    const emailValue = !!email.length && validateEmail(email);
    const passwordValid = password.length > 2 && password.length < 33;

    if (!emailValue) {
      emailInputRef.current?.setError(true);
    }

    if (!passwordValid) {
      passwordInputRef.current?.setError(true);
    }

    return emailValue && passwordValid;
  };

  const onSubmit = () => {
    const fieldsValid = validate();
    if (!fieldsValid) {
      return;
    }

    mutate();
  };

  return {
    email,
    password,
    emailInputRef,
    passwordInputRef,
    setEmail,
    onSubmit,
    setPassword,
  };
};
