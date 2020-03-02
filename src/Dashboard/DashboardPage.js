import React, { useState, useEffect, useContext } from 'react';
import myFirebase from '../fire';
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import AddTodoCard from './components/AddTodoCard';
import ToDoCard from './components/ToDoCard';

const DashboardPage = ({ loginState, handleInputs }) => {
    const [dashboardState, setDashboardState] = useState({
        isClicked: false
    });
    const authState = useContext(AuthContext)

    const db = myFirebase.firestore();

    useEffect(() => {
        const tasks = db.collection("tasks").where('uid', "==", authState && null != authState.user.uid ? authState.user.uid : null);
        const toDos = tasks.get().then(results => {
            console.log("tasks", results)
            setDashboardState({ ...dashboardState, tasks: results })
        })
    }, [loginState])


    return (
        <div className="dashboard-container">
            {/* {dashboardState.tasks && dashboardState.tasks.map(toDo => <ToDoCard toDo />)} */}
            {/* {console.log(dashboardState)} */}
            <AddTodoCard isClicked={dashboardState.isClicked} setDashboardState={setDashboardState} dashboardState={dashboardState} />
        </div>
    );
};

export default DashboardPage;