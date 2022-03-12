import React from 'react'

class Clock extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    setTime = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setTime(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>{this.state.time.toLocaleTimeString()}</div>
        )
    }
}

export default Clock