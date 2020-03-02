import React, { useState } from 'react'
import myFirebase from '../../fire.js';

function AddTodoCard({isClicked, setDashboardState, dashboardState}) {
    const db = myFirebase.firestore();
    const [toDoState, setToDoState] = useState({isComplete: false});

    const handleInputs = (e) => {
        let value = e.target.value
        setToDoState({
            ...toDoState,
            [e.target.name]: value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        setDashboardState({...dashboardState, isClicked: true})
    }

    const closeCard = (e) => {
        e.preventDefault();
        setDashboardState({...dashboardState, isClicked: false})
    }

    const AddTodo = (e) => {
        e.preventDefault();
        db.collection('tasks').doc().set({
            title : toDoState.title,
            category: toDoState.category,
            isComplete : toDoState.isComplete
        }).then(result => {
            console.log("successful set")
        }).catch(err => console.log(err.message))
    }


    return (
        <div>
            <button onClick = {handleClick}>Add Todo</button>
            { isClicked && <form>
                <label htmlFor = {"title"}>Title</label>
                <input onChange = {handleInputs} name="title"></input>
                <label htmlFor = {"Category"}>Category</label>
                    <input onChange = {handleInputs} name='category'></input>
                    <button onClick = {AddTodo}>Add</button>
                    <button onClick = {closeCard}>X</button>
            </form>}
        </div>
    )
}

export default AddTodoCard
