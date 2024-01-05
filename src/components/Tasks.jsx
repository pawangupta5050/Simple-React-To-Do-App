import React from 'react'
import NewTask from './NewTask'

const Tasks = ({addTask, deleteTask, tasks}) => {
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4 '>Tasks</h2>
        <NewTask addingTask={addTask} />
        {tasks.length === 0 && <p className='text-stone-800 my-4'>This project does not have any tasks yet.</p>}
        {tasks.length > 0 && <ul className='p-4 mt-8 rounded-md bg-stone-100'>
            {tasks.map(task => {
                return <li className='flex justify-between my-4' key={task.id}>
                <span>{task.task}</span>
                <button className='text-stone-700 hover:text-red-500' onClick={() => deleteTask(task.id)}>Clear</button>
                </li>
            })}
        </ul>}
    </section>
  )
}

export default Tasks