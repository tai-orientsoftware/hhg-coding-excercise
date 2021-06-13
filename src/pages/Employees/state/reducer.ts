import * as actions from './actions';

export const initialState: IEmployeesState = {
  isLoading: true,
  data: [],
  total: 0,
  error: null,
};

export const employeesReducer = (
  state: IEmployeesState,
  action: IAction
): IEmployeesState => {
  switch (action.type) {
    case actions.GET_EMPLOYEES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.employees,
        total: action.payload.total,
      };
    case actions.GET_EMPLOYEES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // data: [action.payload, ...state.data],
        // total: state.total + 1,
      };
    case actions.ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
