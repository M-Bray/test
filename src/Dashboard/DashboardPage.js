import React, { useState, useEffect, useContext } from 'react';
import myFirebase from '../fire';
import { AuthContext } from '../contexts/AuthContext';
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
       tasks.get().then(results => {
            setDashboardState({ ...dashboardState, tasks: results.docs })
        })
            .catch(err => {
                console.log(err.message)
            })
    }, [loginState])
    return (
        <div className="site-container">
             {dashboardState.tasks && dashboardState.tasks.map(toDo => <ToDoCard toDo = {toDo} />)} 
            <AddTodoCard isClicked={dashboardState.isClicked} setDashboardState={setDashboardState} dashboardState={dashboardState} authState />
        </div>
    );
};
export default DashboardPage;