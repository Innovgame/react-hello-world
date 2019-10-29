import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'

import ListItems from './ListItems';
import Header from './Header';
import AddItem from './AddItem';

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
                <AddItem onSubmit={this.onSubmit} onChange={this.onChange} todoItem={this.state.todoItem} />
                <ListItems items={this.state.items} />
            </div>
        );
    }
}

App.propTypes = {
    items: PropTypes.array,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
};

render(
    <App/>,
    document.getElementById('app')
);