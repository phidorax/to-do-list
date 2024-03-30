import {useNavigate} from "react-router-dom";
import {storage} from "../services/LocalStorage";
import * as React from "react";
import {useReducer} from "react";
import dayjs from "dayjs";
import 'dayjs/locale/fr';
import {taskReducer} from "../reducers/DispatchTask";
import EditTask from "../components/EditTask";
import {TaskContext} from "../components/TasksContext";

const NewEdition = () => {
    const [task, dispatchTask] = useReducer(taskReducer, {}, () => {
        return {
            title: '',
            deadline: dayjs(),
            completed: false
        }
    });

    const handleTitleChange = (event) => {
        dispatchTask({type: 'titleChange', title: event.target.value});
    }

    const handleDescriptionChange = (event) => {
        dispatchTask({type: 'descriptionChange', description: event.target.value});
    }

    const handleDeadlineChange = (newValue) => {
        dispatchTask({type: 'deadlineChange', deadline: newValue});
    }

    const handleCheckboxChange = (event) => {
        dispatchTask({type: 'completedChange', completed: event.target.checked});
    };

    const navigate = useNavigate();

    const handleBackClick = () => {
        // Revenir à la page précédente
        // Check if there's any previous history entry (excluding the current page)
        const hasPreviousPage = window.history.length > 1;

        if (hasPreviousPage) {
            navigate(-1); // Go back one page in history
        } else {
            navigate('/'); // Go to the home page
        }
    };

    const handleSaveClick = () => {
        // Enregistrer la tâche
        storage.addTask(task);
        // Revenir à la page précédente
        // Check if there's any previous history entry (excluding the current page)
        const hasPreviousPage = window.history.length > 1;

        if (hasPreviousPage) {
            navigate(-1); // Go back one page in history
        } else {
            navigate('/'); // Go to the home page
        }
    }

    return (
        <div>
            <h1>Ajout d'une nouvelle tâche</h1>
            <TaskContext.Provider value={task} key={task.id}>
                <EditTask onTitleChange={handleTitleChange} onDescriptionChange={handleDescriptionChange}
                          onDateChange={handleDeadlineChange} onCompletedChange={handleCheckboxChange}
                          onValidClick={handleSaveClick} onCancelClick={handleBackClick} canDelete={false}/>
            </TaskContext.Provider>
        </div>
    )
}

export default NewEdition;