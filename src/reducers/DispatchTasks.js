export function filterReducer(state, action) {
    switch (action.type) {
        case 'setFilter':
            return {...state, filter: action.payload};
        case 'setOrder':
            return {...state, order: action.payload};
        case 'setSearch':
            return {...state, search: action.payload};
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export function tasksReducer(state, action) {
    switch (action.type) {
        case 'get':
            return action.tasks;
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}