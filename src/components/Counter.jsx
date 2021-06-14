/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import StatelessCounter from './StatelessCounter';

export default class Counter extends Component {
    state = {
        count: 0,
    }

    _handleMinus = () => {
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
        // const { shouldShowTitle } = this.props;

        return (
            <div>
                {/* {shouldShowTitle && <h1>Counter</h1>} */}
                <button onClick={this._handleMinus}>-</button>
                    <p>{this.state.count}</p>
                <button onClick={this._handlePlus}>+</button>
            </div>
        );

        // return (
        //     <StatelessCounter
        //         handleMinus={this._handleMinus}
        //         handlePlus={this._handlePlus}
        //         count={this.state.count}
        //     />
        // );
    }
}
