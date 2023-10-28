import { FC } from 'react';

export enum ModalAlias {
  LOGIN = 'Login',
  REGISTRATION = 'Registration',
  ACTIVATION_CODE = 'ActivationCode',
  GOOGLE_LOADING = 'GoogleLoading',
}

export interface AuthModalStore {
  open: boolean;
  modal: ModalAlias;
  dialog: HTMLDialogElement | null;

  setDialog: (dialog: HTMLDialogElement) => void;
  onOpenAuthModal: (modal: ModalAlias) => void;
  onCloseAuthModal: () => void;
}

export interface ModalProps {
  openModal: (modal: ModalAlias, extraArgs: Record<string, unknown>) => void;
  extraArgs: Record<string, unknown>;
}

export type Modals = Record<ModalAlias, FC<ModalProps>>;
