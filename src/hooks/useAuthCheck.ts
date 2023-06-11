import { login } from '@/redux/features/authSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useCheckAuth = () => {
  const [authCheck, setAuthCheck] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const localStorageCheck = localStorage?.getItem('@logged');

    if (localStorageCheck) {
      const auth = JSON.parse(localStorageCheck);
      if (auth.accessToken && auth.user) {
        dispatch(
          login({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
    setAuthCheck(true);
  }, []);

  return authCheck;
};
