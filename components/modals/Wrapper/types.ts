import { RefObject } from 'react';

export interface WrapperModalRef {
  getWrapperRef: () => RefObject<HTMLDialogElement>;
}
