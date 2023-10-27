export interface AuthModalStore {
  open: boolean;
  dialog: HTMLDialogElement | null;

  setDialog: (dialog: HTMLDialogElement) => void;
  onOpenAuthModal: () => void;
  onCloseAuthModal: () => void;
}
