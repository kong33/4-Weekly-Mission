import { useState, useEffect } from 'react';
import useMutate from '@/src/app/lib/hooks/useMutate';
import { END_POINT, HTTPMethod } from '@/src/app/lib/constants/index'

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

export type avatarData = {
    id: number;
    name: string;
    email: string;
    profileImageSource: string;
  };