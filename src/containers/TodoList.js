import {connect } from 'react-redux'
import TodoTable from '../components/TodoTable'
import  { deleteTodo }  from '../actions/'
import { toggleEditForm} from '../actions'

const mapStateToProps = state => ({
   todos:state.todos,
})

const mapDispatchToProps = dispatch => ({
   deleteTodo: idx => dispatch(deleteTodo(idx)),
   toggleEditForm: isVisible => dispatch(toggleEditForm(isVisible))
 })

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(TodoTable)