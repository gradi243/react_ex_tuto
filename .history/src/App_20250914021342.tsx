import { useEffect, useState } from "react";


type Priority="Urigente"|"Moyenne"|"Basse"

type Todo={
  id: number;
  text:string;
  priority:Priority
}


function App(){
  const[input,setInput]=useState<string>("")
  const[priority,setPriority]= useState<Priority>("Moyenne")
 

  const savedTodos=localStorage.getItem("todos")
  const  initialTodos=savedTodos?JSON.parse(savedTodos):[]
  const [todos,setTodos]=useState<Todo[]>(initialTodos)

  const [filtere,setFilter]=useState<Priority |"Tous">("Tous")

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  function addTodo(){
    if(input.trim()==""){
       return
    }

    const newTodo:Todo={
      id:Date.now(),
      text:input.trim(),
      priority:priority
    }

    const newtodos=[newTodo,...todos]
    setTodos(newtodos)
    setInput("")
    setPriority("Moyenne")
    console.log(newtodos)
     
  }

  if(filtere==="Tous"){
    filteredTodos=todos
  }else{
    filteredTodos=todos.filter((todo)=>todo.priority===filtere)
  }
   
  let filteredTodos: Todo[] = [];
  return(
    <div className="flex justify-cente">
      <div className="w-2/3 flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
        <div className="flex gap-4">
          <input 
          type="text"
          className="input w-full"
          placeholder="ajoute une tache"
          value={input}
         onChange={(e)=>setInput(e.target.value)}
          />

          <select 
          className="select w-full"
          value={priority}
          onChange={(e)=>setPriority(e.target.value as Priority)}
          >
            <option value="Urigente">Urigente</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>

          <button onClick={addTodo} className="btn btn-primary">Ajouter</button>
        </div>
        <div className="space-y-2 flex-1 h-fit">
          <div className="flex flex-wrap gap-4">
            <button
              className={`btn btn-soft ${filtere=== "Tous" ? "btn-primary" :""}`}
              onClick={()=> setFilter("Tous")}
            >
              Tous
            </button>
          </div>
              {filtered}
        </div>
      </div>
    </div>
  )
}

export default App

