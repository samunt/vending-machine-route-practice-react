import React, {Component} from 'react'

class Chips extends Component {

    render() {
        return (
            <div>
                <img src={this.props.image} alt="chips"/>
            </div>
        );
    }

}
export default Chips
