import {TextField} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const SearchTasks = (props, {setSearch}) => {
    return (
        <TextField id="input-task" label="Recherche ..." variant="outlined" onChange={setSearch} style={props.style}/>
    );
}

SearchTasks.propTypes = {
    style: PropTypes.any,
}

export default SearchTasks;