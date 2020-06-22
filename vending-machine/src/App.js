import React, {Component} from 'react';
import './App.css';
import VendingMachine from './VendingMachine'
import {NavLink, Switch, Route} from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";
import './VendingMachine.css'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soda:'https://i5.walmartimages.ca/images/Large/192/697/6000200192697.jpg',
            chips:'https://www.mrcase.com/media/catalog/product/cache/1/image/410x440/602f0fa2c1f0d1ba5e241f914e856ff9/i/m/image_942396.png',
            sardines:'https://www.thespruceeats.com/thmb/zXTAntMllUQ9nIBCQfrVbF6wEw8=/3595x2696/smart/filters:no_upscale()/moroccan-baked-whole-sardines-recipe-2394638-hero-01-5c7da67146e0fb0001d83dc2.jpg'
        }
    }
    render() {
        return (
            <div className="App">
                <div className="VendingMachine">
                    <nav>
                        <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
                        <NavLink exact activeClassName="active-link" to="/soda">Soda</NavLink>
                        <NavLink exact activeClassName="active-link" to="/chips">Chips</NavLink>
                        <NavLink exact activeClassName="active-link" to="/sardines">Sardines</NavLink>

                    </nav>
                    <Switch>
                        <Route extact path="/chips" render={() => <Chips image={this.state.chips}/>}/>
                        <Route extact path="/soda" render={() => <Soda image={this.state.soda}/>}/>
                        <Route extact path="/sardines" render={() => <Sardines image={this.state.sardines}/>}/>
                        <Route extact path="/" render={() => <VendingMachine/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
