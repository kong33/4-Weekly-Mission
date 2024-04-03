import { useState, useEffect } from 'react';
import useMutate from '../useMutate';
import { HTTPMethod } from '@/src/constants';

const useGetCardInShared = () => {
  const [cardDetail, setCardDetail] = useState(null);
  const { mutate } = useMutate({ url: 'sample/folder', method: HTTPMethod.GET });
  const fetchData = async () => {
    await mutate(null, {
      onSuccess: (data: any) => {
        let currentObj = data['folder']['links'].length > 0 ? data['folder']['links'] : null;
        setCardDetail(currentObj);
      },
      onError: () => setCardDetail(null),
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { cardDetail };
};

export default useGetCardInShared;
