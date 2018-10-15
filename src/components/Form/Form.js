import React from 'react';
import './Form.css';

export default function Form(props) {
  return (
    <div className='form'>
      {props.info}
    </div>
  )
}