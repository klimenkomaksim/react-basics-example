import { Component } from 'react';

export default class Lifecycle extends Component {
    constructor (props) {
        super(props);
        
        this.state = { count: 0 };
        
        console.log(
            `[Lifecycle]
            constructor called,
            value from props: ${props.value},
            value from state: ${this.state.count}`
        );
    }
    

    _handlePlus = () => {
        this.setState(
            (prevState) => ({
                count: prevState.count + 1,
            })
        );
    }

    componentDidMount () {
        console.log(
            `[Lifecycle]
            componentDidMount method called,
            value from props: ${this.props.value},
            value from state: ${this.state.count}`
        );
    }
    
    componentDidUpdate (prevProps, prevState, /* snapshot*/) {
        console.log(
            `[Lifecycle]
            componentDidUpdate method called,
            current value from props: ${this.props.value},
            prev value from props: ${prevProps.value},
            current value from state: ${this.state.count},
            prev value from state: ${prevState.count}`
        );
    }

    componentWillUnmount () {
        console.log(
            `[Lifecycle]
            componentWillUnmount method called,
            value from props: ${this.props.value},
            value from state: ${this.state.count}`
        );
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log(
            `[Lifecycle]
            shouldComponentUpdate method called,
            current value from props: ${this.props.value},
            next value from props: ${nextProps.value},
            current value from state: ${this.state.count},
            next value from state: ${nextState.count}`
        );

        return true;
    }
    
    render () {
        console.log(
            `[Lifecycle]
            render method called,
            value from props: ${this.props.value},
            value from state: ${this.state.count}`
        );

        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this._handlePlus}>+</button>
            </div>
        );
    }
}
