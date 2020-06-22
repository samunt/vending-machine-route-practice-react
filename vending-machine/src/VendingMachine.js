import React, {Component} from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import Soda from './Soda'
import Chips from './Chips'
import Sardines from './Sardines'
class VendingMachine extends Component {
    render() {
        return (
           <div>
               <nav>
                   <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
                   <NavLink exact activeClassName="active-link" to="/soda">Soda</NavLink>
                   <NavLink exact activeClassName="active-link" to="/chips">Chips</NavLink>
                   <NavLink exact activeClassName="active-link" to="/sardines">Sardines</NavLink>
               </nav>

           </div>
        )
    }
}
export default VendingMachine
