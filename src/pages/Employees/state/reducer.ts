import {
  ADD_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  GET_EMPLOYEES_FAILURE,
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
} from './actions';

export const initialState: IEmployeesState = {
  isLoading: true,
  data: [],
  total: 0,
};

export const employeesReducer = (
  state: IEmployeesState,
  action: IAction
): IEmployeesState => {
  switch (action.type) {
    case GET_EMPLOYEES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.employees,
        total: action.payload.total,
      };
    case GET_EMPLOYEES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
