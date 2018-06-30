//  libs
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
//  reducers
import modals from './modals'
import servicesData from './servicesData'

export default combineReducers({
  modals,
  servicesData,
  form: formReducer
})
