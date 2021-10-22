import { TODO_TASK } from "../actions/Types";
import { UPDATE_TASK } from "../actions/Types";
import {DELETE_TASK} from "../actions/Types";                       



const initialState = {
    Task: []
}



const TODOTASK = (state = initialState, action) => {

    switch (action.type) {
        case TODO_TASK:
            const { id, text, time } = action.payload;
            return {
                ...state,
                Task: [
                    ...state.Task,
                    {
                        id: id,
                        text: text,
                        time: time
                    }
                ]
            }
        case UPDATE_TASK:
            return {
                ...state,
                Task: state.Task.map((e) => {

                    if (e.id === action.payload.id) {
                        return action.payload;
                    }
                    return e;
                })
            }
        case DELETE_TASK:
            const newTask = state.Task.filter((e)=>e.id !== action.payload.id)
           
            return {
              ...state,
              Task : newTask
            }

        default:
            return state
    }

}

export default TODOTASK