
import React from 'react';
import {connect } from 'react-redux'
import { toggleEditForm } from '../actions'
import { editTodo } from '../actions'


const  getTodoToEdit =(todos,idx) => todos.find( ( todo, id) =>  id === idx   ) 


const mapStateToProps = state => ({
    editFormVisible:state.editFormVisible,
    todo : getTodoToEdit(state.todos,state.editFormVisible) ? getTodoToEdit(state.todos,state.editFormVisible) : null
 })

 const mapDispatchToProps = dispatch => ({
    toggleEditForm: isVisible => dispatch(toggleEditForm(isVisible)),
    editTodo :  (idx,name,isComplete) => dispatch(editTodo(idx,name,isComplete))
  })

 class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.check =React.createRef();
      }

      handleSubmit(event) {
        event.preventDefault();
        this.props.editTodo(this.props.editFormVisible,this.input.current.value,this.check.current.checked);
        this.props.toggleEditForm(null);
      }    

    render() {
        const editFormVisible = this.props.editFormVisible;

        if(editFormVisible !== null){
            return (
                <div >
                <h3>Edit</h3>
                <form onSubmit={this.handleSubmit} >
                    <input type="checkbox" 
                           ref={this.check}
                           defaultChecked={this.props.todo.isComplete} />
                    <input 
                           type="text" 
                           ref={this.input}
                           defaultValue={this.props.todo.name}
                           />
                    <input type="submit" value="Save"   />
                    <a  onClick={ () => this.props.toggleEditForm(null)}
                     > &#10006; </a>
                </form>
                </div>
        )
        }else{
            return null;
        }
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(EditTodo)
