import { AxiosPromise } from 'axios';
import { useCallback, useReducer } from 'react';
import * as actions from '../pages/Employees/state/actions';
import {
  employeesReducer,
  initialState,
} from '../pages/Employees/state/reducer';

type UseFetchEmployees = {
  state: IEmployeesState;
  fetchEmployees: (params?: any) => void;
};

function useFetchEmployees(
  callback: (payload?: any) => AxiosPromise
): UseFetchEmployees {
  const [state, dispatch] = useReducer(employeesReducer, initialState);

  const fetchEmployees = useCallback(
    async (params?) => {
      try {
        dispatch(actions.getEmployeesRequest());
        const res = await callback(params);
        dispatch(actions.getEmployeesSuccess(res));
      } catch (err) {
        dispatch(actions.getEmployeesFailure(err));
      }
    },
    [callback, dispatch]
  );

  return { state, fetchEmployees };
}

export default useFetchEmployees;
