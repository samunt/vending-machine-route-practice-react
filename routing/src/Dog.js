import React, {Component} from 'react'
import './Components.css'
class Dog extends Component {
    render() {
        return (
            <div className="Card">
                <p>My name is: {this.props.name}</p>
                <img src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq" alt="doggy"/>
            </div>
        )
    }
}
export default Dog
