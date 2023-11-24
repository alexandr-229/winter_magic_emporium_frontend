import {
  useState,
  DragEvent,
  ChangeEvent,
  useRef,
} from 'react';

export const useAvatar = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (!file) {
      return;
    }

    setLoading(true);

    // Send request;
  };

  const handleOnChangeFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setLoading(true);

    // Send request;
  };

  const handleOnSelectClick = () => {
    if (!fileInputRef.current) {
      return;
    }

    fileInputRef.current.click();
  };

  return {
    loading,
    isDragging,
    fileInputRef,
    handleOnDrop,
    setIsDragging,
    handleOnSelectClick,
    handleOnChangeFileInput,
  };
};
