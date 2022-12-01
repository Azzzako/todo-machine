import '../App/App';
import React, {useState} from "react";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Fecha } from '../Fecha/Fecha';
import { useLocalStorage } from '../CustomHook/CustomHooks';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';



function Home() {

  const [searchWord, setSearchWord] = useState('')
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error

  } = useLocalStorage('TODOS_V1', [])

  let searchedTodos = []

  if(!searchWord >= 1){
    searchedTodos = todos
  } else {

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchWord.toLowerCase()
      return todoText.includes(searchText)
    })
  
  }

  //Total de tareas
    let todosLength = searchedTodos.length

  //Contador de todos 

  let todosCompleted = []

  for (let i = 0; i < searchedTodos.length; i++) {
   if(searchedTodos[i].completed === true){
    todosCompleted.push(searchedTodos[i])
   }
  }

  // Tareas completadas
  let todoCount = todosCompleted.length

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed:false,
      text
    })
    saveTodos(newTodos)
  }

  const completeTodos = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  //Modal de formulario para crear tareas

  const [openModal, setOpenModal] = useState(false)

  return (
      <>

      <React.Fragment>

    <Fecha />

    <TodoCounter 
    length ={todosLength}
    completedTodo = {todoCount}/>
    <TodoSearch 
    searchWord={searchWord}
    setSearchWord={setSearchWord}
    />

    
    
    <TodoList>
      {error && <p>Oops... error, please reload</p>}
      {loading && <h4>Loading, please wait...</h4>}
      {(!loading && !searchedTodos.length) && <h4>Create your first task...</h4>}

      {searchedTodos.map(todo => (
        <TodoItem 
        onComplete = {() => completeTodos(todo.text)}
        onDelete = {() => deleteTodo(todo.text)}
        completed={todo.completed}
        key={todo.text}
        text={todo.text}
        />
      ))}
    </TodoList>

      {openModal && (
        <Modal>
      <TodoForm
      setOpenModal={setOpenModal}
      openModal={openModal}
      addTodo={addTodo}
      />
    </Modal>
      )}
      
    

    <CreateTodoButton
    setOpenModal={setOpenModal}
    openModal={openModal}
    />
    
    </React.Fragment>
    
    </>
  )
}        

export default Home;
