import {DELETE_TASK} from "./Types";

// delete action
export function deleteTask (id){
   
    return{
        type : DELETE_TASK,
        payload:
        {
            id:id,
        }
    }
}