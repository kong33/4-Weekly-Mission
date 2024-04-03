import { useState, useEffect } from 'react';
import useMutate from '@/src/shared/hooks/useMutate';
import { END_POINT,HTTPMethod } from '@/src/constants';
import { avatarData } from '@/src/constants/index.type';

const useGetAvatar = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userAvatarImg, setUserAvatarImg] = useState<string>('');

  const { data, isLoading } = useMutate<avatarData>({
    url: END_POINT.AVATAR,
    method: HTTPMethod.GET,
  });

  useEffect(() => {
    setUserEmail(data?.email || ''); //undefined 인 경우 '' 넣기
    setUserAvatarImg(data?.profileImageSource || '');
  }, []);

  return { userEmail, userAvatarImg, isLoading} 

};

export default useGetAvatar