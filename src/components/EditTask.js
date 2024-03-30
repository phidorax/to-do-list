import {Button, ButtonGroup, Checkbox, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import * as PropTypes from "prop-types";
import * as React from "react";
import {useContext} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {TaskContext} from "./TasksContext";

function EditTask(props) {
    const task = useContext(TaskContext);
    return <>
        <TextField id="task-title" label="Titre de la tâche" variant="outlined" value={task.title}
                   onChange={props.onTitleChange}/>
        <div style={{height: "25px"}}/>
        <TextField style={{width: "20em"}} id="task-description" label="Description de la tâche" variant="outlined"
                   multiline rows={4}
                   value={task.description} onChange={props.onDescriptionChange}/>
        <div style={{height: "25px"}}/>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"fr"}>
            <DatePicker label={"Délai d'exécution de la tâche"}
                        value={dayjs(task.deadline)}
                        onChange={props.onDateChange}
            />
        </LocalizationProvider>
        <p>Tâche accomplie:<Checkbox id="task-completed" checked={task.completed}
                                     onChange={props.onCompletedChange}/></p>
        <ButtonGroup variant="contained" aria-label="Edition-Menu">
            <Button variant="contained" onClick={props.onValidClick}>Valider</Button>
            <Button variant="contained" onClick={props.onCancelClick}>Annuler</Button>
            {props.canDelete &&
                <Button variant="contained" color="error" onClick={props.onDeleteClick}><DeleteIcon/></Button>}
        </ButtonGroup>
    </>;
}

EditTask.propTypes = {
    canDelete: PropTypes.bool,
    onTitleChange: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    onDateChange: PropTypes.func,
    onCompletedChange: PropTypes.func,
    onValidClick: PropTypes.func,
    onCancelClick: PropTypes.func,
    onDeleteClick: PropTypes.func
};

export default EditTask;