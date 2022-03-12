import React, {PureComponent } from 'react';
import TodoItem from "./TodoItem";
// import {Form} from 'react-bootstrap';
import Percentage from "./Percentage";
import Clickbutton from "./ClickButton";
import Fibonacci from "./Fibonacci";
class TodoList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: [],
            done: [],
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.doneTodo = this.doneTodo.bind(this)
    }

     loadHarryTodo() {
         fetch('/json/todo.json').then(response => {
             return response.json()
         }).then(res =>{
             this.setState({list: res})
         })
    }

    loadFarbodTodo() {
        fetch('/json/todo_farbod.json').then(response => {
            return response.json()
        }).then(res =>{
            this.setState({list: res})
        })
    }

    componentDidMount(){
        this.loadHarryTodo()
    }

    componentDidUpdate(prevProps, prevState){
        let currentUser = this.props.user;
        if(currentUser !== prevProps.user){
            if (currentUser === "1") {
                this.loadHarryTodo()
            } else {
                this.loadFarbodTodo()
            }
        }
    }

    addTodo() {
        console.log(this)
        this.setState({list: [{ "id": this.state.length, "todo": this.state.value}, ...this.state.list], value: ' '})
    }

    removeTodo(todo) {
        let list = this.state.list.filter(l => l.todo !== todo.todo)
        this.setState({list: list})
    }

    doneTodo(todo) {
        this.removeTodo(todo)
        this.setState({done: [todo, ...this.state.done]})
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.value} onChange={e => {
                        this.setState({value: e.target.value})
                    }}/>
                    <button onClick={this.addTodo}>add</button>
                </div>
                <ul>
                    {this.state.list.map((item, i) => <TodoItem
                        key={item.id}
                        index={i + 1}
                        title={item.todo}
                        remove={() => this.removeTodo(item)}
                        doneTodo={() => this.doneTodo(item)}
                    />)}
                </ul>
                <h3 style={{color: 'green'}}> Done Tasks</h3>
                <ul>
                    {this.state.done.map(d => <li key={d.id}>{d.todo}</li>)}
                </ul>
                <h3 style={{color: 'green'}}>TodoPercentage</h3>
                <Percentage list={this.state.list.length} done={this.state.done.length}/>
                <Clickbutton />
                <Fibonacci />
            </div>)
    }
}

export default TodoList