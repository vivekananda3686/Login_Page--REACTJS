import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={LoginForm} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
