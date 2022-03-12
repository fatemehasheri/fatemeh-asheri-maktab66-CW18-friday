import logo from '../logo.svg';
import './App.css';
import Header from "./Header";
import TodoList from "./TodoList";
// import Timer from "./Clock";
import TimeFunction from "./TimerFunction";
import {Form} from "react-bootstrap";
import React from "react";


export const name = 'abaszade';
export const family = 'javaheri';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: "1",
            profiles: [],
            showTimer: false
        }
    }

    componentDidMount() {
            fetch('/json/profiles.json').then(res => res.json()).then(response=>{
                this.setState({profiles: response})
            })
    }

    render() {
        return (<div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <Header/>
                        <Form.Check
                            inline
                            label={"show timer"}
                            onChange={(e) => {
                                this.setState({showTimer: e.target.checked})
                            }}
                            name={'showTimer'}
                            type="checkbox"
                        />
                        {/*{this.state.showTimer ? <Timer/> : <div>check showtimer checkbox</div>}*/}
                        <TimeFunction/>
                        <h3>show task assigned to</h3>
                        <div key={`inline-radio`} className="mb-3">
                            {this.state.profiles.map(profile=>{
                                return ( <Form.Check
                                    inline
                                    label={profile.name}
                                    onChange={(e) => {
                                        this.setState({currentUser: e.target.id})
                                    }}
                                    checked={this.state.currentUser ===profile.id}
                                    name={'profile'}
                                    type="radio"
                                    id={profile.id}
                                />)
                            })}

                        </div>
                        <TodoList user={this.state.currentUser}/>
                    </header>
                </div>)
    }
}

export default App;
