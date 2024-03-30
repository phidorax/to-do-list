import FilterTasks from "./FilterTasks";
import OrderTasks from "./OrderTasks";
import SearchTasks from "./SearchTasks";
import PropTypes from "prop-types";
import {useEffect, useReducer} from "react";
import {displayReducer} from "../reducers/DispatchDisplay";

function ActionTasks(props) {

    const [windowWidth, dispatchWindowWidth] = useReducer(displayReducer, window.innerWidth);

    useEffect(() => {
        const handleResize = () => dispatchWindowWidth({type: 'setWindowWidth', payload: window.innerWidth});
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderContent = () => {
        if (windowWidth < 560) {
            return <>
                <FilterTasks setFilter={props.filter}/>
                <div style={{height: "10px"}}/>
                <OrderTasks setOrder={props.order}/>
                <div style={{height: "10px"}}/>
                <SearchTasks setSearch={props.search}/>
            </>
        } else {
            return <>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "10px"}}>
                        <FilterTasks setFilter={props.filter}/>
                    </div>
                    <div style={{marginLeft: "10px"}}>
                        <OrderTasks setOrder={props.order}/>
                    </div>
                </div>
                <div style={{height: "20px"}}/>
                <SearchTasks setSearch={props.search}
                             style={{marginTop: "10px", width: "32em"}}/>
            </>
        }
    };
    return <>{renderContent()}</>;
}

ActionTasks.propTypes = {
    filter: PropTypes.func,
    order: PropTypes.func,
    search: PropTypes.func
};

export default ActionTasks;