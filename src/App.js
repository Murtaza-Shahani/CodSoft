import InputForm from './Components/InputForm';
import TodoList from './Components/TodoList'
import './App.css';
import { useState } from 'react';

function App() {
  const[listTodo, setListTodo] = useState([]);  //useState for storing the commig todos
  let addList = (inputText)=>       // function for updating the list 

  {
    if(inputText!=='')
setListTodo([...listTodo,inputText])
  }

  const deleteListItem=(key)=>
  {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo]);
  }
  return (
    <>
    <div className="main-container">
      <div className="center-container">
        <InputForm addList = {addList}/>
        
        <h1 className='app-heading'>  ToDo</h1>
        <hr/>
        {listTodo.map((listItem, i)=>{
          return (
            <TodoList key= {i} index = {i} item={listItem} deleteItem={deleteListItem}/>
          )
        }
        )}
      </div>
    </div>
    
    </>
  );
}

export default App;
