import { combineReducers } from "redux";
import {
    FETCH_PEOPLE,
    FETCH_PERSON_BY_ID,
    FETCH_PLANETS,
    FETCH_PLANET_BY_ID
} from "./actions";
const { SHOW_LIST } = VisibilityFilters;

// function visibilityFilter(state = SHOW_ALL, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return action.filter;
//         default:
//             return state;
//     }
// }

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;
