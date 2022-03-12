// MyComponent.js
import React, { PureComponent } from 'react';

class Header extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            data: 'www.javatpoint.com'
        }
        this.handleEvent = this.handleEvent.bind(this);

    }
    handleEvent(){
        console.log(this.props, this.state);
    }

    render() {

        let el= React.createElement('div', {className:"child"}, "hello Students")
        let parent = React.createElement('div', {className:"parent"}, el)
       
        return parent;
    }
}

export default Header;
