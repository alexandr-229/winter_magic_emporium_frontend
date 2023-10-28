import React, { useRef, useEffect, useState } from 'react';
import { Wrapper } from '../Wrapper';
import { authModalStore } from './store';
import { WrapperModalRef } from '../Wrapper/types';
import { ModalAlias, Modals } from './types';
import { Login } from './Login';
import { Registration } from './Registration';
import { ActivationCode } from './ActivationCode';
import { GoogleLoading } from './GoogleLoading';

const { setDialog } = authModalStore.getStore();

const modals: Modals = {
  [ModalAlias.LOGIN]: Login,
  [ModalAlias.REGISTRATION]: Registration,
  [ModalAlias.ACTIVATION_CODE]: ActivationCode,
  [ModalAlias.GOOGLE_LOADING]: GoogleLoading,
};

export const AuthModal = () => {
  const dialogRef = useRef<WrapperModalRef>(null);
  const [activeModal, setActiveModal] = useState<ModalAlias>(ModalAlias.LOGIN);
  const [extraArgs, setExtraArgs] = useState<Record<string, unknown>>({});

  useEffect(() => {
    const dialog = dialogRef.current?.getWrapperRef().current;

    if (dialog) {
      setDialog(dialog);
    }
  }, []);

  const openModal = (modal: ModalAlias, extraArgs: Record<string, unknown>) => {
    setActiveModal(modal);
    setExtraArgs(extraArgs);
  };

  const Modal = modals[activeModal];

  return (
    <Wrapper ref={dialogRef}>
      <Modal extraArgs={extraArgs} openModal={openModal} />
    </Wrapper>
  );
};
