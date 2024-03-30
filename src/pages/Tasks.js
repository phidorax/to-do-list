import ListTasks from "../components/ListTasks";
import {storage} from "../services/LocalStorage";
import {useEffect, useMemo, useReducer} from "react";
import AddIcon from '@mui/icons-material/Add';
import {Fab} from "@mui/material";
import {Link} from "react-router-dom";
import {filterReducer, tasksReducer} from "../reducers/DispatchTasks";
import {TasksContext} from "../components/TasksContext";
import ActionTasks from "../components/ActionTasks";


const Tasks = () => {

    // option de filtrage des tâches

    const initialState = {
        filter: 'all',
        order: 'asc',
        search: '',
    };

    const [filterState, dispatchFilter] = useReducer(filterReducer, initialState);

    const [tasks, dispatchTasks] = useReducer(tasksReducer, []);

    function filterTasks(tasks, state) {
        const filtedTasks = tasks.filter(task => {
                let f = false;
                if (state.filter === 'all') {
                    f = true;
                }
                if (state.filter === 'completed') {
                    f = task.completed;
                }
                if (state.filter === 'uncompleted') {
                    f = !task.completed;
                }
                if (state.search) {
                    f = f && task.title.toLowerCase().includes(state.search.target.value.toLowerCase());
                }
                return f;
            }
        );
        return state.order === 'asc'
            ? filtedTasks.sort((a, b) => a.title.localeCompare(b.title))
            : filtedTasks.sort((a, b) => b.title.localeCompare(a.title));
    }

    useEffect(() => {
        dispatchTasks({type: 'get', tasks: storage.getTasks()});
    }, []);

    const filteredTasks = useMemo(
        () => filterTasks(tasks, filterState),
        [tasks, filterState]
    )

    return (
        <div>
            <h1>Tâches</h1>
            <ActionTasks filter={filter => dispatchFilter({type: 'setFilter', payload: filter})}
                         order={order => dispatchFilter({type: 'setOrder', payload: order})}
                         search={search => dispatchFilter({type: 'setSearch', payload: search})}/>
            <TasksContext.Provider value={filteredTasks}>
                <ListTasks/>
            </TasksContext.Provider>
            <Link to={'/edition/new'}>
                <Fab size="medium" color="primary" aria-label="add" style={{position: "fixed", bottom: 32, right: 32}}>
                    <AddIcon/>
                </Fab>
            </Link>
        </div>
    )
}

export default Tasks;