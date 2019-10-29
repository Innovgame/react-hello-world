import React from 'react';
import PropTypes from 'prop-types';

const ListItems = props => (
    <ul>
        {
            props.items.map((item, index) => 
                (
                    <li key={index}>
                        {item}
                    </li>
                )
            )
        }
    </ul>
);

ListItems.propTypes = {
    items: PropTypes.array.isRequired
}

export default ListItems;