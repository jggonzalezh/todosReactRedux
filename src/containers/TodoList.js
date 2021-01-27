import {connect } from 'react-redux'
import TodoTable from '../components/TodoTable'
import  { deleteTodoAsync }  from '../actions/'
import { toggleEditForm} from '../actions'

const mapStateToProps = state => ({
   todos:state.todos,
})

const mapDispatchToProps = dispatch => ({
   deleteTodo: idx => dispatch(deleteTodoAsync(idx)),
   toggleEditForm: isVisible => dispatch(toggleEditForm(isVisible))
 })

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(TodoTable)