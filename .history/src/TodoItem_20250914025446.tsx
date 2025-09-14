type Priority="Urigente"|"Moyenne"|"Basse"

type Todo={
  id: number;
  text:string;
  priority:Priority
}

type Props={
    todo:Todo
}
const TodoItem = ({todo}): propos => {
  return (
    <div>
      
    </div>
  )
}

export default TodoItem
