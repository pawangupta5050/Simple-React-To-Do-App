import React, { useState, useRef } from 'react'
import Modal from './Modal';

const NewTask = ({ addingTask }) => {

    const modal = useRef();

    const [enteredTask, setEnteredTask] = useState('');

    const changeHandler = (event) => {
       setEnteredTask(event.target.value)
    }

    const clickHandler = () => {
        if (enteredTask.trim().length > 0) {
            setEnteredTask('')
            addingTask(enteredTask)
        }else {
            modal.current.open();
        }
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className='text-xl font-bold text-stone-700 mt-4 my-4 '>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops...  looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className='flex items-center gap-4'>
                <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={changeHandler} value={enteredTask} />
                <button className='text-stone-700 hover:text-stone-950' onClick={clickHandler}>Add Task</button>
            </div>
        </>
    )
}

export default NewTask