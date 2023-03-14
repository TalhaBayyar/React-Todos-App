import React, { useEffect, useState } from 'react'


const initialValues = {listElement: "", id: 0};
function Header({contacts, setContacts}) {

const [form, setForm] = useState(initialValues);

useEffect(()=>{
  setForm(initialValues);
},[])

useEffect(()=>{
  setForm(initialValues);
},[contacts])

const onChangeInput = (e) => {
  setForm({listElement: e.target.value, id: contacts.length + 1})
}
  
const onSubmit = (e) => {
  e.preventDefault();
  if(form.listElement === ""){
    return false
    }else{
      setContacts([...contacts, form])       
    }
  }

  let newArr = [...contacts];
  return (
    <div>
      <header className="header">
		    <h1>todos</h1>
		    <form onSubmit={onSubmit}>
			    <input className="new-todo" placeholder="What needs to be done?" autoFocus value={form.listElement} onChange={onChangeInput} />
		    </form>
	    </header>

      <section className={newArr.length < 1 ? "hidden" : "main"}>
        <div className='toggle-all'></div>
        <input type="checkbox" name="allSelect" checked={contacts.filter((user) => user.isChecked !== true).length <1} onChange={(e) => {
          const { name, checked } = e.target;
          if (name === "allSelect") {
          let tempUser = contacts.map((user) => {
          return { ...user, isChecked: checked };
          });     
          setContacts(tempUser);
          }  
          }} />   
      </section>
    </div>
  )
}
export default Header
