
import Task from './Task'
function Tasks({tasks}){

	return (
		<>
		{tasks.map((task)=><Task text={task.text}/>)}

		</>
	)
}
export default Tasks;
