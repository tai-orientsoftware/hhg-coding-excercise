import { useCallback, useState } from 'react';
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_SELECTED } from '../constants';

type UsePagination = {
  pagination: { page: number; limit: number };
  changeCurrentPage: (currentPage: number) => void;
  changePageLimit: (size: number) => void;
  onChangePagination: (config: { page: number; limit: number }) => void;
  resetPagination: () => void;
};

function usePagination(
  page: number = DEFAULT_PAGE_SELECTED,
  limit: number = DEFAULT_PAGE_LIMIT
): UsePagination {
  const [pagination, setPagination] = useState({ page, limit });

  const changeCurrentPage = useCallback(
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
    changeCurrentPage,
    changePageLimit,
    onChangePagination,
    resetPagination,
  };
}

export default usePagination;
