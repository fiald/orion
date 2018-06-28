import React, { Component } from 'react'
//  libs
import { func } from 'prop-types'
import { connect } from 'react-redux'
//  actions
import { handleChangeModal } from '../../actions'
//  context
import modalTypes from '../../context/modalTypes'

class TableServiceOpenButton extends Component {
  static propTypes = {
    handleChangeModal: func
  }

  onClick = (e) => {
    e.preventDefault()
    this.props.handleChangeModal(modalTypes.SERVICE_TABLE_MODAL)
  }

  render() {
    return (
      <a onClick={this.onClick}>
        Таблица доступных услуг
      </a>
    )
  }
}

export default connect(null, { handleChangeModal })(TableServiceOpenButton)
