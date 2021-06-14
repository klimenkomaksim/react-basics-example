/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

// export const HelloWorld = () => {
//     return React.createElement(
//         'h1',
//         { className: 'hello' },
//         'Hello, world!'
//     );
// };

// export const HelloWorld = () => {
//     return (
//         <h1 className='hello'>
//             Hello, world!
//         </h1>
//     );
// };

// export const HelloWorld = (props) => {
//     const { name } = props;

//     return (
//         <h1 className='hello' onClick={() => alert('HELLO!')}>
//             Hello, {name}!
//         </h1>
//     );
// };

export class HelloWorld extends Component {
    render () {
        return (
            <h1 className='hello'>
                Hello, {this.props.name}!
            </h1>
        );
    }
}
