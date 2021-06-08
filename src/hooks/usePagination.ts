import { useCallback, useState } from 'react';
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_SELECTED } from '../constants';

type UsePagination = {
  pagination: { page: number; limit: number };
  setCurrentPage: (currentPage: number) => void;
  changePageLimit: (size: number) => void;
  onChangePagination: (config: any) => void;
  resetPagination: () => void;
};

function usePagination(
  page: number = DEFAULT_PAGE_SELECTED,
  limit: number = DEFAULT_PAGE_LIMIT
): UsePagination {
  const [pagination, setPagination] = useState({ page, limit });

  const setCurrentPage = useCallback(
    currentPage => setPagination({ ...pagination, page: currentPage }),
    [pagination]
  );

  const changePageLimit = useCallback(
    size => setPagination({ ...pagination, limit: size }),
    [pagination]
  );

  const onChangePagination = useCallback(
    config => setPagination({ ...pagination, ...config }),
    [pagination]
  );

  const resetPagination = useCallback(() => {
    setPagination({ page: DEFAULT_PAGE_SELECTED, limit: DEFAULT_PAGE_LIMIT });
  }, []);

  return {
    pagination,
    setCurrentPage,
    changePageLimit,
    onChangePagination,
    resetPagination,
  };
}

export default usePagination;
