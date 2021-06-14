/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

export default class FirstControlledForm extends Component {
    state = {
        value: '',
    };

    _handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    }

    _handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <label>
                    <input
                        type='text'
                        value={this.state.value}
                        onChange={this._handleChange}
                    />
                </label>
                <input type='submit' value='Submit'/>
            </form>
        );
    } 
}
