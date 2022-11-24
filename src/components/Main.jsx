import React, {useState, useEffect} from 'react'
import Header from './Header';
import ButtonDanger from './ButtonDanger';
import AddTask from './addTask'
import TaskList from './TaskList';

const Main = () => {
    const [arrayTask,setArrayTask]=useState([])
    const [taskPending,setTaskPending]=useState(arrayTask.length)
    const miStorage = window.localStorage;

    useEffect(()=>{
        var dataTasks = JSON.parse(miStorage.getItem("dataTasks"))
        if(dataTasks){
            setArrayTask(dataTasks)
            let cantidadPending = 0;
            dataTasks?.map((task)=>{
                if(task.state==false){
                    cantidadPending++;
                }
            })
            setTaskPending(cantidadPending)
        }
    },[taskPending])

    const handleClickClear=()=>{
        if(arrayTask.length>0){
            miStorage.clear();
            setTaskPending(0)
            setArrayTask([])
        }
    }

    const handleClickDelete=(id)=>{
        var dataTasks = JSON.parse(miStorage.getItem("dataTasks"))
        let deleteTask=dataTasks.filter((task)=>task.id!=id)
        miStorage.setItem("dataTasks",JSON.stringify(deleteTask))
        setArrayTask(deleteTask);
        setTaskPending(taskPending-1)
    }

    const handleClickRadio=(boolean,idTask)=>{
        var dataTasks = JSON.parse(miStorage.getItem("dataTasks"))
        let updateTask=dataTasks.map((task)=>{
            if(task.id==idTask){
                task.state=boolean
            }
            return task;
        })
        miStorage.setItem("dataTasks",JSON.stringify(updateTask))
        if(boolean) setTaskPending(taskPending-1)
        else setTaskPending(taskPending+1)
    }

    const handleClickAdd=(dataNewTask)=>{
        if(dataNewTask.length>0){
            var dataTasks = dataTasks=JSON.parse(miStorage.getItem("dataTasks"))
            if(dataTasks){
                dataTasks.push({"id":Math.max(...dataTasks.map(task => task.id))+1,"name":dataNewTask, "state":false})
            }else{
                dataTasks=[]
                dataTasks.push({"id":1,"name":dataNewTask, "state":false})
            }
            miStorage.setItem("dataTasks",JSON.stringify(dataTasks))
            setTaskPending(taskPending+1)
        }else{
            alert("escribe alguna tarea")
        }
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