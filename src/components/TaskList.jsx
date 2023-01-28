import Task from "./Task"

const TaskList = ({onClickDelete, onClickRadio, arrayTask, onClickUpdate}) => {

  
  return (
    <div>
        {
            arrayTask.length>0 && arrayTask.map((task,key)=>{
                return <Task key={task.id} dataTask={task} onClickDelete={onClickDelete} onClickRadio={onClickRadio} onClickUpdate={onClickUpdate}/>
            })
        }
    </div>
  )
}

export default TaskList