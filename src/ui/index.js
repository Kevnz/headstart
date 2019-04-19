import React from 'react'
import { hydrate } from 'react-dom'
import App from './core/app'

setTimeout(() => {
  hydrate(<App />, document.getElementById('root'))
}, 3000)
