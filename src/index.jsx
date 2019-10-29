import React from 'react';
import { render } from 'react-dom';
import './index.css'

import ListItems from './ListItems';
import Header from './Header';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItem: '',
            items: ['吃香蕉🍌', '吃苹果🍎', '打篮球🏀']
        }

        this.onSubmit = this.onSubmit.bind(this); // bind this
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({
            todoItem: '',
            items: [this.state.todoItem, ...this.state.items]
        });
    }
    
    onChange(event) {
        this.setState({
            todoItem: event.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <Header title="Todo List" />
                <form className="form-wrap" onSubmit={this.onSubmit}>
                    <input value={this.state.todoItem} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                <ListItems items={this.state.items} />
            </div>
        );
    }
}

render(
    <App/>,
    document.getElementById('app')
);