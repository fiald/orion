import React, { Component } from 'react'
//  components
import Button from '../FormElements/Button'
import Select from '../FormElements/Select'
//  libs
import { compose } from 'redux'
import { reduxForm, destroy } from 'redux-form'
import { withRouter } from 'react-router-dom';
import { func, bool } from 'prop-types'
import { connect } from 'react-redux'
import { handleChangeModal } from '../../actions'
import modalTypes from '../../context/modalTypes'
//  actions
import { getServices } from '../../actions'
//  validate
import { required } from '../../validate'
//  utild
import get from 'lodash/get'

class CancelRequestModal extends Component {
  static propTypes = {
    handleChangeModal: func,
    handleSubmit: func,
    deleteServicesData: func,
    isOpen: bool
  }

  handleCloseModal = () => {
    this.props.handleChangeModal()
  }

  onSubmit = () => {
    const { formData, destroyForm, history, handleChangeModal, deleteServicesData } = this.props

    if (get(formData, 'values', '')) {
      deleteServicesData()
      destroyForm()
      history.push('/')
      handleChangeModal()
    }
  }

  render () {
    const { handleSubmit, isOpen } = this.props
    if (!isOpen) return null
    return (
      <div className='modal-container'>
        <div className='modal'>
          <div className='modal-content'>
            <h4>Отмена заявки</h4>
            <div className='input-field col s12'>
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <Select
                  name='reasonCancel'
                  label='Причина завершения заявки'
                  id='reasonCancel'
                  className='browser-default'
                  validate={required}
                >
                  <option value='' disabled>Причина досрочного завершения заявки</option>
                  <option value='Сбой связи'>Сбой связи</option>
                  <option value='Сбой связи'>Сбой связи</option>
                  <option value='Сбой связи'>Сбой связи</option>
                  <option value='Сбой связи'>Сбой связи</option>
                </Select>
                <textarea id='textarea2' className='materialize-textarea' placeholder='Комментарий'></textarea>
                <Button
                  textContent='Отменить заявку'
                  className='waves-effect waves-green btn-flat'
                  onClick={this.handleSubmit}
                />
              </form>
            </div>
          </div>
          <div className='modal-footer'>
            <Button
              textContent='Закрыть'
              className='waves-effect waves-light btn'
              onClick={this.handleCloseModal}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ modals, form, history }) => ({
  isOpen: modals.CONFIRM_CANCELED_REQUEST_MODAL.isOpen,
  formData: form.cancelRequestForm,
  history
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeModal: () => dispatch(handleChangeModal(modalTypes.CONFIRM_CANCELED_REQUEST_MODAL)),
  destroyForm: () => dispatch(destroy('applicationForm')),
  deleteServicesData: () => dispatch(getServices(false))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'cancelRequestForm'
  }),
  withRouter
)(CancelRequestModal)
