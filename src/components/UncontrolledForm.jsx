/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

export default class UncontrolledForm extends Component {
    constructor (props) {
        super(props);

        this.input = React.createRef();
    }

    _handleSubmit = (event) => {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    render () {
        return (
            <form>
                <label>
                    <input type='text' ref={this.input} />
                </label>
                <input type='submit' value='Submit'/>
            </form>
        );
    }
}
