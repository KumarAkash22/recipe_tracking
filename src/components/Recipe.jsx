import { useEffect, useState } from "react"
import React from "react"
export const Recipe = () => {
     const [title, setTitle] = useState("");
     const [ingredient,setIngredient] = useState("");
     const [time, setTime] = useState("");
     const [img, setImg] = useState("");
     const [instr, setInstr] = useState("")
     const[todo, setTodo] = useState([])
     useEffect (()=>{
        get()
     },[])
     const add = () =>{
        const upload = {
            title: title,
            ingredient: ingredient,
            time : time,
            img : img,
            instr : instr,
            status : false
        }
        fetch("http://localhost:3001/receipe",{
            method : "POST",
            body : JSON.stringify(upload),
            headers : {
                "content-type": "application/json"
            }
        })
    }
     const get = ()=>{
        fetch("http://localhost:3001/receipe").then(t => t.json()).then(res => {
            setTodo(res)
        })
     }
   return <>
    <form onSubmit={(e)=>e.preventDefault()}>
       <input placeholder="Title" type="text"onChange={(e) =>setTitle(e.target.value)}/> <br/>
        <input placeholder="ingredients" type="text" onChange={(e) =>setIngredient(e.target.value)} /> <br/>
        <input placeholder="time to cook" type={Date}  onChange={(e) =>setTime(e.target.value)}/> <br/>
       <input placeholder="image" type= "img" onChange={(e) =>setImg(e.target.value)}/> <br/>
       <input placeholder="instruction" onChange={(e) =>setInstr(e.target.value)}/> <br/>
   
   <button onClick={add}>submit</button>
   {/* <button onClick={card}>Card</button> */}
   {todo.map((e)=>(
       <>
       <div>{e.title}</div>
       <div>{e.ingredient}</div>
       <div>{e.time}</div>
       <div>{e.img}</div>
       <div>{e.instr}</div>
       </>
   ))}
   </form>
   </>
  
   
}
 