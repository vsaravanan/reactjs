import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the App container component
import App from './App'

// Pass the store into the app container
render(<App />,  document.getElementById('root'));