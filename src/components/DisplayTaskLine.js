import './Tasks.css';

import {Button, ButtonGroup, ListItem} from '@mui/material';
import {Link} from "react-router-dom";
import {storage} from "../services/LocalStorage";
import {TaskContext} from "./TasksContext";
import {useContext} from "react";

export const DisplayTaskLine = () => {
    const task = useContext(TaskContext);
    const handleComplete = () => {
        // Mettre à jour la tâche
        task.completed = true;
        // Mettre à jour la tâche dans le localStorage
        storage.updateTask(task);
        // Recharger la page
        window.location.reload();
    }

    const handleDelete = () => {
        // Afficher une boîte de dialogue de confirmation
        if (!window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
            return;
        }
        // Supprimer la tâche
        storage.removeTask(task);
        // Recharger la page
        window.location.reload();
    }
    return (
        <ListItem className='task-element' style={{paddingTop: "0px", paddingBottom: "0px", marginBottom: "0px"}}>
            <h2>{task.title}</h2>
            <ButtonGroup variant="contained" aria-label="Action Tâche" style={{marginLeft: "10px"}}>
                {!task.completed && <Button variant="contained" onClick={handleComplete}>Completed</Button>}
                <Link to={'/edition/' + task.id}>
                    <Button variant="contained">Edit</Button>
                </Link>
                <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
            </ButtonGroup>
        </ListItem>
    );
}