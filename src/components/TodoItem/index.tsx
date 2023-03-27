import { Trash } from "@phosphor-icons/react";
import { Checkbox } from "../Checkbox/index.";
import { Todo } from "../TodoList";
import styles from './TodoItem.module.css';

const todoItemStyle = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center'
}

type TodoItemProps = {
  todo: Todo;
  handleDeleteTodo: (todoId: string) => void;
  handleCheckTodo: (todoId: string, checked: boolean) => void;
}

export function TodoItem({
  handleCheckTodo,
  handleDeleteTodo,
  todo
}: TodoItemProps) {

  function handleCheck(checked: boolean) {
    handleCheckTodo(todo.id, checked);
  }

  return (
    <div className={styles.todoItemContainer}>
      <Checkbox isChecked={todo.checked} setChecked={handleCheck} />
      <p
        className={todo.checked ?
          styles.todoItemCompleted :
          styles.todoItemContent}
      >
        {todo.content}
      </p>
      <button
        className={styles.deleteTodoBtn}
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <Trash />
      </button>
    </div>
  )
}