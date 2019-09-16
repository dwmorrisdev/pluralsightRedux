export default function courseReducer(state = [], action) {
    // must be pure
    switch(action.type) {
        case "CREATE_COURSE":
            return [...state, {...action.course }];
        default:
            return state;
    }
}