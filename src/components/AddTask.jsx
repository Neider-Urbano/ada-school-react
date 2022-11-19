import React, {useState} from 'react'

const AddTask = ({onClickAdd}) => {
  const [newTask,setNewTask]=useState("")

  const handleChange=(e)=>{
    const {value}=e.target
    setNewTask(value)
  }

  const handleClick=()=>{
    onClickAdd(newTask)
    setNewTask("")
  }
  return (
    <div className="containerAddTask">
        <input type="email" className="form-control" placeholder="escribe una nueva tarea" 
          value={newTask} onChange={(e)=>{handleChange(e)}}
        />
        <button type="button" className="btn btn-primary" onClick={()=>{handleClick()}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
    </div>
  )
}

export default AddTask