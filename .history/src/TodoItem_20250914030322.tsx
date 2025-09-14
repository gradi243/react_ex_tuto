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
      <li className="p-2 ">
       <div className="flex justify-between items-center">
            <div className="flex gap- items-center">

            </div>
       </div>
      </li>
    </div>
  )
}

export default TodoItem
