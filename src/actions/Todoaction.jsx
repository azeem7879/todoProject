import {TODO_TASK} from "./Types";
// task action
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