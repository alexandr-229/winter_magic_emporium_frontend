import {
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import { useMutation } from 'react-query';
import { TokenResponse, activate } from '@/api/auth';
import { CodeInputRefData } from '@/components/small/CodeInput/types';
import { authModalStore } from '../store';

const { onCloseAuthModal } = authModalStore.getStore();

export const useActivationCode = (extraArgs: Record<string, unknown>) => {
  const [code, setCode] = useState<string>('');

  const codeInputRef = useRef<CodeInputRefData>(null);

  const email = useMemo(() => {
    const result = typeof extraArgs.email === 'string' ? extraArgs.email : '';

    return result;
  }, [extraArgs]);

  const onSuccess = ({ accessToken }: TokenResponse) => {
    codeInputRef.current?.setError(false);

    localStorage.setItem('access_token', accessToken);

    onCloseAuthModal();

    // TODO GET ME
  };

  const onError = () => {
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

    mutate();
  };

  return {
    code,
    setCode,
    codeInputRef,
    handleSubmit,
  };
};
