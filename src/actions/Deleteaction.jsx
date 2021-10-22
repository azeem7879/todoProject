import {DELETE_TASK} from "./Types";


export function deleteTask (id){
   
    return{
        type : DELETE_TASK,
        payload:
        {
            id:id,
        }
    }
}