import React, { Component } from 'react'
//  libs
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { func } from 'prop-types'
//  components
import Input from '../FormElements/Input'
import Select from '../FormElements/Select'
import CancelButton from '../Buttons/CancelButton'
import Button from '../FormElements/Button'
//  actions
import { getServices } from '../../actions'
//  validate
import { required, phone } from '../../validate'

class ClientInfoStep extends Component {
  static propTypes = {
    handleSubmit: func,
    getServices: func
  }

  onSubmit = () => {
    const { getServices, history } = this.props

    getServices()
    history.push('/services')
  }

  render () {
    const { handleSubmit } = this.props
     return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Select
          name='reasonCall'
          label='Причина звонка'
          id='reason'
          className="browser-default"
          validate={required}
          script='Здравствуйте, чем могу помочь?'
        >
          <option value='' disabled>Выберите причину</option>
          <option value="Подключение интернета">Подключение интернета</option>
          <option value="Подключение тв">Подключение тв</option>
          <option value="Компьютерная помощь">Компьютерная помощь</option>
        </Select>
        <Input
          name='city'
          placeholder='Город'
          id='city'
          validate={required}
          script='Назовите ваш город'
        />
        <Input
          name='name'
          placeholder='ФИО'
          id='name'
          validate={required}
          script='Назовите ваше полное имя'
        />
        <Input
          name='address'
          placeholder='Адрес'
          id='address'
          validate={required}
          script='Назовите ваш адрес'
        />
        <Input
          name='phone'
          placeholder='Контактный номер телефона'
          id='phone'
          validate={[ required, phone ]}
          script='Назовите ваш контактный номер телефона'
        />
        <Input
          name='comment'
          placeholder='Дополнительный комментарий'
          id='comment'
        />
        <Button
          textContent='Запросить доступные услуги'
          className='waves-effect waves-light btn'
          withIcon
        />
        <CancelButton />
      </form>
    )
  }
}

export default compose(
  connect(null, { getServices }),
  reduxForm({
    form: 'applicationForm',
    destroyOnUnmount: false
  })
)(ClientInfoStep)
