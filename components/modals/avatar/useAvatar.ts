import {
  useState,
  DragEvent,
  ChangeEvent,
  useRef,
} from 'react';
import { useSubmit } from './useSubmit';

export const useAvatar = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { loading, onSubmit } = useSubmit();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (!file) {
      return;
    }

    onSubmit(file);
  };

  const handleOnChangeFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    onSubmit(file);
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
