import React,{useState,useRef} from "react";
import Hover from "./component/Hover";
import useInput from './hook/useInput'
import useHover from "./hook/useHover";
import List from "./component/List";
import useDebounce from "./hook/useDebounce";
import axios from 'axios';
import useRequest from "./hook/useRequest";



function App() {

//   const [value, setValue] = useState('')
// const debouncedSearch = useDebounce(search, 500)
const [todos, loading, error] = useRequest(fetchTodos)

function fetchTodos() {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`)
}
if(loading){
  return <h1> ..... загрузка....</h1>
}
if(error){
  return <h1> ..... ошибочка....</h1>
}
//   function search(query) {
//     fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
//   .then(response => response.json())
//   .then(json =>{
//      console.log(json)
//     })
// }
//   const username = useInput('')
//   const password = useInput('')
//   const ref =  useRef()
//  const isBlackHovering = useHover(ref)
// const onChange = e =>{
//   setValue(e.target.value)
//   debouncedSearch(e.target.value)
// }
  return (
    <div >
    {todos && todos.map(todo =>
            <div key={todo.id} style={{padding:30, border: '10px solid black'}}>
            {todo.id}. {todo.title}
            </div>
            )}
    {/* <input type='text' value={value} onChange={onChange}/> */}
    {/* <List/> */}
{/*     
       <input {...username} type='text' placeholder='Username'/>
      <input {...password} type='text' placeholder='Password'/>
      <button onClick={()=> console.log(username.value,password.value)}>Click</button> 
      <Hover/>
       <div ref={ref} style={{width:300,height:300,background: isBlackHovering ? 'red' : 'green'}}></div>  */}
    </div>
  );
}

export default App;
