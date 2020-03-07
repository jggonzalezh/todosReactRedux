import React from 'react'
import { connect } from 'react-redux'

import  AddTodo from '../containers/AddTodo'
import EditTodo from './EditTodo'
import TodoList from '../containers/TodoList'

import { fetchTodos } from '../actions'



class App extends React.Component  {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTodos())
  }

    render(){
      return(
      <div >
        <AddTodo/>
        <EditTodo/>
        { this.props.isFetching ? <h2>Loading ...</h2>
                :<TodoList />
        }
        
    </div>
    )
    }
  }

  const mapStateToProps = state => ({
    isFetching:state.isFetching,
  })
  

  export default connect(mapStateToProps)(App)


