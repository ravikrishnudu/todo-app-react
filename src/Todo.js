import React from 'react';
import './Todo.css';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';


function Todo(props) {
    return (
            <list className="todo__list">
              
        
                    <ListItemText primary='Todo' secondary={props.text} />
               
            </list>
    )
}

export default Todo
