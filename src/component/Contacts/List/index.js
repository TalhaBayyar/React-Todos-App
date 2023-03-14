import { useState } from "react";

function List({contacts, setContacts, situation}) {
const [editingTodo, setEditingTodo] = useState(null);
const [editedTodoText, setEditedTodoText] = useState('');

const handleEditTodo = (todo) => {
  setEditingTodo(todo);
  setEditedTodoText(todo.listElement);
};

const handleSaveEdit = () => {
  const updatedTodos = contacts.map((todo) => {
    if (todo.id === editingTodo.id) {
      return {
        ...todo,
        listElement: editedTodoText,
      };
    }
      return todo;
    });
    setContacts(updatedTodos);
    setEditingTodo(null);
    setEditedTodoText('');
  };

  const handleTodoTextChange = (e) => {
    setEditedTodoText(e.target.value);
    
  };

  return (
    <div className='main'>
	  <ul className="todo-list">
        {
          contacts.map((item,index) => {
			if(situation === "All"){
			  return(
				<li className={!item.isChecked ? "" : "completed"} key={index}>
			      <div className="view">
				    <input className="toggle" type="checkbox" name={item.listElement} checked={item.isChecked} onChange={(e) => {
				      let arr = [...contacts]	
				      const { name, checked } = e.target;
				      let tempUser = arr.map((item) =>
				        item.listElement === name ? { ...item, isChecked: checked } : item);				
				        setContacts(tempUser)
				      }
				    } />
				    <label className="btn2" onClick={() => handleEditTodo(item)}>
				      {
				        editingTodo && editingTodo.id === item.id ? (
					    <input type="text" className="btn" value={editedTodoText} onChange={handleTodoTextChange} onBlur={handleSaveEdit}/>   
					    ) : ( item.listElement )		 
				      }				
				    </label>
				    <button className="destroy" onClick={() => {
					  let arr2 = [...contacts];
					  arr2 = arr2.filter((value) => {
					  return value !== arr2[index];
					  })
					  setContacts(arr2)
					}}>
					</button>
			      </div>
			    </li>
					)

				}else if(situation === "Active"){
				  if(!item.isChecked){
					return(
					  <li className={!item.isChecked ? "" : "completed"}  key={index}>
		 				<div className="view">
						  <input className="toggle" type="checkbox" name={item.listElement} checked={item.isChecked} onChange={(e) => {
				            let arr = [...contacts]	
				            const { name, checked } = e.target;
				            let tempUser = arr.map((item) =>
				              item.listElement === name ? { ...item, isChecked: checked } : item);				
				              setContacts(tempUser);}}/>
				          <label className="btn2" onClick={() => handleEditTodo(item)}>
				            {
				              editingTodo && editingTodo.id === item.id ? (
					          <input type="text" className="btn" value={editedTodoText} onChange={handleTodoTextChange} onBlur={handleSaveEdit}/>   
					          ) : ( item.listElement )		 
				            }				
				          </label>
				          <button className="destroy" onClick={() => {
						    let arr2 = [...contacts];
						    arr2 = arr2.filter((value) => {
						    return value !== arr2[index];
						  })
						  setContacts(arr2)
					      }}>
					      </button>
			            </div>
			          </li>
					)
					}
				}else if(situation === "Completed"){
				  if(item.isChecked){
					return(
					  <li className={!item.isChecked ? "" : "completed"} key={index}>
			            <div className="view">
				          <input className="toggle" type="checkbox" name={item.listElement} checked={item.isChecked} onChange={(e) => {
				            let arr = [...contacts]	
				            const { name, checked } = e.target;
				            let tempUser = arr.map((item) =>
				              item.listElement === name ? { ...item, isChecked: checked } : item);				
				                setContacts(tempUser);}}/>
				            <label className="btn2" onClick={() => handleEditTodo(item)}>
				              {
				                editingTodo && editingTodo.id === item.id ? (
					            <input type="text" className="btn" value={editedTodoText} onChange={handleTodoTextChange} onBlur={handleSaveEdit}/>   
					            ) : ( item.listElement )		 
				              }				
				            </label>
				            <button className="destroy" onClick={() => {
						      let arr2 = [...contacts];
						      arr2 = arr2.filter(function(value){
							  return value !== arr2[index];
						    })
						    setContacts(arr2)
					        }}>

					       </button>
			            </div>
			         </li>
				  )
				}
			  }
			}
		  )
		}
	</ul>
  </div>
  )
}
export default List





