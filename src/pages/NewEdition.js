import {useNavigate} from "react-router-dom";
import {storage} from "../services/LocalStorage";
import {Button, ButtonGroup, Checkbox, TextField} from "@mui/material";
import * as React from "react";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import 'dayjs/locale/fr';
import {useState} from "react";

const Edition = () => {
    const [task, setTask] = useState({});

    const [title, setTitle] = useState(task.title);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setTask({...task, title: event.target.value});
    }

    const [deadline, setDeadline] = useState(dayjs(task.deadline));

    const handleDeadlineChange = (newValue) => {
        setDeadline(newValue);
        setTask({...task, deadline: newValue.format('YYYY-MM-DD')});
    }

    const [completed, setCompleted] = useState(task.completed === true || task.completed === 'true');

    const handleCheckboxChange = (event) => {
        setCompleted(event.target.checked);
        setTask({...task, completed: event.target.checked});
    };

    const navigate = useNavigate();

    const handleBackClick = () => {
        // Revenir à la page précédente
        navigate(-1);
    };

    const handleSaveClick = () => {
        // Enregistrer la tâche
        storage.addTask(task);
        // Revenir à la page précédente
        navigate(-1);
    }

    return (
        <div>
            <h1>Ajout d'une nouvelle tâche</h1>
            <TextField id="task-title" label="Titre de la tâche" variant="outlined" value={title}
                       onChange={handleTitleChange}/>
            <br/>
            <br/>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'fr'}>
                <DatePicker label={"Délai d'exécution de la tâche"}
                            value={dayjs(deadline)}
                            onChange={handleDeadlineChange}
                />
            </LocalizationProvider>
            <p>Tâche accomplie:<Checkbox id="task-completed" checked={completed} onChange={handleCheckboxChange}/>
            </p>
            <ButtonGroup variant="contained" aria-label="Edition-Menu">
                <Button variant="contained" onClick={handleSaveClick}>Valider</Button>
                <Button variant="contained" onClick={handleBackClick}>Annuler</Button>
            </ButtonGroup>
        </div>
    )
}

export default Edition;