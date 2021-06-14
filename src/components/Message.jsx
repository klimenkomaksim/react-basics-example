import { Component } from 'react';

export default class Message extends Component {
    constructor (props) {
        super(props);

        /*
            Declare state in the constructor if
            either your state depends on props 
            or you have some other logic in the constructor
        */
        this.state = {
            message: '',
        };
        
        /*
            In order to pass callbacks func to child components,
            we have to at first bind context to this cb.
            
            The first way to do it is to use the bind method:
        */
        this._showHello = this._showHello.bind(this);
    }

    _showHello () {
        /*
            In order to update the state, you must call the setState method,
            direct state change won't re-render Component.

            You can pass a new state object to setState,
            this object will be merged with the previous state.
        */
        this.setState({ message: 'Hello!' });
    }

    // The second way to bind context to cb is to write method as an arrow func:
    _showGoodbye = () => {
        this.setState({ message: 'Goodbye!' });
    }

    render () {
        // To add event handler we pass func right into JSX
        return (
            <div>
                <button onClick={this._showHello}>show hello</button>
                <button onClick={this._showGoodbye}>show goodbye</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}