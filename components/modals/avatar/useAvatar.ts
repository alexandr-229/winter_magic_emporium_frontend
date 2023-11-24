import { useState, DragEvent } from 'react';

export const useAvatar = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (!file) {
      return;
    }

    setLoading(true);

    // Send request;
  };

  return {
    loading,
    isDragging,
    handleOnDrop,
    setIsDragging,
  };
};
