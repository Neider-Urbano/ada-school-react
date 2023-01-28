
const ButtonDanger = ({onClickClear,taskPending}) => {
  return (
    <div className="buttonDanger">
        <p>You have {taskPending} pending task</p>
        <button type="button" className="btn btn-danger" onClick={onClickClear}>Clear all</button>
    </div>
  )
}

export default ButtonDanger