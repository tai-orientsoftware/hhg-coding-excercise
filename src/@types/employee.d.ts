interface IEmployee {
  id: number;
  name: string;
  email: string;
  position: string;
}

interface IEmployeesState {
  isLoading: boolean;
  data: IEmployee[];
  total: number;
  error?: any;
}

interface IGetEmployeesParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: string;
}

interface IGetEmployeesResponse {
  data: {
    employees: IEmployee[];
    total?: number;
  };
}

interface IGetEmployeeResponse {
  data: {
    employee: Employee;
  };
}

interface IAddEmployeeData {
  name: string;
  email: string;
  positon: string;
}
