
import Task from './Task'
function Tasks({tasks}){

	return (
		<>
		{tasks.map((task)=><Task key={task.id} text={task.text} day={task.day} reminder={task.reminder}/>)}

		</>
	)
}
export default Tasks;
