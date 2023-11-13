import React, { useRef, useEffect, useState } from 'react';
import { Wrapper } from '../Wrapper';
import { useAuthModal } from './store';
import { WrapperModalRef } from '../Wrapper/types';
import { ModalAlias, Modals } from './types';
import { Login } from './Login';
import { Registration } from './Registration';
import { ActivationCode } from './ActivationCode';
import { GoogleLoading } from './GoogleLoading';

const { setDialog, onOpenAuthModal } = useAuthModal.getStore();

const modals: Modals = {
  [ModalAlias.LOGIN]: Login,
  [ModalAlias.REGISTRATION]: Registration,
  [ModalAlias.ACTIVATION_CODE]: ActivationCode,
  [ModalAlias.GOOGLE_LOADING]: GoogleLoading,
};

export const AuthModal = () => {
  const dialogRef = useRef<WrapperModalRef>(null);
  const [extraArgs, setExtraArgs] = useState<Record<string, unknown>>({});
  const { modal } = useAuthModal();

  useEffect(() => {
    const dialog = dialogRef.current?.getWrapperRef().current;

    if (dialog) {
      setDialog(dialog);
    }
  }, []);

  const openModal = (modal: ModalAlias, extraArgs: Record<string, unknown>) => {
    onOpenAuthModal(modal);
    setExtraArgs(extraArgs);
  };

  const Modal = modals[modal];

  return (
    <Wrapper ref={dialogRef}>
      <Modal extraArgs={extraArgs} openModal={openModal} />
    </Wrapper>
  );
};
