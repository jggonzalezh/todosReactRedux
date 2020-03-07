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
                                            (todo,idx)=> 
                                            <TodoRow 
                                                    key={idx} 
                                                    {...todo}  
                                                    onClick={ () => deleteTodo(idx)}
                                                    onEdit={()=> toggleEditForm(idx)}
                                                    />
                                         )
                            }
                    </tbody>
                </table>
            </div>
      );

export default TodoTable     

      