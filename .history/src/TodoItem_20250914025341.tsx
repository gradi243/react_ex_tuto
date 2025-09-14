type Priority="Urigente"|"Moyenne"|"Basse"

type Todo={
  id: number;
  text:string;
  priority:Priority
}

type propos={
    todo:Todo
}
const TodoItem = ({pro}) => {
  return (
    <div>
      
    </div>
  )
}

export default TodoItem
