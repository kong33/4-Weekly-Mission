import { useState, useEffect } from 'react';
import { END_POINT,HTTPMethod } from '@/src/constants';
import { FilterList, ButtonListProps } from './index.types';
import useMutate from '@/src/shared/hooks/useMutate';

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
