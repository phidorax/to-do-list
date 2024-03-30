import StatsTasks from "../components/StatsTasks";
import {storage} from "../services/LocalStorage";
import ListTasks from "../components/ListTasks";
import {TasksContext} from "../components/TasksContext";

const Dashboard = () => {

    // Récupération des tâches puis filtrage les taches non complétées donc les taches avec deadline dépassée ou proche
    const tasks = storage.getTasks();
    const urgentTasks = tasks.filter(task => !task.completed && task.deadline && new Date(task.deadline) < getUrgenceDate());

    function getUrgenceDate() {
        const today = new Date();
        const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
        return new Date(today.getTime() + sevenDaysInMilliseconds);
    }

    return (
        <div>
            <h1>Tableau de bord</h1>
            <StatsTasks tasks={storage.getTasks()}/>
            <h2>Tâches Urgentes</h2>
            <TasksContext.Provider value={urgentTasks}>
                <ListTasks/>
            </TasksContext.Provider>
        </div>
    )
}

export default Dashboard;