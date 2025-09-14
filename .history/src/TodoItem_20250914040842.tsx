import { Trash } from "lucide-react";

type Priority="Urigente"|"Moyenne"|"Basse"

type Todo={
  id: number;
  text:string;
  priority:Priority
}

type Propos={
    todo:Todo
    onDelete: () => void
    isselelcted?:boolean
}
const TodoItem = ({todo, onDelete, i }): propos => {
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

            <button 
            onClick={onDelete}
            className="btn btn-soft btn-sm btn-error">
            <Trash className="h-4 w-4"/>
            </button>
       </div>
      </li>
    </div>
  )
}

export default TodoItem
