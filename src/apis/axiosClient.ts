import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class AxiosClient {
  private instance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.instance.interceptors.request.use(
      this.interceptBeforeRequest,
      this.interceptRequestError
    );
    this.instance.interceptors.response.use(
      this.interceptResponseData,
      this.interceptResponseError
    );
  }

  interceptBeforeRequest = async (config: AxiosRequestConfig) => {
    // Handle token here...
    return config;
  };

  interceptRequestError = (error: AxiosError) => {
    return Promise.reject(error);
  };

  interceptResponseData = (response: AxiosResponse) => {
    return response.data || response;
  };

  interceptResponseError = (error: AxiosError) => {
    return Promise.reject(error);
  };

  get(url = '/', params = {}, config = {}) {
    return this.instance.get(url, { params, ...config });
  }

  post(url = '/', data = {}, config = {}) {
    return this.instance.post(url, data, config);
  }

  put(url = '/', config = {}) {
    return this.instance.put(url, config);
  }

  patch(url = '/', data: any, config = {}) {
    return this.instance.patch(url, data, config);
  }

  delete(url = '/', params = {}, config = {}) {
    return this.instance.delete(url, { params, ...config });
  }
}

export default new AxiosClient();
