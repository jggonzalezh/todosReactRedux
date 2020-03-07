import React from 'react'
import { connect } from 'react-redux'
import { addTodo} from '../actions'

const AddTodo = ({ dispatch }) => {
    let input
        return (
            <div>
                <h3>Add</h3>
                <form onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(addTodo(input.value))
                        input.value = ''
                        }}
                 >
                    <input 
                         ref={node => input = node}
                        type="text" placeholder="New to-do" />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }

export default connect()(AddTodo)