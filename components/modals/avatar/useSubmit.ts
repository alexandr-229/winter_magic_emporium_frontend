import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { uploadFile } from '@/api/files';
import { changeProfile } from '@/api/user';
import { Logger } from '@/helpers/logger';
import { useAvatarModal } from '@/store/avatar-modal';
import { useUser } from '@/store/user';

const { onCloseAvatarModal } = useAvatarModal.getStore();

export const useSubmit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { open } = useAvatarModal();
  const { setUser, user } = useUser();

  useEffect(() => {
    if (!open) {
      setLoading(false);
    }
  }, [open]);

  const onError = (error: unknown) => {
    Logger.error(error, { module: 'Upload file' });
    setLoading(false);
    onCloseAvatarModal();
    toast('Failed to upload file', { theme: 'colored', type: 'error' });
  };

  const onSuccessUpdateUser = (_: unknown, photo: string) => {
    setLoading(false);
    onCloseAvatarModal();

    if (!user) {
      return;
    }

    setUser({ ...user, photo });
  };

  const updateProfileMutation = useMutation(
    (photo: string) => changeProfile({ photo }),
    { onSuccess: onSuccessUpdateUser, onError },
  );

  const onSuccessUploadFile = ({ path }: { path: string }) => {
    updateProfileMutation.mutate(path);
  };

  const uploadFileMutation = useMutation(
    (body: FormData) => uploadFile(body),
    { onSuccess: onSuccessUploadFile, onError },
  );

  const onSubmit = (file: File) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    uploadFileMutation.mutate(formData);
  };

  return {
    onSubmit,
    loading,
  };
};
