import React from 'react'
//  libs
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { object, array, bool, oneOfType } from 'prop-types'
//  components
import Navbar from './layout/Navbar'
import CancelRequestModal from './components/Modals/CancelRequestModal'
import SuccessModal from './components/Modals/SuccessModal'
import ClientInfoStep from './components/ClientInfoStep'
import ServicesStep from './components/ServicesStep'
import ConfirmStep from './components/ConfirmStep'
//  utils
import get from 'lodash/get'
//  styles
import './App.css'

const App = ({ servicesData, formData }) => (
  <main>
    <Navbar withServiceLink={servicesData} withConfirmLink={get(formData, 'values.service', false)} />
    <div className='container'>
      <Route exact path='/' component={ClientInfoStep} />
      {servicesData &&
        <div>
          <Route exact path='/services' component={ServicesStep} />
          <Route exact path='/confirm' component={ConfirmStep} />
        </div>
      }
    </div>
    <CancelRequestModal />
    <SuccessModal />
  </main>
)

App.propTypes = {
  servicesData: oneOfType([ array, bool ]),
  formData: object
}

const mapStateToProps = ({ servicesData, form }) => ({
  servicesData: servicesData.data,
  formData: form.applicationForm
})

export default connect(mapStateToProps, null)(App)
