import React from 'react'
//  components
import Input from '../FormElements/Input'
import CancelButton from '../Buttons/CancelButton'

const ClientInfoForm = () => (
  <form>
    <Input
      name='city'
      placeholder='Город'
      id='city'
      required
    />
    <Input
      name='name'
      placeholder='ФИО'
      id='name'
    />
    <Input
      name='address'
      placeholder='Адрес'
      id='address'
      required
    />
    <Input
      name='reason'
      placeholder='Причина звонка'
      id='reason'
    />
    <Input
      name='comment'
      placeholder='Дополнительный комментарий'
      id='comment'
    />
    <Input
      name='phone'
      placeholder='Контактный номер телефона'
      id='phone'
    />
    <button className="btn waves-effect waves-light">
      Узнать доступные услуги
      <i className="material-icons right">send</i>
    </button>
    <CancelButton />
  </form>
)

export default ClientInfoForm
