import React, {useEffect, useState } from 'react'

const EditModal = ({closeModal,showModal,taskObj,updateTodo}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }
    useEffect(()=>{
        setTitle(taskObj.title);
        setDesc(taskObj.description);
    },[])
    const handleUpdate=()=>{
        let updateObj={
           "title":title,
           "description":desc 
        }
        updateTodo(updateObj)
        closeModal();
    }
    if (showModal == false) {
        return (null);
    }
    return (
        <>
            <div className=' fixed inset-0 backdrop-blur-sm flex justify-center items-center bg-black bg-opacity-20 z-10'>
                <div className='bg-white p-4 rounded flex flex-col justify-center items-center'>
                    <header>
                        <h1 className='text-2xl'>Edit Todo</h1>
                    </header>
                    <form className='flex flex-col gap-2 mt-2'>
                        <label className='' htmlFor="title">Title</label>
                        <input className='border border-gray-400 rounded p-1 focus:outline-blue-300' maxLength='16' id='title' type="text" placeholder='Enter Todo Title' value={title} onChange={handleTitle} />
                        <label className='' htmlFor="desc">Description</label>
                        <textarea className='border border-gray-400 rounded p-1 focus:outline-blue-300' cols='30' rows='4' maxLength='94' id='desc' type="text" placeholder='Enter Todo Description' value={desc} onChange={handleDesc} />
                    </form>
                    <footer className='flex gap-3 mt-5 justify-center'>
                        <small><button onClick={handleUpdate} className='bg-blue-600 text-white p-2 rounded '>Update</button></small>
                        <small><button onClick={closeModal} className='bg-gray-600 text-white  rounded p-2'>Cancel</button> </small>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default EditModal
