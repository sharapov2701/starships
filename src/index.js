import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { rootReducer } from './redux/rootReducer'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
