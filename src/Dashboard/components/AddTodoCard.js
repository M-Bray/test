import React, { useState } from 'react'
import myFirebase from '../../fire.js';

function AddTodoCard({ isClicked, setDashboardState, dashboardState }) {
    const db = myFirebase.firestore();
    const [toDoState, setToDoState] = useState({ isComplete: false });

    const handleInputs = (e) => {
        let value = e.target.value
        setToDoState({
            ...toDoState,
            [e.target.name]: value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        setDashboardState({ ...dashboardState, isClicked: true })
    }

    const closeCard = (e) => {
        e.preventDefault();
        setDashboardState({ ...dashboardState, isClicked: false })
    }

    const AddTodo = (e) => {
        e.preventDefault();
        db.collection('tasks').doc().set({
            title: toDoState.title,
            category: toDoState.category,
            isComplete: toDoState.isComplete
        }).then(result => {
            console.log("successful set")
        }).catch(err => console.log(err.message))
    }


    return (
        <div className="add-todo-card-wrap">
            <button className="add-todo-card-button-b" onClick={handleClick}>Add Todo</button>
            {isClicked && <form className="add-todo-card-form-wrap">
                <div className="add-todo-card-input-wrap">
                    <label className="add-todo-card-label" htmlFor={"title"}>Title</label>
                    <input className="add-todo-card-input" onChange={handleInputs} name="title"></input>
                </div>
                <div className="add-todo-card-input-wrap">
                    <label className="add-todo-card-label" htmlFor={"Category"}>Category</label>
                    <input className="add-todo-card-input" onChange={handleInputs} name='category'></input>
                </div>
                <div className="add-todo-card-button-wrap">
                    <button className="add-todo-card-button" onClick={AddTodo}>Add</button>
                    <button className="add-todo-card-button" onClick={closeCard}>X</button>
                </div>

            </form>}
        </div>
    )
}

export default AddTodoCard
