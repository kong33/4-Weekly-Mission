// import { useState, useEffect } from 'react';
// import useMutate from '../useMutate';
// import { END_POINT, HTTPMethod } from '@/shared/constants';

// const useGetAvatar = () => {
//   const [userEmail, setUserEmail] = useState<string>('');
//   const [userAvatarImg, setUserAvatarImg] = useState<string>('');

//   const { data, isLoading } = useMutate({
//     url: END_POINT.AVATAR,
//     method: HTTPMethod.GET,
//   });


//   useEffect(() => {
//     setUserEmail(data?.email);
//     setUserAvatarImg(data?.profileImageSource);
//   }, []);

//   return (
//     <div>
//   )

// };
