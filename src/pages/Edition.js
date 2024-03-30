import {useNavigate, useParams} from "react-router-dom";
import {storage} from "../services/LocalStorage";
import * as React from "react";
import {useReducer} from "react";
import 'dayjs/locale/fr';
import {taskReducer} from "../reducers/DispatchTask";
import EditTask from "../components/EditTask";
import {TaskContext} from "../components/TasksContext";


const Edition = () => {
    const {taskId} = useParams();

    const [task, dispatchTask] = useReducer(taskReducer, storage.getTask(taskId) || {});

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
    }

    const handleSaveClick = () => {
        // Enregistrer la tâche
        storage.updateTask(task);
        // Revenir à la page précédente
        const hasPreviousPage = window.history.length > 1;

        if (hasPreviousPage) {
            navigate(-1); // Revenir en arrière d'une page dans l'histoire
        } else {
            navigate('/'); // Aller à la page d'accueil
        }
    }

    const handleDeleteClick = () => {
        // Afficher une boîte de dialogue de confirmation
        if (!window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
            return;
        }
        // Supprimer la tâche
        storage.removeTask(task);
        // Revenir à la page précédente
        const hasPreviousPage = window.history.length > 1;

        if (hasPreviousPage) {
            navigate(-1); // Revenir en arrière d'une page dans l'histoire
        } else {
            navigate('/'); // Aller à la page d'accueil
        }
    }

    return (
        <div>
            <h1>Édition de la tâche avec l'id {taskId}</h1>
            <TaskContext.Provider value={task} key={task.id}>
                <EditTask task={task} onTitleChange={handleTitleChange} onDescriptionChange={handleDescriptionChange}
                          onDateChange={handleDeadlineChange} onCompletedChange={handleCheckboxChange}
                          onValidClick={handleSaveClick} onCancelClick={handleBackClick}
                          onDeleteClick={handleDeleteClick} canDelete={true}/>
            </TaskContext.Provider>
        </div>
    )
}

export default Edition;