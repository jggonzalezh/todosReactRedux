export const addTodo = name => ({ 
    type: 'ADD_TODO',
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

