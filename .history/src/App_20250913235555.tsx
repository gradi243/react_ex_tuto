type priority="urigente"|"myenne"|"basse"

type Todo={
  id: number;
  text:string;
  priority:priority
}


function App(){
  return(
    <div className="flex justify-cente">
      <div className="w-2/3 flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
        <div className="flex gap-4">
          <input 
          type="text"
          className="input w-full"
          placeholder="ajoute une tache"
          />

          
        </div>
      </div>
    </div>
  )
}

export default App

