import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Dog from './Dog'
import About from './About'
import Contact from './Contact'
import {Route, Switch, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/dog">DOG</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">About</Link>
        </nav>
        <Switch>
            <Route extact path="/dog" component={Dog}/>
            <Route extact path="/contact" component={Contact}/>
            <Route extact path="/" component={About}/>
        </Switch>
    </div>
  )
}

export default App;
