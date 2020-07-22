import React from 'react';

const TodoItem = ({ id, complete, item, lineThrough, removeItem }) => {

    return (
        <div className='items'>
            <div className={`list ${complete}`} /* onClick={() => lineThrough(id)} */>
                <p>{item}</p>
            </div>
            <button id='delete-button' onClick={() => removeItem(id)}><i class="far fa-trash-alt"></i></button>
        </div>
    )
}

export default TodoItem;