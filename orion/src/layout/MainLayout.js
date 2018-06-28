import React, { Component } from 'react'
//  components
import Navbar from './Navbar'
import AcceptCallButton from '../components/AcceptCallButton'
import CancelRequestModal from '../components/Modals/CancelRequestModal'
import ServiceTable from '../components/Modals/ServiceTable'

const data = [
  {
    providerName: 'Орион',
    service: 'Интернет 100мб/с',
    price: '350руб/мес'
  },
  {
    providerName: 'Орион',
    service: 'Интернет 200мб/с',
    price: '500руб/мес'
  },
  {
    providerName: 'Орион',
    service: 'Интернет + ТВ',
    price: '450руб/мес'
  }
]

class MainLayout extends Component {
  state = {
    callAccepted: false
  }

  handleAcceptCall = () => {
    this.setState({ callAccepted: true })
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className='container'>
          {this.props.children}
        </div>
        {!this.state.callAccepted && <AcceptCallButton acceptCall={this.handleAcceptCall} />}
        <CancelRequestModal />
        <ServiceTable data={data} />
      </div>
    )
  }
}

export default MainLayout
