import React from 'react'
import TodoRow from './TodoRow'
import { toggleEditForm } from '../actions';

const TodoTable =({todos,deleteTodo,toggleEditForm}) => (    
            <div >
                <p>{`${todos.length} to-dos`}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Is Complete?</th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >{
                               todos.map(
                                            (todo)=> 
                                            <TodoRow 
                                                    key={todo.id} 
                                                    {...todo}  
                                                    onClick={ () => deleteTodo(todo.id)}
                                                    onEdit={()=> toggleEditForm(todo.id)}
                                                    />
                                         )
                            }
                    </tbody>
                </table>
            </div>
      );

export default TodoTable     

      