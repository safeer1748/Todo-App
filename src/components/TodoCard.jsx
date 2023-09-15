import React,{useState} from 'react'
import { FaEdit, FaTrashAlt} from 'react-icons/fa'
import EditModal from '../modals/EditModal'
const TodoCard = ({deleteTodo, index, taskObj,updateTodolist}) => {
    const[showModal,setShowModal]=useState(false)
    const colors=[
        {
            primaryColor:"#10b981",
            secondaryColor:"#ecfdf5"
        },
        {
            primaryColor:"#f43f5e",
            secondaryColor:"#fff1f2"
        },
        {
            primaryColor:"#84cc16",
            secondaryColor:"#f7fee7"
        },
        {
            primaryColor:"#d946ef",
            secondaryColor:"#fdf4ff"
        },
        {
            primaryColor:"#eab308",
            secondaryColor:"#fefce8"
        },
        
        {
            primaryColor:"#0ea5e9",
            secondaryColor:"#ecfeff"
        },
        {
            primaryColor:"#8b5cf6",
            secondaryColor:"#f5f3ff"
        },
        
    ]
    const handleModal=()=>{
        setShowModal(!showModal);
    }
    const handleDelete=()=>{
       deleteTodo(index);
    }
    const updateTodo=(updateObj)=>{
        updateTodolist(updateObj,index);
    }
    return (
        <>
            <div className='bg-white shadow-md rounded w-60 h-48 overflow-hidden relative'>
                <div className='w-full h-1' style={{"backgroundColor": colors[index%7].primaryColor}}></div>
                <div className='px-3 py-4'>
                    <h1><span className=' text-[18px] px-3 rounded py-1 capitalize shadow' style={{"backgroundColor": colors[index%7].secondaryColor}}>{taskObj.title}</span></h1>
                    <p className='pt-2'>{taskObj.description}</p>
                </div>
                <div className='flex gap-2 absolute bottom-3 right-3'>
                    <FaEdit onClick={handleModal} className='cursor-pointer' style={{"color": colors[index%7].primaryColor}}/>
                    <FaTrashAlt className='cursor-pointer' onClick={handleDelete} style={{"color": colors[index%6].primaryColor}} />
                </div>
            </div>
            <EditModal showModal={showModal} closeModal={handleModal} taskObj={taskObj} updateTodo={updateTodo}/>
        </>
    )
}

export default TodoCard
