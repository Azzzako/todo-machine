import React from "react";
import './TodoCounter.css'


 export function TodoCounter(props) {

    return (
        <section className="cont-counter">
        <h1 className="title-counter">My Task</h1>
        <h4 className="TodoCounter">{props.completedTodo} of {props.length} completed</h4>
        </section>
    )

}


