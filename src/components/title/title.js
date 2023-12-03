import React from 'react';
import './title.css';
const Title = (props) => {
  return (
    <div className='title'>
        <div className='lineTitle'/>
        <h1 className='headingTitle'>{props.title}</h1>
        <div className='lineTitle'/>
    </div>
  )
}

export default Title