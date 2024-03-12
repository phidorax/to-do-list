import ListTasks from "../components/ListTasks";
import {storage} from "../services/LocalStorage";
import {useEffect, useMemo, useReducer} from "react";
import FilterTasks from "../components/FilterTasks";
import OrderTasks from "../components/OrderTasks";
import SearchTasks from "../components/SearchTasks";
import AddIcon from '@mui/icons-material/Add';
import {Fab} from "@mui/material";
import {Link} from "react-router-dom";
import {tasksReducer, filterReducer} from "../reducers/DispatchTasks";
import {TasksContext} from "../components/TasksContext";


const Taches = () => {

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
                    console.log("searching ...", state.search.target.value);
                    f = f && task.title.toLowerCase().includes(state.search.target.value.toLowerCase());
                }
                return f;
            }
        );
        if (state.order === 'asc') {
            return filtedTasks.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            return filtedTasks.sort((a, b) => b.title.localeCompare(a.title));
        }
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
            <div style={{display: 'flex', 'flexDirection': 'column'}}>
                <FilterTasks setFilter={filter => dispatchFilter({type: 'setFilter', payload: filter})}/>
                <br/>
                <OrderTasks setOrder={order => dispatchFilter({type: 'setOrder', payload: order})}/>
                <br/>
                <SearchTasks setSearch={search => dispatchFilter({type: 'setSearch', payload: search})}/>
            </div>
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

export default Taches;