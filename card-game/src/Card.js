import React, {Component} from 'react'
import './Card.css'
class Card extends Component {
    render() {
        console.log(this.props.rotate)
        let rotation = `rotate(${this.props.rotate}deg`
        return (
            <div>
                <button
                    onClick={this.props.getCard}
                    style={{
                        visibility: this.props.cardCount === 0 && 'hidden'
                    }}>GET CARD</button><br/><br/><br/>
                <img src={this.props.cardImg}
                     alt="card"
                     style={{ transform: rotation, visibility: this.props.cardImg ? 'visible' : 'none'}}
                />
                <h1 style={{
                    visibility: this.props.cardCount !== 0 ? 'hidden' : 'visible'
                }}>No more cards</h1>
            </div>
        )
    }
}
export default Card
