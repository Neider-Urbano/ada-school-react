import React, {useState, useEffect} from 'react'
import AddTask from './addTask'
import ButtonDanger from './ButtonDanger'
import CardTask from './cardTask'

const dataTask=[
    {
        "id":1,
        "name":"ver vt"
    },{
        "id":2,
        "name":"jugar celular"
    },{
        "id":3,
        "name":"ir al parque"
    }
]

const Task = () => {
    const [arrayTask,setArrayTask]=useState(dataTask)
    const [taskPending,setTaskPending]=useState(dataTask.length)

    useEffect(()=>{
    },[arrayTask,taskPending])

    const handleClickClear=()=>{
        if(arrayTask.length>0){
            setArrayTask([])
            setTaskPending(0)
        }
    }

    const handleClickDelete=(name)=>{
        let deleteTask=arrayTask.filter((task)=>task.name!=name)
        setArrayTask(deleteTask)
        setTaskPending(taskPending-1)
    }

    const handleClickRadio=(boolean)=>{
        if(boolean) setTaskPending(taskPending+1)
        else setTaskPending(taskPending-1)
    }

    const handleClickAdd=(dataNewTask)=>{
        let arrayUpdate=arrayTask;
        arrayUpdate.push({"id":Math.max(...arrayTask.map(task => task.id))+1,"name":dataNewTask})
        setArrayTask(arrayUpdate)
        setTaskPending(taskPending+1)
    }

    return (
        <div className="card p-4 containerTask">
            <h1>Todo App</h1>
            <AddTask onClickAdd={handleClickAdd}/>
            <div>
            {
                arrayTask.length>0 && arrayTask.map((task,key)=>{
                    return <CardTask key={key+1} dataTask={task} onClickDelete={handleClickDelete} onClickRadio={handleClickRadio}/>
                })
            }
            </div>
            <ButtonDanger onClickClear={handleClickClear} taskPending={taskPending}/>        
        </div>
    )
}

export default Task