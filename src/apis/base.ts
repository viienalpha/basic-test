export interface IApiResponse<T> {
  data: T
  code: string
  message: string
}

export interface IApiListResponse<T> {
  data: IApiListResponse_Data<T>
  code: string
  message: string
}

export interface IApiListResponse_Data<T> {
  items: T[]
}
