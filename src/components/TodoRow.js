import React from 'react'

export default class TodoRow extends React.Component {
    render() {
        return (
            <tr>
                <th >
                    <input type="checkbox" checked={this.props.isComplete}/>
                </th>
                <th>
                     {this.props.name}
                </th>
                <th>
                    <input 
                          type="button" 
                          value="Edit"
                          onClick={this.props.onEdit}
                           />
                </th>
                <th>
                    <input 
                          type="button" 
                          value="Delete"
                          onClick={this.props.onClick}
                           />
                </th>
            </tr>
        );
    }
}