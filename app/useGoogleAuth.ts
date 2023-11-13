import { useEffect } from 'react';
import { useAuthModal } from '@/components/modals/auth/store';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ModalAlias } from '@/components/modals/auth/types';
import { TokenResponse, googleOauth } from '@/api/auth';
import { useUser } from '@/store/user';
import { useMutation, useQueryClient } from 'react-query';

const { onOpenAuthModal, onCloseAuthModal } = useAuthModal.getStore();
const { setUser, getUser } = useUser.getStore();

export const useGoogleAuth = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const queryClient = useQueryClient();

  const onSuccess = async ({ accessToken }: TokenResponse) => {
    localStorage.setItem('access_token', accessToken);

    const user = await getUser();

    setUser(user);
    onCloseAuthModal();

    queryClient.invalidateQueries();
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
