import React, { useEffect, useState } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'

function Contacts() {
  const [situation, setSituation] = useState("All")
  const [contacts, setContacts] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
      return JSON.parse(savedTodos)
    }else{
      return [];
    }
  })
  
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <section className="todoapp">
        <Header contacts={contacts} setContacts={setContacts}/>
        <List contacts={contacts} setContacts={setContacts} situation={situation} setSituation={setSituation}/>
	      <Footer contacts={contacts} setContacts={setContacts} situation={situation} setSituation={setSituation}/>	
	    </section>

      <footer className="info">
	      <p>Click to edit a todo</p>
	      <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
  
    </div>
  )
}

export default Contacts