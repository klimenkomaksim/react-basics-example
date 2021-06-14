import { Component } from 'react';
import StatelessCounter from './StatelessCounter';

export default class Counter extends Component {
    /*
        Declare state as a Component property if
        your state does not depend on props 
        and you do not have some other logic in the constructor
    */
    state = {
        count: 0,
    }

    _handleMinus = () => {
        /*
            In order to update the state, you must call the setState method,
            direct state change won't re-render Component.

            You can pass a callback function to setState.
            This function should return a new state object.
            This function will receive a previous state object and props as an argument.
            Use this approach whenever your state calculation depends either on the previous state or on props.
        */
        this.setState(
            (prevState, /* props */) => ({
                count: prevState.count - 1,
            })
        );
    }

    _handlePlus = () => {
        this.setState(
            (prevState) => ({
                count: prevState.count + 1,
            })
        );
    }

    render () {
        const { shouldUseStateless } = this.props;

        /*
            In React, you can create distinct components that encapsulate behavior you need.
            Then, you can render only some of them, depending on the state or props.
        */
        if(shouldUseStateless) {
            return (
                <StatelessCounter
                    handleMinus={this._handleMinus}
                    handlePlus={this._handlePlus}
                    count={this.state.count}
                />
            );
        }

        // To add event handler we pass func right into JSX
        return (
            <div>
                <button onClick={this._handleMinus}>-</button>
                    <p>{this.state.count}</p>
                <button onClick={this._handlePlus}>+</button>
            </div>
        );
    }
}
