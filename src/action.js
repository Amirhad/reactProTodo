export const loadTodos = () =>{
    return(dispatch) =>{
        dispatch({type:"load/todos/start"})
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((responce) => responce.json())
        .then((json) =>{
            dispatch({
                type:"load/start/fulfilled",
                payload:json
            })
        }) 
    }
}


export const removeTodo = (id) =>{
    return (dispatch) => {
        dispatch({type: "delete/todo/start"})

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}` ,{
            method: "DELETE"
        })
        .then((responce) => responce.json())
        .then((json) =>{
            dispatch({
                type: "delete/todo/fulfilled",
                payload:id
            })
        })

    }

}