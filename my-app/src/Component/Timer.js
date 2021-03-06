import React from 'react'
class Timer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2 style={{color: 'green'}}>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Timer
