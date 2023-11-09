import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { register } from '@/api/auth';
import { InputRefData } from '@/components/small/Input/types';
import { ModalAlias } from '../types';
import { validateEmail } from '../helpers';
import { useClearInputs } from '../hooks/useClearInputs';

export const useRegistration = (
  openModal: (modal: ModalAlias, extraArgs: Record<string, unknown>) => void,
) => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const nameInputRef = useRef<InputRefData>(null);
  const lastNameInputRef = useRef<InputRefData>(null);
  const emailInputRef = useRef<InputRefData>(null);
  const phoneInputRef = useRef<InputRefData>(null);
  const passwordInputRef = useRef<InputRefData>(null);

  useClearInputs([setName, setLastName, setEmail, setPhone, setPassword]);

  useEffect(() => {
    nameInputRef.current?.setError(false);
  }, [name]);

  useEffect(() => {
    lastNameInputRef.current?.setError(false);
  }, [lastName]);

  useEffect(() => {
    emailInputRef.current?.setError(false);
  }, [email]);

  useEffect(() => {
    phoneInputRef.current?.setError(false);
  }, [phone]);

  useEffect(() => {
    passwordInputRef.current?.setError(false);
  }, [password]);

  const onSuccess = () => {
    nameInputRef.current?.setError(false);
    lastNameInputRef.current?.setError(false);
    emailInputRef.current?.setError(false);
    phoneInputRef.current?.setError(false);
    passwordInputRef.current?.setError(false);

    setLoading(false);
    openModal(ModalAlias.ACTIVATION_CODE, { email });
  };

  const onError = () => {
    setLoading(false);

    nameInputRef.current?.setError(true);
    lastNameInputRef.current?.setError(true);
    emailInputRef.current?.setError(true);
    phoneInputRef.current?.setError(true);
    passwordInputRef.current?.setError(true);
  };

  const { mutate } = useMutation(
    () => register(email, password, name, lastName, phone),
    { onSuccess, onError },
  );

  const validate = () => {
    const nameValid = !!name.length;
    const lastNameValid = !!lastName.length;
    const emailValid = !!email.length && validateEmail(email);
    const phoneValid = !!phone.length;
    const passwordValid = password.length > 2 && password.length < 32;

    if (!nameValid) {
      nameInputRef.current?.setError(true);
    }
    if (!lastNameValid) {
      lastNameInputRef.current?.setError(true);
    }
    if (!emailValid) {
      emailInputRef.current?.setError(true);
    }
    if (!phoneValid) {
      phoneInputRef.current?.setError(true);
    }
    if (!passwordValid) {
      passwordInputRef.current?.setError(true);
    }

    const result = nameValid && lastNameValid && emailValid && phoneValid && passwordValid;

    return result;
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
    name,
    email,
    phone,
    password,
    lastName,
    loading,
    setName,
    onSubmit,
    setEmail,
    setPhone,
    setPassword,
    setLastName,
    nameInputRef,
    emailInputRef,
    phoneInputRef,
    lastNameInputRef,
    passwordInputRef,
  };
};
