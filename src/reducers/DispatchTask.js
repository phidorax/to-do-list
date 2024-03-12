export function taskReducer(state, action) {
    switch (action.type) {
        case 'titleChange': {
            return {...state, title: action.title};
        }
        case 'deadlineChange': {
            return {...state, deadline: action.deadline};
        }
        case 'completedChange': {
            return {...state, completed: action.completed};
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}