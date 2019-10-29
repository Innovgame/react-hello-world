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
            items: ['吃香蕉', '吃苹果', '打篮球']
        }
    }

    render() {
        return (
            <div className="container">
                <Header title="Todo List" />
                <form className="form-wrap">
                    <input value={this.state.todoItem} />
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