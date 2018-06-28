import { HANDLE_CHANGE_MODAL } from './types'

export const handleChangeModal = (modalType) => {
  return {
    type: HANDLE_CHANGE_MODAL,
    payload: modalType
  }
}
