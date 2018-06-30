import React from 'react'
//  libs
import { func, string, bool } from 'prop-types'

const Button = ({ onClick, textContent, withIcon, className }) => (
  <button onClick={onClick} className={className}>
    {textContent}
    {withIcon && <i className="material-icons right">send</i>}
  </button>
)

Button.propTypes = {
  onClick: func,
  textContent: string.isRequired,
  className: string,
  withIcon: bool
}

export default Button
