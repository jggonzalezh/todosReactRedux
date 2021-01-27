const  initialState = [
  {"name":"Buy Milk","isComplete":true},
  {"name":"Buy eggs","isComplete":false}
  ]
;

const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            name: action.name,
            isComplete:false
          }
        ]
      case  'RECEIVE_TODOS':
        return [
          ...state,
          ...action.todos
        ]
      case 'DELETE_TODO':
        return state.filter( (todo) => todo.id !== action.idx )
      case 'EDIT_TODO':
      return  state.map((todo,idx)=>{
           if(action.idx === idx){
            return  {'name':action.name,'isComplete':action.isComplete}
           }
           return todo;
      })
      default:
        return state
    }
  }
  
  export default todos