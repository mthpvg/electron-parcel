import React from 'react'
import ReactDOM from 'react-dom'

import Shell from './app/shell/Shell'


console.log(`[APP] running in ${process.env.NODE_ENV} mode.`)

ReactDOM.render(<Shell />, document.getElementById('root'))
