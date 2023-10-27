import { Store } from '@/helpers/store';
import { AuthModalStore } from './types';

export const authModalStore = new Store<AuthModalStore>((get, set) => ({
  open: false,
  dialog: null,

  setDialog: (dialog: HTMLDialogElement) => {
    set({ dialog });
  },
  onOpenAuthModal: () => {
    const { dialog } = get();

    if (dialog) {
      dialog.showModal();

      set({ open: true });
    }
  },
  onCloseAuthModal: () => {
    const { dialog } = get();

    set({ open: true });

    if (dialog) {
      dialog.close();
    }
  },
}));
