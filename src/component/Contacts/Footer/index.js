function Footer({contacts,setContacts, situation, setSituation}) {
	
const itemLeft = contacts.filter((todo) => !todo.isChecked).length;
const activeButton = () => {
  const array = contacts.filter(item => item.isChecked)
  setContacts(array)
}
const onClickAvailable = (e) => {
  setSituation(e.target.name)
}
  return (
    <div>
      <footer className="footer">
		<span className="todo-count">
		  <strong>{itemLeft} </strong>
			items left
		</span>

		<ul className="filters">
		  <li>
			<a href="#/" className={situation ==="All" ? "selected":""} onClick={onClickAvailable} name="All" >All</a>
		  </li>
		  <li>
		    <a href="#/" className={situation ==="Active" ? "selected":""} onClick={onClickAvailable} name="Active" >Active</a>
		  </li>
		  <li>
		    <a href="#/" className={situation ==="Completed" ? "selected":""} onClick={onClickAvailable} name="Completed" >Completed</a>
		   </li>
		</ul>

		<button className="clear-completed" onClick={activeButton}>
		  Clear Completed
		</button>
	  </footer>
	  
    </div>
  )
}
export default Footer