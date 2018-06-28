import React, { Component } from 'react'
//  libs
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
//  components
import ClientInfoForm from './components/ClientInfoForm'
import MainLayout from './layout/MainLayout'
//  store
import store from './store'
//  styles
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' />
            <MainLayout>
              <Route exact path='/form' component={ClientInfoForm} />
            </MainLayout>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
