

function Task({text,reminder,day}){

	return (
		<div className={reminder?"task reminder":"task"}>
		<h1>{text}</h1>
		<p>{day}</p>
		

		</div>
	)
}
export default Task;
