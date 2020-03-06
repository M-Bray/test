import React from 'react';
const ToDoCard = ({ toDo }) => {
    console.log(toDo)
    const newToDo = toDo && toDo.data()
    return (
        <div className="card-container">
            <form className="form-container">
                <h1>{newToDo.title}</h1>
                <p>{newToDo.category}</p>
                <button>Edit</button>
                <button>Delete</button>
            </form>
        </div>
    );
};
export default ToDoCard;