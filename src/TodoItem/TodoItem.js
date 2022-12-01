import React from "react";
import './TodoItem.css'
import {TfiTrash} from 'react-icons/tfi'
import {BiBadgeCheck} from "react-icons/bi";

export function TodoItem(props){



    return (
        
        <li className="container-item">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >
                <BiBadgeCheck/>
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}
            ><TfiTrash/></span>
        </li>
        
    )
}


