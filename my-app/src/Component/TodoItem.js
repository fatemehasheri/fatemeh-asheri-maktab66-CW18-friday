import React, {PureComponent} from "react";

export default class TodoItem extends PureComponent{
    render(){
        console.log(this.props)
        return (
            <li style={{ display:'flex', justifyContent:'space-between'}}>
                {this.props.index} -
                {this.props.title}
                <div className="btn-group">
                    <button onClick={this.props.remove}>x</button>
                    <button onClick={this.props.doneTodo}>done</button>
                </div>
            </li>
        )
    }
}