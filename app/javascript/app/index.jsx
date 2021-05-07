import React from 'react'
import ReactDOM from 'react-dom'

import Chirps from './components/Chirps';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Chirps />,
    document.body.appendChild(document.createElement('div')),
  )
})
