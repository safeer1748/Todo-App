import React, { useState } from 'react'

const CreateModal = ({closeModal,showModal,addTodo}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }
    const handleTodo = () => {
        let todoObj = {
            "title": title,
            "description": desc
        }
        addTodo(todoObj);
        setTitle('');
        setDesc('');
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
                        <h1 className='text-2xl'>Create Todo</h1>
                    </header>
                    <form className='flex flex-col gap-2 mt-2'>
                        <label className='' htmlFor="title">Title</label>
                        <input className='border border-gray-400 rounded p-1 focus:outline-blue-300' maxLength='16' id='title' type="text" placeholder='Enter Todo Title' value={title} onChange={handleTitle} />
                        <label className='' htmlFor="desc">Description</label>
                        <textarea className='border border-gray-400 rounded p-1 focus:outline-blue-300' cols='30' rows='4' maxLength='94' id='desc' type="text" placeholder='Enter Todo Description' value={desc} onChange={handleDesc} />
                    </form>
                    <footer className='flex gap-3 mt-5 justify-center'>
                        <small><button onClick={handleTodo} className='bg-blue-600 text-white p-2 rounded '>Add Todo</button></small>
                        <small><button onClick={closeModal} className='bg-gray-600 text-white  rounded p-2'>Cancel</button> </small>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default CreateModal
