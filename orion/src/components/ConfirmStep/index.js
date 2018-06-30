import React, { Component } from 'react'
//  libs
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { func, object } from 'prop-types'
//  components
import Button from '../FormElements/Button'
import CancelButton from '../Buttons/CancelButton'
//  actions
import { handleChangeModal } from '../../actions'
//  context
import modalTypes from '../../context/modalTypes'
//  utils
import reduce from 'lodash/reduce'
import { inputCaption } from '../../utils'

class ConfirmStep extends Component {
  static propTypes = {
    handleSubmit: func,
    handleChangeModal: func,
    formData: object
  }

  onSubmit = (formData) => {
    formData.map(item => window.localStorage.setItem(item.name, item.value))
    this.props.handleChangeModal(modalTypes.SUCCESS_MODAL)
  }

  render () {
    const { formData, handleSubmit } = this.props

    const forms = reduce(formData.values, (result, value, key) => {
      result.push({
        name: key,
        value
      })
      return result
    }, [])

    return (
      <form onSubmit={handleSubmit(() => this.onSubmit(forms))}>
        {forms.map((item, index) => (
            <div className='row' key={index}>
              <div>{inputCaption(item.name)}</div>
              <b>{item.value}</b>
            </div>
        ))}
        <Button
          textContent='Отправить заявку'
          className='waves-effect waves-light btn'
          withIcon
        />
        <CancelButton />
      </form>
    )
  }
}

const mapStateToProps = ({ form }) => ({
  formData: form.applicationForm
})

export default compose(
  connect(mapStateToProps, { handleChangeModal }),
  reduxForm({
    form: 'applicationForm',
    destroyOnUnmount: false
  })
)(ConfirmStep)
