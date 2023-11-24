import {
  useReducer,
  useEffect,
  useState,
  useRef,
} from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { Logger } from '@/helpers/logger';
import { useUser } from '@/store/user';
import { InputRefData } from '@/components/small/Input/types';
import { User, changeProfile } from '@/api/user';
import { reducer } from './reducer';
import { PersonalDataState } from './types';
import { Validator } from './validator';
import { SET_ALL } from './consts';

const getInitialState = (user: User | null) => {
  const result: PersonalDataState = {
    name: user?.name || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
  };

  return result;
};

export const usePersonalData = () => {
  const { user, setUser } = useUser();
  const [state, dispatch] = useReducer(reducer, getInitialState(user));
  const [loading, setLoading] = useState<boolean>(false);

  const onSuccess = () => {
    if (!user) {
      return;
    }

    setUser({
      ...user,
      name: state.name,
      lastName: state.lastName,
      phone: state.phone,
    });
  };

  const onError = (error: unknown) => {
    Logger.error(error, { module: 'Change profile' });
    toast('Something went wrong', { theme: 'colored', type: 'error' });
  };

  const onMutate = () => setLoading(false);

  const { mutate } = useMutation(
    (user: Partial<User>) => changeProfile(user),
    { onSuccess, onError, onMutate },
  );

  const nameRef = useRef<InputRefData>(null);
  const lastNameRef = useRef<InputRefData>(null);
  const phoneRef = useRef<InputRefData>(null);

  useEffect(() => {
    dispatch({ type: SET_ALL, payload: getInitialState(user) });
  }, [user]);

  useEffect(() => {
    nameRef.current?.setError(false);
  }, [state.name]);

  useEffect(() => {
    lastNameRef.current?.setError(false);
  }, [state.lastName]);

  useEffect(() => {
    phoneRef.current?.setError(false);
  }, [state.phone]);

  const validate = () => {
    const invalidFields: string[] = [];

    if (!Validator.validateName(state.name)) {
      nameRef.current?.setError(true);
      invalidFields.push('name');
    }
    if (!Validator.validateLastName(state.lastName)) {
      lastNameRef.current?.setError(true);
      invalidFields.push('lastName');
    }
    if (!Validator.validatePhone(state.phone)) {
      phoneRef.current?.setError(true);
      invalidFields.push('phone');
    }

    return invalidFields;
  };

  const onSubmit = () => {
    const invalidFields = validate();

    if (invalidFields.length) {
      return;
    }

    setLoading(true);
    mutate(state);
  };

  const refs = {
    name: nameRef,
    lastName: lastNameRef,
    phone: phoneRef,
  };

  return {
    refs,
    state,
    loading,
    onSubmit,
    dispatch,
  };
};
