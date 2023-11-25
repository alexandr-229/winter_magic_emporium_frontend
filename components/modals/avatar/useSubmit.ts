import { uploadFile } from '@/api/files';
import { useState } from 'react';
import { useMutation } from 'react-query';

export const useSubmit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const uploadFileMutation = useMutation((body: FormData) => uploadFile(body));

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
