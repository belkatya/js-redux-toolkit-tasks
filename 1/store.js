import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";

// BEGIN (write your solution here)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TASK_ADD":
            return {
                ...state,
                [action.payload.task.id]: action.payload.task,
            };
        case "TASK_REMOVE":
            return omit(state, action.payload.id);
        default:
            return state;
    }
}

export default function configureStore(initialState = {}) {
  return createStore(reducer, initialState);
}
// END
