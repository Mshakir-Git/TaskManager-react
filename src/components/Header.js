import Button from './Button'
function Header({isFormVisible,toggleForm}) {
  const add=()=>{
    toggleForm(!isFormVisible)
  }
  return (
    <header className="header">
      <h1>Task tracker</h1>
      <Button color="rgb(68,255,68)" text="Add" onClick={add}/>
    </header>
  );
}

export default Header;
