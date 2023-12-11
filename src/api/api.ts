
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://192.168.14.15:8180',
});

export default api;

export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return await api.get<T>(url, config);
};

export const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return await api.post<T>(url, data, config);
};

export const put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return await api.put<T>(url, data, config);
};

export const remove = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return await api.delete<T>(url, config);
};



// import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
//
// const api1: AxiosInstance = axios.create({
//     baseURL: 'http://192.168.88.123:8180',
// });
// const api2: AxiosInstance = axios.create({
//     baseURL: 'http://192.168.88.122:8180',
// });
//
// let activeApi = api1;
//
// const switchToApi2 = () => {
//     activeApi = api2;
// };
//
// activeApi.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         switchToApi2();
//         return Promise.reject(error);
//     }
// );
//
// export default activeApi;
//
// export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
//     return await activeApi.get<T>(url, config);
// };
//
// export const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
//     return await activeApi.post<T>(url, data, config);
// };
//
// export const put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
//     return await activeApi.put<T>(url, data, config);
// };
//
// export const remove = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
//     return await activeApi.delete<T>(url, config);
// };

