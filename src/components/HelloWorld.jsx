import React, { Component } from 'react';

/*
    We can create React components event without JSX,
    to do it just call React.createElement method and pass 3 arguments:
        - the first is component or element,
        - the second is a prop object,
        - the last is children of this component
*/
export const HelloWorldWithoutJSX = () => {
    return React.createElement(
        'h1',
        { className: 'hello' },
        'Hello, world!'
    );
};

// Function Component could be declared as an arrow function
export const HelloWorldAsAnArrowFuncComponent = () => {
    return (
        <h1 className='hello'>
            Hello, world!
        </h1>
    );
};

/*
    Function Component could be declared as a function declaration
    In all Function Components props passed as arguments
*/
export function HelloWorldAsAFunctionDeclaration (props) {
    const { name } = props;

    return (
        <h1 className='hello' onClick={() => alert('HELLO!')}>
            Hello, {name}!
        </h1>
    );
};

// Component could be declared as a Class
export class HelloWorld extends Component {
    render () {
        return (
            <h1 className='hello'>
                Hello, {this.props.name}!
            </h1>
        );
    }
}
