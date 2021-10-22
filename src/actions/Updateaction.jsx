import {UPDATE_TASK} from "./Types";

// update action

export function updateTask(id,text,time) {

    return {
        type: UPDATE_TASK,
        payload: 
        {
            id:id,
            text: text,
            time:time
        }
    }
}