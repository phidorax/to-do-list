import './Tasks.css';

import {Button, ButtonGroup, ListItem} from '@mui/material';
import {Link} from "react-router-dom";

export const DisplayTaskLine = ({task}) => {
    return (
        <ListItem className='task-element'>
            <h2>{task.title}</h2>
            <ButtonGroup variant="contained" aria-label="Action Tâche" style={{marginLeft: "10px"}}>
                {!task.completed && <Button variant="contained">Completed</Button>}
                <Link to={'/edition/' + task.id}>
                    <Button variant="contained">Edit</Button>
                </Link>
                <Button variant="contained" color="error">Delete</Button>
            </ButtonGroup>
        </ListItem>
    );
}