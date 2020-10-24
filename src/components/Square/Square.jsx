import React, { Component } from 'react';
// import '../color_game.css';

// const Square = ({color, children, setCorrectView, setWrongView }) => {
//     return (
//         <div
//             onClick={ children === color ? setCorrectView(color) : setWrongView(color)}
//             className="square"
//             style={{ 
//                 backgroundColor: color 
//             }}
//         >
//         </div>
//     )   
// }

class Square extends Component {
    //render a square with different properties
    render() {
        return (
            <div
                onClick={this.changeColor}
                className="square"
                style={{ backgroundColor: this.props.backgroundColor }}
                ref="square">
            </div>
        );
    }

    //sends parameters to formatSquareColor on ColorGame.jsx
    changeColor = () => {
        if (this.props.children === this.props.backgroundColor) {
            this.props.squareColor(this.props.backgroundColor, true);
        }
        else {
            this.props.squareColor(this.props.backgroundColor, false);
            this.refs.square.style.visibility = "hidden";  //hides incorrect square onClick
        }
    }
}

export default Square;
