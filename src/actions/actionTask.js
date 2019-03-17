export function addTasks(task){
    return {
        type: "ADD_TASK",
        payload: {
            ...task,
            
        }
    }
}

