import React, { Component } from 'react'
//  libs
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { array } from 'prop-types'
//  components
import ServiceTable from './ServiceTable'
import Select from '../FormElements/Select'
import CancelButton from '../Buttons/CancelButton'
import Button from '../FormElements/Button'
//  validate
import { required } from '../../validate'

class ServicesDataForm extends Component {
  static propTypes = {
    servicesData: array
  }

  onSubmit = () => {
    this.props.history.push('/confirm')
  }

  render () {
    const { servicesData, handleSubmit } = this.props
    return (
      <div>
        <ServiceTable servicesData={servicesData} />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Select
            name='service'
            label='Выберите услугу'
            id='service'
            validate={required}
            script='Имеются следующие тарифы... Какой вы бы хотели подключить?'
          >
            <option value='' disabled>Выберите услугу</option>
            {servicesData.map((item, index) =>
              <option key={index} value={item.service}>{item.service}</option> 
            )}
          </Select>
          <Button
            textContent='Далее'
            className='waves-effect waves-light btn'
          />
          <CancelButton />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ servicesData }) => ({
  servicesData: servicesData.data
})

export default compose(
  connect(mapStateToProps, null),
  reduxForm({
    form: 'applicationForm',
    destroyOnUnmount: false
  })
)(ServicesDataForm)
