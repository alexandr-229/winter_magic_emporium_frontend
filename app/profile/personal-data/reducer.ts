import { Action, PersonalDataState } from './types';
import {
  SET_LAST_NAME,
  SET_NAME,
  SET_PHONE,
  SET_ALL,
} from './consts';

export const reducer = (state: PersonalDataState, { type, payload }: Action): PersonalDataState => {
  switch (type) {
    case SET_NAME:
      return { ...state, name: payload };
    case SET_LAST_NAME:
      return { ...state, lastName: payload };
    case SET_PHONE:
      return { ...state, phone: payload };
    case SET_ALL:
      return { ...state, ...payload };
    default:
      return state;
  }
};
