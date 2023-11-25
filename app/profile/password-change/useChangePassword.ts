import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { InputRefData } from '@/components/small/Input/types';
import { changePassword } from '@/api/auth';

export const useChangePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const oldPasswordRef = useRef<InputRefData>(null);
  const newPasswordRef = useRef<InputRefData>(null);
  const confirmNewPasswordRef = useRef<InputRefData>(null);

  const onSuccess = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    toast('Password changed successfully', { theme: 'colored', type: 'success' });
  };

  const onError = () => {
    toast('Password incorrect', { theme: 'colored', type: 'error' });
  };

  const { mutate, isLoading } = useMutation(
    () => changePassword(oldPassword, newPassword),
    { onSuccess, onError },
  );

  useEffect(() => {
    oldPasswordRef.current?.setError(false);
  }, [oldPassword]);

  useEffect(() => {
    newPasswordRef.current?.setError(false);
  }, [newPassword]);

  useEffect(() => {
    confirmNewPasswordRef.current?.setError(false);
  }, [confirmPassword]);

  const validate = () => {
    const invalidFields: string[] = [];

    if (!oldPassword.trim().length) {
      invalidFields.push('oldPassword');
      oldPasswordRef.current?.setError(true);
    }
    if (!newPassword.trim().length) {
      invalidFields.push('newPassword');
      newPasswordRef.current?.setError(true);
    }
    if (!confirmPassword.trim().length) {
      invalidFields.push('confirmPassword');
      confirmNewPasswordRef.current?.setError(true);
    }
    if (newPassword !== confirmPassword) {
      invalidFields.push('newPassword');
      invalidFields.push('confirmPassword');
      newPasswordRef.current?.setError(true);
      confirmNewPasswordRef.current?.setError(true);
    }

    return invalidFields;
  };

  const onSubmit = () => {
    const invalidFields = validate();

    if (invalidFields.length) {
      return;
    }

    mutate();
  };

  return {
    isLoading,
    oldPassword,
    newPassword,
    confirmPassword,
    oldPasswordRef,
    newPasswordRef,
    confirmNewPasswordRef,
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    onSubmit,
  };
};
