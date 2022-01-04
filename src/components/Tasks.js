
import Task from './Task'
function Tasks({tasks,setTask}){
	const setReminder=(id)=>{
		setTask(tasks.map((task)=>{
				if(task.id==id){
					return {...task,reminder:!task.reminder}
				}
				return task;
		}))
	}
	const deleteTask=(id)=>{
		setTask(tasks.filter((task)=>{
			return task.id!=id
		}))
	}

	return (
		<>
		{tasks.map((task)=><Task key={task.id} task={task} setReminder={setReminder} deleteTask={deleteTask}/>)}

		</>
	)
}
export default Tasks;
