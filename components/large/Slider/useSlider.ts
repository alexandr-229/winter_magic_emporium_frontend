'use client';

import { useEffect, useState } from 'react';
import { tagsData } from './data';
import { ProductTag } from './types';

export const useSlider = (photos: string[], tag: ProductTag) => {
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const showLeftArrow = photos.length > 1 && activePhoto > 0;
  const showRightArrow = photos.length > 1 && activePhoto < photos.length - 1;
  const tagInfo = tagsData[tag];

  useEffect(() => {
    setActivePhoto(0);
  }, [photos]);

  const nextClickHandle = () => {
    if (activePhoto >= photos.length - 1) {
      return setActivePhoto(0);
    }
    setActivePhoto(activePhoto + 1);
  };

  const prevClickHandle = () => {
    if (activePhoto < 1) {
      return setActivePhoto(photos.length - 1);
    }
    return setActivePhoto(activePhoto - 1);
  };

  const getLeft = (index: number) => {
    if (index === activePhoto) {
      return 0;
    }

    if (index < activePhoto) {
      return -(index * 550);
    }

    return index * 550;
  };

  return {
    tagInfo,
    activePhoto,
    showLeftArrow,
    showRightArrow,
    setActivePhoto,
    nextClickHandle,
    prevClickHandle,
    getLeft,
  };
};
