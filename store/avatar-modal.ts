import { createStore } from '@/helpers/store';

interface AvatarModalState {
	open: boolean;
	dialog: HTMLDialogElement | null;

	setDialog: (dialog: HTMLDialogElement) => void;
	onOpenAvatarModal: () => void;
	onCloseAvatarModal: () => void;
}

export const useAvatarModal = createStore<AvatarModalState>((get, set) => ({
	open: false,
	dialog: null,

	setDialog: (dialog: HTMLDialogElement) => {
		set({ dialog });
	},
	onOpenAvatarModal: () => {
		const { dialog } = get();

		if (!dialog) {
			return;
		}

		dialog.showModal();

		set({ open: true });
	},
	onCloseAvatarModal: () => {
		const { dialog } = get();

		dialog?.close();

		set({ open: false });
	},
}));
