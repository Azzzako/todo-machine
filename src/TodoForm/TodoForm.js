import React, { useState } from "react";
import './TodoForm.css'

export const TodoForm = (props) => {

const [newTodoValue, setNewTodoValue] = useState('')

const onChange = (event) => {
    setNewTodoValue(event.target.value)
}

const onCancel = () => {
    props.setOpenModal(false)
}

const onSubmit = (event) => {
    event.preventDefault()
    props.addTodo(newTodoValue)
    props.setOpenModal(false)
}


        return (
            <form 
            onSubmit={onSubmit}
            >
                <label>Add task to "My Task"</label>
                <textarea
                onChange={onChange}
                value={newTodoValue}
                placeholder="Add Task"
                />

                <div className="button-container">
                    <button
                    className="button-cancel"
                    type="button"
                    onClick={onCancel}>
                        Cancel
                    </button>

                    <button
                    className="button-add"
                    type='submit'
                    >
                        Add
                    </button>
                </div>
            </form>
        )
}
