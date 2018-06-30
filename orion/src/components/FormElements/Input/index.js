import React from 'react'
//  libs
import { Field } from 'redux-form'
import { string } from 'prop-types'

const Input =  ({ input, meta: { touched, error }, name, placeholder, type, id, label, script }) => {
  const className = (touched && error) ? 'error' : ''

  return (
    <div className='row'>
      <div className='flex'>
        <i>{script}</i>
        <label htmlFor={id}>{label || placeholder}</label>
      </div>
      <input
        name={name}
        className={className}
        placeholder={placeholder}
        type={type}
        id={id}
        {...input}
      />
      {touched && (error && <span className='error-container'>{error}</span>)}
    </div>
  )
}

Input.propTypes = {
  name: string,
  placeholder: string,
  type: string,
  id: string,
  label: string,
  script: string
}

Input.defaultProps = {
  type: 'text'
}

export default (props) => <Field {...props} component={Input} />
