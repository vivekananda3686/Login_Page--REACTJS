import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Header from './components/Header'

const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={LoginForm} />
        <Route component={NotFound} />
      </Switch>
  )
}

export default App
