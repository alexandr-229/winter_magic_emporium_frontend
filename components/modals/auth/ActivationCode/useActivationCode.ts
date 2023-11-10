import {
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import { useMutation } from 'react-query';
import { TokenResponse, activate } from '@/api/auth';
import { CodeInputRefData } from '@/components/small/CodeInput/types';
import { userStore } from '@/store/user';
import { useClearInputs } from '../hooks/useClearInputs';
import { authModalStore } from '../store';

const { getUser, setUser } = userStore.getStore();
const { onCloseAuthModal } = authModalStore.getStore();

export const useActivationCode = (extraArgs: Record<string, unknown>) => {
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const codeInputRef = useRef<CodeInputRefData>(null);

  useClearInputs([setCode]);

  const email = useMemo(() => {
    const result = typeof extraArgs.email === 'string' ? extraArgs.email : '';

    return result;
  }, [extraArgs]);

  const onSuccess = async ({ accessToken }: TokenResponse) => {
    codeInputRef.current?.setError(false);

    localStorage.setItem('access_token', accessToken);

    const user = await getUser();
    setUser(user);

    setLoading(false);

    if (user) {
      onCloseAuthModal();
    }
  };

  const onError = () => {
    setLoading(false);
    codeInputRef.current?.setError(true);
  };

  const { mutate } = useMutation(
    () => activate(email, +code),
    { onSuccess, onError },
  );

  useEffect(() => {
    if (code.length === 4) {
      handleSubmit();
    }
  }, [code]);

  const handleSubmit = () => {
    if (code.length !== 4) {
      return;
    }

    setLoading(true);
    mutate();
  };

  return {
    code,
    loading,
    setCode,
    codeInputRef,
    handleSubmit,
  };
};
