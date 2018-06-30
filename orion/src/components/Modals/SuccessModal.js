import React, { Component } from 'react'
//  components
import Button from '../FormElements/Button'
//  libs
import { compose } from 'redux'
import { destroy } from 'redux-form'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { func, bool } from 'prop-types'
//  actions
import { handleChangeModal } from '../../actions'
//  context
import modalTypes from '../../context/modalTypes'

class SuccessModal extends Component {
  static propTypes = {
    handleChangeModal: func,
    isOpen: bool
  }

  handleClick = () => {
    const { destroyForm, handleChangeModal, history } = this.props

    destroyForm()
    history.push('/')
    handleChangeModal()
  }

  render() {
    const { isOpen } = this.props

    if (!isOpen) return null
    return (
      <div className='modal-container'>
        <div className="modal">
          <div className="modal-content">
            <b>Заявка успешно отправлена</b>
            <div className="col s12 m6">
              <div className="card teal">
                <div className="card-content white-text">
                  <span className="card-title">Скрипт:</span>
                  <p>Спасибо за обращение, ждите звонка нашего оператора.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button
              textContent='Закрыть'
              className='waves-effect waves-light btn'
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ modals, history }) => ({
  isOpen: modals.SUCCESS_MODAL.isOpen,
  history
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeModal: () => dispatch(handleChangeModal(modalTypes.SUCCESS_MODAL)),
  destroyForm: () => {
    dispatch(destroy('applicationForm'))
    dispatch(destroy('cancelRequestForm'))
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(SuccessModal)
