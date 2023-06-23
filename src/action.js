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