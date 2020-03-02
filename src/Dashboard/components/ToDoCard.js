import React from 'react';

const ToDoCard = ({ toDo }) => {
    return (
        <div>
            <h1>{toDo.name}</h1>
            <p></p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};

export default ToDoCard;