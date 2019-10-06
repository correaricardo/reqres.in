// General imports
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
// Components
import App from './components/App'
// Redux
import { Provider } from "react-redux"
import store from "./redux/store/index"

// Variables
const container = document.getElementById('root')

// Render
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    container);