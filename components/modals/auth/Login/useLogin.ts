import { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { InputRefData } from '@/components/small/Input/types';
import { useUser } from '@/store/user';
import { TokenResponse, login } from '@/api/auth';
import { validateEmail } from '../helpers';
import { useAuthModal } from '../store';
import { useClearInputs } from '../hooks/useClearInputs';

const { onCloseAuthModal } = useAuthModal.getStore();
const { setUser, getUser } = useUser.getStore();

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const queryClient = useQueryClient();

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

    queryClient.invalidateQueries();
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
