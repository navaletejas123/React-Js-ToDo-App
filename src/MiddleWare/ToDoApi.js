import http from "."


export async function getTodo(){
    try {
        const {data} = await http.get('/todo') 
        return data.data
    } catch (error) {
        return error.message
    }
}

export async function postTodo(task) {
    try {
        const {data} = await http.post('/todo',task) 
        return "data saved successful"
    } catch (error) {
        return error.message
    }
}


export async function patchTodo(task) {
    try {
        const {data} = await http.patch(`/todo/${task._id}`,task) 
        return "data updated successful"
    } catch (error) {
        return error.message
    }
}

export async function deleteTodo(_id) {
    try {
        const {data} = await http.delete(`/todo/${_id}`) 
        return "data delete successful"
    } catch (error) {
        return error.message
    }
}