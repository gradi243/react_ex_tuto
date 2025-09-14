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
        <h1 className="text-3xl font-bold underline">Todo List</h1>
        <div className="flex gap-4">
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Priority</option>
            <option>Urgente</option>
            <option>Myenne</option>
            <option>Basse</option>
          </select>
          <button className="btn btn-primary">Add</button>
        </div>
        <div className="flex flex-col gap-4">
          {/* Todo Item */}
          <div className="flex justify-between p-4 bg-base-100 rounded-lg">
            <div>
              <h2 className="text-xl font-bold">Learn React</h2>
              <span className="badge badge-secondary">Urgente</span>
            </div>
            <button className="btn btn-error">Delete</button>
          </div>
          {/* End Todo Item */}
        </div>
      </div>
    </div>
  )
}

export default App

