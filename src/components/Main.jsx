import React, {useState, useEffect} from 'react'
import Header from './Header';
import ButtonDanger from './ButtonDanger';
import AddTask from './addTask'
import TaskList from './TaskList';


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


const Main = () => {

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
        <div className="containerTask card p-4">
            <Header />
            <AddTask onClickAdd={handleClickAdd}/>
            <TaskList onClickDelete={handleClickDelete} onClickRadio={handleClickRadio} arrayTask={arrayTask}/>
            <ButtonDanger onClickClear={handleClickClear} taskPending={taskPending}/>        
        </div>
    )
}

export default Main