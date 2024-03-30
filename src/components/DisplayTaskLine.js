import './Tasks.css';

import {
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    Typography
} from '@mui/material';
import {Link} from "react-router-dom";
import {storage} from "../services/LocalStorage";
import {TaskContext} from "./TasksContext";
import React, {useContext} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import moment from "moment";

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

    if (!task.description) {
        task.description = '';
    }
    const taskDescription = task.description.length > 150
        ? task.description.substring(0, 150) + '...'
        : task.description;

    return <Box minWidth={300} sx={{margin: "16px"}}>
        <Card sx={{margin: "8px", maxWidth: "320px"}}>
            <CardContent>
                <Typography variant="h5" component="h2">{task.title}</Typography>
                <Typography variant="body2"
                            color="text.secondary">{taskDescription}</Typography>
                <div style={{height: "25px"}}/>
               <div style={{display: 'flex', justifyContent: 'center'}}>
                <AccessTimeIcon style={{marginRight: '8px'}}/>{moment(task.deadline).format('DD/MM/YYYY')}
               </div>
            </CardContent>
            <CardActions
                sx={{display: 'flex', marginBottom: 2, marginLeft: 0, marginRight: 0, justifyContent: "center"}}>
                <ButtonGroup variant="contained" aria-label="Action Tâche">
                    {!task.completed && <Button variant="contained" onClick={handleComplete}>Terminer</Button>}
                    <Link to={'/edition/' + task.id}><Button variant="contained">Éditer</Button></Link>
                    <Button variant="contained" color="error" onClick={handleDelete}><DeleteIcon/></Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    </Box>
}