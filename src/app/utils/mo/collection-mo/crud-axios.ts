import { AxiosResponse } from 'axios'

export interface CrudAxios<T> {
  addOne(parameter: T): Promise<AxiosResponse<any>>
  getAll(parameter: T): Promise<AxiosResponse<any>>
  getBy(parameter: T): Promise<AxiosResponse<any>>
  getById(parameter: T): Promise<AxiosResponse<any>>
  alterById(parameter: T): Promise<AxiosResponse<any>>
  delById(parameter: T): Promise<AxiosResponse<any>>
}
