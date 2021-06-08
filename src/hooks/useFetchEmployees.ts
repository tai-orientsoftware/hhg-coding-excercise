import { AxiosPromise } from 'axios';
import { useCallback, useReducer } from 'react';
import * as actions from '../pages/Employees/state/actions';
import {
  employeesReducer,
  initialState,
} from '../pages/Employees/state/reducer';
import usePagination from './usePagination';
import useSorter from './useSorter';

type UseFetchEmployees = {
  state: IEmployeesState;
  fetchEmployees: (params?: any) => void;
  pagination: any;
  onChangePagination: (config: any) => void;
  resetPagination: () => void;
};

function useFetchEmployees(
  callback: (data?: any) => AxiosPromise
): UseFetchEmployees {
  const [state, dispatch] = useReducer(employeesReducer, initialState);
  const { pagination, onChangePagination, resetPagination } = usePagination();
  const { sorter } = useSorter();

  const fetchEmployees = useCallback(async () => {
    const params = { ...pagination, ...sorter };

    try {
      dispatch(actions.getEmployeesRequest());
      const res = await callback(params);
      dispatch(actions.getEmployeesSuccess(res));
    } catch (err) {
      dispatch(actions.getEmployeesFailure(err));
    }
  }, [callback, pagination, sorter]);

  return {
    state,
    fetchEmployees,
    pagination,
    onChangePagination,
    resetPagination,
  };
}

export default useFetchEmployees;
