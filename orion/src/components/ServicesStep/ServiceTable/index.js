import React from 'react'
//  libs
import { array } from 'prop-types'

const ServiceTable = ({ servicesData }) => {
  if (!servicesData) return null
  return (
    <div className='row'>
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
          {servicesData.map((item, index) => (
            <tr key={index}>
              <td>{item.providerName}</td>
              <td>{item.service}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

ServiceTable.propTypes = {
  servicesData: array
}

export default ServiceTable
