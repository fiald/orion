import React from 'react'
//  libs
import { Link } from 'react-router-dom'
import { func } from 'prop-types'

const AcceptCallButton = ({ acceptCall }) => (
  <Link to='/form' onClick={acceptCall} className='waves-effect waves-light btn accept-button'>
    Ответить на звонок
  </Link>
)

AcceptCallButton.propTypes = {
  acceptCall: func
}

export default AcceptCallButton
