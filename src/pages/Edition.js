import {useParams, useNavigate} from "react-router-dom";
import {storage} from "../services/LocalStorage";
import {Button, ButtonGroup, Checkbox, TextField} from "@mui/material";
import * as React from "react";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import 'dayjs/locale/fr';
import {useReducer} from "react";
import {taskReducer} from "../reducers/DispatchTask";

const Edition = () => {
    const {taskId} = useParams();

    const [task, dispatchTask] = useReducer(taskReducer, storage.getTask(taskId) || {});

    const handleTitleChange = (event) => {
        dispatchTask({type: 'titleChange', title: event.target.value});
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
            <h1>Édition de la tâche avec l'id {taskId}</h1>
            <TextField id="task-title" label="Titre de la tâche" variant="outlined" value={task.title}
                       onChange={handleTitleChange}/>
            <br/>
            <br/>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'fr'}>
                <DatePicker label={"Délai d'exécution de la tâche"}
                            value={dayjs(task.deadline)}
                            onChange={handleDeadlineChange}
                />
            </LocalizationProvider>
            <p>Tâche accomplie:<Checkbox id="task-completed" checked={task.completed} onChange={handleCheckboxChange}/>
            </p>
            <ButtonGroup variant="contained" aria-label="Edition-Menu">
                <Button variant="contained" onClick={handleSaveClick}>Valider</Button>
                <Button variant="contained" onClick={handleBackClick}>Annuler</Button>
            </ButtonGroup>
        </div>
    )
}

export default Edition;