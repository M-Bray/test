import React, { useState, useContext } from 'react'
import myFirebase from '../../fire.js';
import { AuthContext } from '../../contexts/AuthContext';

function AddTodoCard({ isClicked, setDashboardState, dashboardState }) {
    const db = myFirebase.firestore();
    const authState = useContext(AuthContext);
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
        const newTodo = {
            title: toDoState.title,
            category: toDoState.category,
            isComplete: toDoState.isComplete,
            uid: authState.user.uid
        }
        db.collection('tasks').doc().set(newTodo).then(result => {
            setDashboardState({ ...dashboardState, tasks: [...dashboardState.tasks, newTodo] })
            console.log("successful set")
        }).catch(err => console.log(err.message))
    }
    return (
        <div className="site-container">
            <button className="card-button" onClick={handleClick}>Add Todo</button>
            {isClicked && <form className="form-container">
                <div className="card-input-wrap">
                    <label className="card-label" htmlFor={"title"}>Title</label>
                    <input className="card-input" onChange={handleInputs} name="title"></input>
                </div>
                <div className="card-input-wrap">
                    <label className="card-label" htmlFor={"Category"}>Category</label>
                    <input className="card-input" onChange={handleInputs} name='category'></input>
                </div>
                <div className="card-button-wrap">
                    <button className="card-button" onClick={AddTodo}>Add</button>
                    <button className="card-button" onClick={closeCard}>X</button>
                </div>
            </form>}
        </div>
    )
}
export default AddTodoCard