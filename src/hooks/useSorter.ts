import { useCallback, useState } from 'react';
import { DEFAULT_SORT_BY, DEFAULT_SORT_ORDER } from '../constants';

type UseSorterProps = {
  sorter: {
    sortBy: string;
    order: string;
  };
  changeSortField: (field: string) => void;
  changeSortOrder: (direction: string) => void;
  onSorterChanges: (config: { field: string; direction: string }) => void;
  resetSorter: () => void;
};

function useSorter(
  sortBy: string = DEFAULT_SORT_BY,
  order: string = DEFAULT_SORT_ORDER
): UseSorterProps {
  const [sorter, setSorter] = useState({ sortBy, order });

  const changeSortField = useCallback(
    (field: string) => setSorter({ ...sorter, sortBy: field }),
    [sorter]
  );

  const changeSortOrder = useCallback(
    (direction: string) => setSorter({ ...sorter, order: direction }),
    [sorter]
  );

  const onSorterChanges = useCallback(
    config => setSorter({ ...sorter, ...config }),
    [sorter]
  );

  const resetSorter = useCallback(() => {
    setSorter({ sortBy: DEFAULT_SORT_BY, order: DEFAULT_SORT_ORDER });
  }, []);

  return {
    sorter,
    changeSortField,
    changeSortOrder,
    onSorterChanges,
    resetSorter,
  };
}

export default useSorter;
