import { useState } from "react";


type Priority="Urigente"|"Moyenne"|"Basse"

type Todo={
  id: number;
  text:string;
  priority:Priority
}


function App(){
  const[input,setInput]=useState<string>("")
  const[priority,setPriority]= useState<Priority>("Moyenne")
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
      </div>
    </div>
  )
}

export default App

