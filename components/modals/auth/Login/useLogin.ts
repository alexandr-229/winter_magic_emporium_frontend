import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { InputRefData } from '@/components/small/Input/types';
import { userStore } from '@/store/user';
import { TokenResponse, login } from '@/api/auth';
import { validateEmail } from '../helpers';
import { authModalStore } from '../store';
import { useClearInputs } from '../hooks/useClearInputs';

const { onCloseAuthModal } = authModalStore.getStore();
const { setUser, getUser } = userStore.getStore();

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useClearInputs([setEmail, setPassword]);

  const emailInputRef = useRef<InputRefData>(null);
  const passwordInputRef = useRef<InputRefData>(null);

  useEffect(() => {
    emailInputRef.current?.setError(false);
  }, [email]);

  useEffect(() => {
    passwordInputRef.current?.setError(false);
  }, [password]);

  const onSuccess = async ({ accessToken }: TokenResponse) => {
    emailInputRef.current?.setError(false);
    passwordInputRef.current?.setError(false);

    localStorage.setItem('access_token', accessToken);

    const user = await getUser();
    setUser(user);

    setLoading(false);
    onCloseAuthModal();
  };

  const onError = () => {
    setLoading(false);
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

    setLoading(true);
    mutate();
  };

  return {
    email,
    loading,
    password,
    emailInputRef,
    passwordInputRef,
    setEmail,
    onSubmit,
    setPassword,
  };
};
