import React, {Component} from 'react'

class Soda extends Component {

    render() {
        return (
            <div>
                <img src={this.props.image} alt="soda"/>
            </div>
        );
    }

}
export default Soda
