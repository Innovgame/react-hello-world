import React from 'react';
import PropTypes from 'prop-types';

const AddItem = props => (
    <form className="form-wrap" onSubmit={props.onSubmit}>
        <input value={props.todoItem} onChange={props.onChange} />
        <button>Submit</button>
    </form>
);

AddItem.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    todoItem: PropTypes.string.isRequired
}

export default AddItem;