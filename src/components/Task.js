

function Task({task,setReminder,deleteTask}){
	const {text,reminder,day,id}=task

	return (
		<div draggable onDragEnd={()=>{deleteTask(id)}} className={reminder?"task reminder":"task"} onClick={()=>{setReminder(id)}} >
		<h1>{text}</h1>
		<p>{day}</p>
		

		</div>
	)
}
export default Task;
