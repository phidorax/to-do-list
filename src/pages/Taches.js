import ListTasks from "../components/ListTasks";
import {storage} from "../services/LocalStorage";
import React, {useEffect, useMemo, useState} from "react";
import FilterTasks from "../components/FilterTasks";
import OrderTasks from "../components/OrderTasks";
import SearchTasks from "../components/SearchTasks";
import AddIcon from '@mui/icons-material/Add';
import {Fab, Grid} from "@mui/material";
import {Link} from "react-router-dom";


const Taches = () => {

    // option de filtrage des tâches

    const [filter, setFilter] = useState('all');
    const [order, setOrder] = useState('asc');
    const [search, setSearch] = useState('');
    const [tasks, setTasks] = useState([]);

    function filterTasks(tasks, filter, search, order) {
        const filtedTasks = tasks.filter(task => {
                let f = false;
                if (filter === 'all') {
                    f = true;
                }
                if (filter === 'completed') {
                    f = task.completed;
                }
                if (filter === 'uncompleted') {
                    f = !task.completed;
                }
                if (search) {
                    console.log("searching ...", search.target.value);
                    f = f && task.title.toLowerCase().includes(search.target.value.toLowerCase());
                }
                ;
                return f;
            }
        );
        if (order === 'asc') {
            return filtedTasks.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            return filtedTasks.sort((a, b) => b.title.localeCompare(a.title));
        }
    }

    useEffect(() => {
        const tasks = storage.getTasks();
        setTasks(tasks);
    }, []);

    const filteredTasks = useMemo(
        () => filterTasks(tasks, filter, search, order),
        [filter, tasks, order, search]
    )

    return (
        <div>
            <h1>Tâches</h1>
            <div style={{display: 'flex', 'flexDirection': 'column'}}>
                <FilterTasks filter={filter} setFilter={setFilter}/>
                <br/>
                <OrderTasks order={order} setOrder={setOrder}/>
                <br/>
                <SearchTasks search={search} setSearch={setSearch}/>
            </div>
            <ListTasks tasks={filteredTasks}/>
            <Link to={'/edition/new'}>
                <Fab size="medium" color="primary" aria-label="add" style={{position: "fixed", bottom: 32, right: 32}}>
                    <AddIcon/>
                </Fab>
            </Link>
        </div>
    )
}

export default Taches;