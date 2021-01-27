export const addTodo = (name,idx) => ({ 
    type: 'ADD_TODO',
    idx,
    name
  })

export const deleteTodo = idx => ({ 
    type: 'DELETE_TODO',
     idx 
    })

export const editTodo = ( idx ,name,isComplete) => ({
    type: 'EDIT_TODO',
    idx, 
    name,
    isComplete 
  })

export const toggleEditForm = (isVisible) => ({
    type: 'TOGGLE_EDIT_FORM',
    isVisible
})

export const receiveTodos = (todos) => ({
  type: 'RECEIVE_TODOS',
  todos: todos
})

export const requestTodos = () => ({
  type: 'REQUEST_POSTS'
})

export const requestFinished = () => ({
  type: 'REQUEST_FINISHED'
})

export const fetchTodos = () => dispatch => {
  dispatch(requestTodos())
  return fetch(`https://localhost:44338/api/TodoItems`)
  .then(response => response.json())
  .then( json => {
                      dispatch(receiveTodos(json))
                      dispatch(requestFinished())
                    } 
          )
}

export const postTodo = (todo) => dispatch => {
  dispatch(requestTodos())
  return fetch(`https://localhost:44338/api/TodoItems`,{
    method:'POST',
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(
      {
        name: todo,
        isComplete:false
      }
      ),
  })
  .then(response => response.json())
  .then( json => {
                      dispatch(addTodo(json.name,json.id))
                      dispatch(requestFinished())
                    } 
          )
}

export const deleteTodoAsync = (id) => dispatch => {
  dispatch(requestTodos())
  return fetch(`https://localhost:44338/api/TodoItems/${id}`,{
    method:'DELETE',
    headers:{
      'Content-type':'application/json',
    }
  })
  .then(response => response.json())
  .then( json => {
                      dispatch(deleteTodo(json.id))
                      dispatch(requestFinished())
                    } 
          )
}


export const putTodo = (id,name,isComplete) => dispatch => {
  dispatch(requestTodos())
  return fetch(`https://localhost:44338/api/TodoItems/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(
      { 
        id:id,
        name:name,
        isComplete:isComplete
      }
      )
  })
  .then(response => {return response})
  .then( res => {
                      dispatch(editTodo(id,name,isComplete))
                      dispatch(requestFinished())
                    } 
          ).catch((error) => {
            console.error('Error:', error);
          });
}


