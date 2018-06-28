import React, { Component } from 'react'
//  libs
import { connect } from 'react-redux'
import { string } from 'prop-types'

class Input extends Component {
  static propTypes = {
    name: string,
    placeholder: string,
    type: string,
    id: string,
    label: string
  }

  static defaultProps = {
    type: 'text'
  }

  onChange = (e) => {
    console.log(e.target.value)
  }

  render () {
    const { name, placeholder, type, id, label, required } = this.props
    return (
      <div>
        <label htmlFor={id}>{label || placeholder}</label>
        <input
          onChange={this.onChange}
          name={name}
          placeholder={placeholder}
          id={id}
          type={type}
          className="validate"
          required={required}
        />
      </div>
    )
  }
}

export default connect(null)(Input)
