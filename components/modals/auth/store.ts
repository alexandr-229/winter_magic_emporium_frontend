import { createStore } from '@/helpers/store';
import { AuthModalState, ModalAlias } from './types';

export const useAuthModal = createStore<AuthModalState>((get, set) => ({
  open: false,
  dialog: null,
  modal: ModalAlias.LOGIN,

  setDialog: (dialog: HTMLDialogElement) => {
    set({ dialog });
  },
  onOpenAuthModal: (modal: ModalAlias = ModalAlias.LOGIN) => {
    const { dialog } = get();

    if (dialog) {
      dialog.showModal();

      set({ open: true, modal });
    }
  },
  onCloseAuthModal: () => {
    const { dialog } = get();

    if (dialog) {
      dialog.close();
    }

    set({ open: false });
  },
}));
