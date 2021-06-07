import { useCallback, useState } from 'react';
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_SELECTED } from '../constants';

type UsePagination = {
  pagination: {
    page: number;
    limit: number;
  };
  goToPage: (destination: number) => void;
  changePageLimit: (size: number) => void;
  resetPagination: () => void;
};

const usePagination = (
  page: number = DEFAULT_PAGE_SELECTED,
  limit: number = DEFAULT_PAGE_LIMIT
): UsePagination => {
  const [pagination, setPagination] = useState({ page, limit });

  const goToPage = useCallback(
    destination => setPagination({ ...pagination, page: destination }),
    [pagination]
  );

  const changePageLimit = useCallback(
    size => setPagination({ ...pagination, limit: size }),
    [pagination]
  );

  const resetPagination = useCallback(() => {
    setPagination({ page: DEFAULT_PAGE_SELECTED, limit: DEFAULT_PAGE_LIMIT });
  }, []);

  return {
    pagination,
    goToPage,
    changePageLimit,
    resetPagination,
  };
};

export default usePagination;
