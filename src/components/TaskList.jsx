import React from 'react'
import Task from "./Task"

const TaskList = ({onClickDelete, onClickRadio, arrayTask}) => {

  
  return (
    <div>
        {
            arrayTask.length>0 && arrayTask.map((task,key)=>{
                return <Task key={task.id} dataTask={task} onClickDelete={onClickDelete} onClickRadio={onClickRadio}/>
            })
        }
    </div>
  )
}

export default TaskList