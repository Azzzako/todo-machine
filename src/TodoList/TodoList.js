import React from "react";
import './TodoList.css'


export function TodoList(props) {

    return(

            <ul className="list">
                {props.children}
            </ul>
        
    )
}
