import { TODO_TASK } from "../actions/Types";
import { UPDATE_TASK } from "../actions/Types";
import {DELETE_TASK} from "../actions/Types";                       



const initialState = {
    Task: []
}


// task  reducer are here 
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

            //  update reducer are here 
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
            // delete reducer are here
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