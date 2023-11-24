import {
  SET_LAST_NAME,
  SET_NAME,
  SET_PHONE,
  SET_ALL,
} from './consts';

export interface PersonalDataState {
  name: string;
  lastName: string;
  phone: string;
}

export type Action = {
  type: typeof SET_NAME,
  payload: string;
} | {
  type: typeof SET_LAST_NAME,
  payload: string,
} | {
  type: typeof SET_PHONE,
  payload: string,
} | {
  type: typeof SET_ALL,
  payload: Partial<PersonalDataState>,
};
