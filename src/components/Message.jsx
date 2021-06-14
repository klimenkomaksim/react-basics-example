/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

export default class Message extends Component {
    constructor (props) {
        super(props);

        this.state = {
            message: '',
        };

        // this._showHello = this._showHello.bind(this);
        // this._showGoodbye = this._showGoodbye.bind(this);
    }

    _showHello () {
        this.setState({ message: 'Hello!' });
    }

    _showGoodbye () {
        this.setState({ message: 'Goodbye!' });
    }

    render () {
        return (
            <div>
                <button onClick={this._showHello}>show hello</button>
                <button onClick={this._showGoodbye}>show goodbye</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}