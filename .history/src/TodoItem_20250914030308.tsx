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
      <li className="py-2 ">
       <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">

            </div>
       </div>
      </li>
    </div>
  )
}

export default TodoItem
