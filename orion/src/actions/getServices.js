import { GET_SERVICES } from './types'
import services from '../data'

export const getServices = (serviceData = services) => {
  return {
    type: GET_SERVICES,
    payload: serviceData
  }
}
