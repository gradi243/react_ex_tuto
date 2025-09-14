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
      <li >
        {todo.text} 
      </li>
    </div>
  )
}

export default TodoItem
