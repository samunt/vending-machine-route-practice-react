import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Dog from './Dog'
import About from './About'
import Contact from './Contact'
import {Route, Switch, NavLink} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <nav>
            <NavLink extact="true" activeClassName="active-link" to="/dog/r">Dog Render</NavLink>
            <NavLink extact="true" activeClassName="active-link" to="/dog/c">Dog Component</NavLink>
            <NavLink extact="true" activeClassName="active-link" to="/contact">Contact</NavLink>
            <NavLink extact="true" activeClassName="active-link" to="/">About</NavLink>
        </nav>
        <Switch>
            <Route extact="true" path="/dog/c" component={() => <Dog name='Biscuit'/>}/>
            <Route extact="true" path="/dog/r" render={() => <Dog name='Biscuit'/>}/>
            {/*using component creates multiple component instances*/}
            {/*Using render updates the single instance*/}
            <Route extact="true" path="/contact" component={Contact}/>
            <Route extact="true" path="/" component={About}/>

        </Switch>
    </div>
  )
}

export default App;
