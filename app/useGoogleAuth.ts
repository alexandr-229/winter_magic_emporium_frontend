import { useEffect } from 'react';
import { authModalStore } from '@/components/modals/auth/store';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ModalAlias } from '@/components/modals/auth/types';
import { TokenResponse, googleOauth } from '@/api/auth';
import { userStore } from '@/store/user';
import { useMutation } from 'react-query';

const { onOpenAuthModal, onCloseAuthModal } = authModalStore.getStore();
const { setUser, getUser } = userStore.getStore();

export const useGoogleAuth = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onSuccess = async ({ accessToken }: TokenResponse) => {
    localStorage.setItem('access_token', accessToken);

    const user = await getUser();

    setUser(user);
    onCloseAuthModal();
  };

  const onMutate = () => {
    router.push(pathname);
  };

  const { mutate } = useMutation(
    (code: string) => googleOauth(code),
    { onSuccess, onMutate },
  );

  useEffect(() => {
    const googleCode = searchParams.get('code');

    if (googleCode) {
      onOpenAuthModal(ModalAlias.GOOGLE_LOADING);
      mutate(googleCode);
    }
  }, []);
};