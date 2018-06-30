import React, { Component } from 'react'
//  libs
import { func } from 'prop-types'
import { connect } from 'react-redux'
//  components
import Button from '../FormElements/Button'
//  actions
import { handleChangeModal } from '../../actions'
//  context
import modalTypes from '../../context/modalTypes'

class CancelButton extends Component {
  static propTypes = {
    handleChangeModal: func
  }

  onClick = (e) => {
    e.preventDefault()
    this.props.handleChangeModal(modalTypes.CONFIRM_CANCELED_REQUEST_MODAL)
  }

  render () {
    return (
      <Button
        textContent='Отменить заявку'
        onClick={this.onClick}
        className="waves-effect waves-teal btn-flat"
      />
    )
  }
}

export default connect(null, { handleChangeModal })(CancelButton)
