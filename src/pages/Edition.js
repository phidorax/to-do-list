import {useParams} from "react-router-dom";
import {storage} from "../services/LocalStorage";

const Edition = () => {
    const {taskId} = useParams();
console.log(taskId)
    const task = storage.getTask(taskId);
    console.log(task)
    return (
        <div>
            <h1>Édition de la tâche avec l'id {taskId}</h1>
            {task.title && <p>Task title: {task.title}</p>}
            {task.deadline && <p>Task deadline: {task.deadline}</p>}
            <p>Task completed: {task.completed ? "Oui" : "Non"}</p>
        </div>
    )
}

export default Edition;