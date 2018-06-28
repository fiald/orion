import React, { Component } from 'react'
//  libs
import { func, bool } from 'prop-types'
import { connect } from 'react-redux'
import { handleChangeModal } from '../../actions'
import modalTypes from '../../context/modalTypes'

class ServiceTable extends Component {
  static propTypes = {
    handleChangeModal: func,
    isOpen: bool
  }

  onClick = (e) => {
    e.preventDefault()
    this.props.handleChangeModal(modalTypes.SERVICE_TABLE_MODAL)
  }

  handleSubmit = () => {
    console.log('Отправка...')
    this.props.handleChangeModal(modalTypes.SERVICE_TABLE_MODAL)
  }

  render () {
    if (!this.props.isOpen) return null
    return (
      <div className='modal-container'>
        <div className="modal">
          <div className="modal-content">
            <h4>Доступные услуги</h4>
            <table>
              <thead>
                <tr>
                  <th>Провайдер</th>
                  <th>Предоставляемые услуги</th>
                  <th>Стоимость услуг</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.providerName}</td>
                    <td>{item.service}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button onClick={this.handleSubmit} className="modal-close waves-effect waves-green btn-flat">Закрыть</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ modals }) => ({
  isOpen: modals.SERVICE_TABLE_MODAL.isOpen
})

export default connect(mapStateToProps, { handleChangeModal })(ServiceTable)
