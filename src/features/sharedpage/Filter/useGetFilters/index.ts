import { useState, useEffect } from 'react';
import { END_POINT,HTTPMethod } from '@/app/lib/constants/index'
import useMutate from '@/app/lib/hooks/useMutate';
const useGetFilters = () => {
  const [filtersId, setFiltersId] = useState<(number | null)[]>([]);
  const [filtersTitle, setFiltersTitle] = useState<(string | null)[]>([]);
  const { FOLDERS } = END_POINT;
  const { mutate } = useMutate<FilterList>({ url: FOLDERS, method: HTTPMethod.GET });

  useEffect(() => {
    const fetchData = async () => {
      await mutate(null, {
        onSuccess: (result: FilterList) => {
          setFiltersId([null, ...result.data.map((item: ButtonListProps) => item.id)]);
          setFiltersTitle(['전체', ...result.data.map((item: ButtonListProps) => item.name)]);
        },
        onError: (error) => console.error(error),
      });
    };

    fetchData();
  }, []);
  return { filtersId, filtersTitle };
};

export default useGetFilters;

export type FilterList = {
    data: [];
  };
  
  export type ButtonListProps = {
    id: number;
    created_at: string;
    name: string;
    user_id: number;
    favorite: boolean;
    link: object;
  };
  