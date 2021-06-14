import { Component } from 'react';
import LifecycleChild from './LifecycleChild';

export default class Counter extends Component {
    state = {
        count: 0,
    }

    _handleMinus = () => {
        this.setState(
            (prevState) => ({
                count: prevState.count - 1,
            })
        );
    }

    render () {
        const shouldRenderChild = this.state.count > -3;

        return (
            <div>
                <button onClick={this._handleMinus}>Parent Button</button>
                {shouldRenderChild 
                    && <LifecycleChild value={this.state.count}/>}
            </div>
        );;
    }
}
