import axios from 'axios'
import { buildWebStorage, setupCache } from 'axios-cache-interceptor'
import { t } from 'i18next'
import { useCommon } from '../store/common'
declare global {
  interface Window {
    ENV:any;
  }
}


const apiUrl = window.ENV.REACT_APP_API_URL
const prefixCache = 'api:'
const init = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) as string
    if (
      key.indexOf(prefixCache) == 0 &&
      key.indexOf(`${prefixCache}${window.ENV.REACT_APP_CONFIG_VERSION}`) !== 0
    ) {
      localStorage.removeItem(key)
    }
  }
}
init()


const handleErrorResponse = (err: any) => {
  if (err.response?.status === 401) {
    return err
  }

  if (err.response?.status === 429) {
    err.response = {
      data: {
        message: t(`error_message.too_many_request`)
      }
    }
    return err
  }



  return err
}


const axiosConfig = {
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  validateStatus: (status: number) => status === 200
}
export const instance = axios.create(axiosConfig)

export const cacheInstance = setupCache(axios.create(axiosConfig))

export const cacheLocalStorageInstance = setupCache(axios.create(axiosConfig), {
  storage: buildWebStorage(localStorage, prefixCache)
})

cacheInstance.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => Promise.reject(error)
)
cacheLocalStorageInstance.interceptors.request.use(
  async (config) => {

    return config
  },
  (error) => Promise.reject(error)
)
instance.interceptors.request.use(
  async (config) => {

    return config
  },
  (error) => Promise.reject(error)
)

cacheInstance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    handleErrorResponse(err)
    return Promise.reject(err)
  }
)
cacheLocalStorageInstance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    handleErrorResponse(err)
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(

  (res) => {
    return res
  },
  (err) => {
    handleErrorResponse(err)
    return Promise.reject(err)
  }
)

export default {
  instance: instance,
  cacheInstance: cacheInstance,
  cacheLocalStorageInstance: cacheLocalStorageInstance
}
