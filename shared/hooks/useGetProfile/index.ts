import { useState, useEffect } from 'react';
import useMutate from '../useMutate';
import { END_POINT, HTTPMethod } from '@/shared/constants';
import { OwnerData, FolderData } from './index.types';

const useGetProfile = () => {
  const [ownerData, setOwnerData] = useState<OwnerData>({
    ownerImage: null,
    ownerName: null,
    folderName: null,
  });
  const { SHARED_LINKS } = END_POINT;
  //주의: 이거 구조분해할당으로 할당 안 하면 에러 뜸 ( Folders, HTTPMethod.POST) 처럼!
  const { mutate } = useMutate<FolderData>({
    url: SHARED_LINKS,
    method: HTTPMethod.POST,
  });

  useEffect(() => {
    const fetchData = async () => {
      await mutate(null, {
        onSuccess: (data: FolderData) => {
          setOwnerData({
            ownerImage: data?.folder?.owner?.profileImageSource,
            ownerName: data?.folder?.owner?.name,
            folderName: data?.folder?.name,
          });
        },
        onError: (error: unknown) => {
          console.error(error);
        },
      });
    };

    fetchData();
  }, []);

  return ownerData;
};
export default useGetProfile;
