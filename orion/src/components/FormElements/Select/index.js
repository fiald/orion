import React from 'react'
//  libs
import { Field } from 'redux-form'
import { string, node } from 'prop-types'

const Select = ({ input, meta: { touched, error }, name, type, id, label, children, className, script }) => (
  <div className='row'>
    <div className='flex'>
      <i>{script}</i>
      <label htmlFor={id}>{label}</label>
    </div>
    <select
      name={name}
      className={error && className + 'error'}
      type={type}
      id={id}
      {...input}
    >
      {children}
    </select>
    {touched && (error && <span className='error-container'>{error}</span>)}
  </div>
)

Select.propTypes = {
  name: string,
  type: string,
  id: string,
  label: string,
  script: string,
  children: node
}

Select.defaultProps = {
  type: 'text'
}

export default (props) => <Field {...props} component={Select} />
 