import { AxiosPromise } from 'axios';
import { useCallback, useReducer } from 'react';
import { NOTIFICATION_TYPE } from '../constants';
import {
  addEmployeeFailure,
  addEmployeeRequest,
  addEmployeeSuccess,
} from '../pages/Employees/state/actions';
import {
  employeesReducer,
  initialState,
} from '../pages/Employees/state/reducer';
import { pushNotification } from '../utils';

type UsePostEmployee = {
  state: IEmployeesState;
  postEmployee: (data?: any) => void;
};

function usePostEmployee(
  callback: (payload?: any) => AxiosPromise
): UsePostEmployee {
  const [state, dispatch] = useReducer(employeesReducer, initialState);

  // const { state, dispatch } = useContext(EmployeesContext);

  const postEmployee = useCallback(
    async (data?: IAddEmployeeData) => {
      try {
        dispatch(addEmployeeRequest());
        const res = await callback(data);
        dispatch(addEmployeeSuccess(res));
        pushNotification('Add employee success!', NOTIFICATION_TYPE.SUCCESS);
      } catch (err) {
        dispatch(addEmployeeFailure(err));
        pushNotification('Add employee fail!', NOTIFICATION_TYPE.ERROR);
      }
    },
    [callback, dispatch]
  );

  return { state, postEmployee };
}

export default usePostEmployee;
