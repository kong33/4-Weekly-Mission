import { useState, useEffect } from 'react';
import useMutate from '@/src/app/lib/hooks/useMutate';
import { HTTPMethod } from '@/src/app/lib/constants';

const useGetClickedCards = ({ clickedFilterId }: { clickedFilterId: number | null }) => {
  const [cardsDetail, setCardsDetail] = useState<Item[] | null>(null);
  let query = `users/11/links${clickedFilterId ? '?folderId=' + clickedFilterId : ''}`;
  const { mutate } = useMutate<ApiResponse>({ url: query, method: HTTPMethod.GET });

  useEffect(() => {
    const fetchData = async () => {
      await mutate(null, {
        onSuccess: (data: any) => {
          const response = data as ApiResponse;
          setCardsDetail(response.data);//배열
        },
        onError: (error) => console.error(error),
      });
    };
    fetchData();
  }, [clickedFilterId]); // 의존성 배열에 keyword 추가

  return { cardsDetail };
};

export default useGetClickedCards;

type ApiResponse = {
  data: Item[];
};

export interface Item {
    id: number;
    createdAt: string;
    updated_at?: string;
    url: string;
    title?: string;
    description?: string;
    imageSource?: string;
    folder_id?: number;
  }