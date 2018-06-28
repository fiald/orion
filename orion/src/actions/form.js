import { INPUT_ONCHANGE } from './types'

export const inputOnChange = (payload) => {
  return {
    type: INPUT_ONCHANGE,
    payload
  }
}
