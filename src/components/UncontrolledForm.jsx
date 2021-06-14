import React, { Component } from 'react';

/*
    In most cases are better to use controlled components to implement forms.
    In a controlled component, all form data is handled by a React component.
    The alternative is uncontrolled components, where form data is handled by the DOM itself.
*/
export default class UncontrolledForm extends Component {
    constructor (props) {
        super(props);

        /*
            To write an uncontrolled form,
            instead of writing an event handler for every state update,
            you can use a ref to get form values from the DOM.
        */
        this.input = React.createRef();
    }

    _handleSubmit = (event) => {
        // On submit we grab all necessary data from current ref value
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
