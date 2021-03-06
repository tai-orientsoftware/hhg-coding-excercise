import { AxiosResponse } from 'axios';

export const GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST';
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';

export const ADD_EMPLOYEE_REQUEST = 'ADD_EMPLOYEE_REQUEST';
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE';

export const getEmployeesRequest = (): IAction => ({
  type: GET_EMPLOYEES_REQUEST,
});

export const getEmployeesSuccess = (payload: AxiosResponse): IAction => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload,
});

export const getEmployeesFailure = (payload: AxiosResponse): IAction => ({
  type: GET_EMPLOYEES_FAILURE,
  payload,
});

export const addEmployeeRequest = (): IAction => ({
  type: ADD_EMPLOYEE_REQUEST,
});

export const addEmployeeSuccess = (payload: AxiosResponse): IAction => ({
  type: ADD_EMPLOYEE_SUCCESS,
  payload,
});

export const addEmployeeFailure = (payload: AxiosResponse): IAction => ({
  type: ADD_EMPLOYEE_FAILURE,
  payload,
});
