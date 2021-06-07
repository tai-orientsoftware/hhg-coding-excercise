import { AxiosPromise } from 'axios';
import axiosClient from './axiosClient';

export const getEmployeesAPI = (params?: IGetEmployeesParams): AxiosPromise =>
  axiosClient.get('/employees', params);

export const addEmployeeAPI = (data: IAddEmployeeData): AxiosPromise =>
  axiosClient.post('/employees', data);
