import { Component } from 'react';

export default class SecondControlledForm extends Component {
    state = {
        checkbox: true,
        text: 2,
    };

    _handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox'
            ? target.checked 
            : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    _handleSubmit = (e) => {
        alert(`checked: ${this.state.checkbox} text: ${this.state.text}`);
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <label>
                    checkbox
                    <input
                        name='checkbox'
                        type="checkbox"
                        checked={this.state.checkbox}
                        onChange={this._handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    text
                    <input
                        name='text'
                        type="text"
                        checked={this.state.text}
                        onChange={this._handleInputChange}
                    />
                </label>
            </form>
        );
    }
}
