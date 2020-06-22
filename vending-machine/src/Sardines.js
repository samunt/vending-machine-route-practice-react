import React, {Component} from 'react'

class Sardines extends Component {

    render() {
        return (
            <div>
                <img src={this.props.image} alt="sardines"/>
            </div>
        );
    }

}
export default Sardines
