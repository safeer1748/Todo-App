import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard';
import CreateModal from '../modals/CreateModal';
const TodoList = () => {
    const[showModal,setShowModal]=useState(false)
    const[todolist,setTodolist]=useState([]);
  const handleModal=()=>{
    setShowModal(!showModal);
  }
  const addTodo=(todoObj)=>{
    let templist=todolist;
    templist.unshift(todoObj);
    localStorage.setItem("todolist",JSON.stringify(templist))
    setTodolist(templist);
  }
  const getLocalStorage=()=>{
let arr=localStorage.getItem("todolist")
    if(arr){
      let obj=JSON.parse(arr);
      setTodolist(obj);
    }
  }
  const deleteTodo=(index)=>{
    let templist=todolist;
    templist.splice(index,1);
    localStorage.setItem("todolist",JSON.stringify(templist))
    setTodolist(templist);
    getLocalStorage();
  }
  const updateTodolist=(updateObj,index)=>{
    let templist=todolist;
    templist[index]=updateObj;
    localStorage.setItem("todolist",JSON.stringify(templist))
    setTodolist(templist);
    getLocalStorage();
  }
  useEffect(() => {
    getLocalStorage();
  },[]);
  return (
    <>
      <div className=' flex flex-col items-center'>
    <button onClick={handleModal} className='mt-20 mb-6 bg-blue-600 font-semibold p-2 rounded text-white'>CREATE TODO</button>
    </div>
    <br />
    <CreateModal showModal={showModal} closeModal={handleModal} addTodo={addTodo}/>
    <div className='grid  sm:grid-cols-2 lg:grid-cols-4 sm:px-14 md:px-24 gap-10 justify-items-center'>
      {todolist && todolist.map((obj,index)=>{
         return <TodoCard key={index} taskObj={obj} index={index} deleteTodo={deleteTodo} updateTodolist={updateTodolist}/>
      })}
    </div>
    </>
  )
}

export default TodoList
