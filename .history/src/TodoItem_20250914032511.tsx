type Priority="Urigente"|"Moyenne"|"Basse"

type Todo={
  id: number;
  text:string;
  priority:Priority
}

type Propos={
    todo:Todo
}
const TodoItem = ({todo}): propos => {
  return (
    <div>
      <li className="p-3 ">
       <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <input type="checkbox" 
                 className="checkbox checkbox-primary 
                 checkbox-sm"
                  />
                <span
                className="text-md font-bold"
                >
                    {todo.text}
                </span>

                <span
                className={`badge badge-soft badge-sm
                    ${todo.priority==="Urigente"?
                        "badge-error"
                        :todo.priority==="Moyenne"?
                        "badge-warning":"badge-success"
                    }`
                }
                >
                    {todo.priority}
                </span>

            </div>

            <button className="btn btn-circle btn-sm btn-error">
            
            </button>
       </div>
      </li>
    </div>
  )
}

export default TodoItem
