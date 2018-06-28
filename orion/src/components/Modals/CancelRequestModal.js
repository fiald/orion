import React, { Component } from 'react'
//  libs
import { func, bool } from 'prop-types'
import { connect } from 'react-redux'
import { handleChangeModal } from '../../actions'
import modalTypes from '../../context/modalTypes'

class CancelRequestModal extends Component {
  static propTypes = {
    handleChangeModal: func,
    isOpen: bool
  }

  onClick = (e) => {
    e.preventDefault()
    this.props.handleChangeModal(modalTypes.CONFIRM_CANCELED_REQUEST_MODAL)
  }

  handleSubmit = () => {
    console.log('Отправка...')
    this.props.handleChangeModal(modalTypes.CONFIRM_CANCELED_REQUEST_MODAL)
  }

  render () {
    if (!this.props.isOpen) return null
    return (
      <div className='modal-container'>
        <div className="modal">
          <div className="modal-content">
            <h4>Отмена заявки</h4>
            <div className="input-field col s12">
              <textarea id="textarea2" className="materialize-textarea"></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={this.handleSubmit} className="modal-close waves-effect waves-green btn-flat">Отправить</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ modals }) => ({
  isOpen: modals.CONFIRM_CANCELED_REQUEST_MODAL.isOpen
})

export default connect(mapStateToProps, { handleChangeModal })(CancelRequestModal)
