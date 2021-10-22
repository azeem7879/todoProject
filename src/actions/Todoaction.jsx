import {TODO_TASK} from "./Types";

export function todoTask(id,text,time) {

    return {
        type: TODO_TASK,
        payload: 
        {
            id:id,
            text: text,
            time:time
        }
    }
}