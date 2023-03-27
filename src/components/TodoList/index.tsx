import { useCallback, useEffect, useMemo, useState } from "react";
import { InputCreateTodo } from "../InputCreateTodo";
import { StatusTodo } from "../StatusTodo";
import { TodoItem } from "../TodoItem";
import styles from './TodoList.module.css';

export interface Todo {
  id: string;
  content: string;
  checked: boolean;
}

export function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function handleSaveToLocalStorage(todo_list: Todo[]) {
    window.localStorage.removeItem('todoList');
    window.localStorage.setItem('todoList', JSON.stringify(todo_list));
  }

  const handleCreateNewTodo = (newTodo: Todo) => {
    const newTodoList = [...todoList, newTodo];
    handleSaveToLocalStorage(newTodoList);
    setTodoList(newTodoList);
  };

  const handleCheckTodo = useCallback((todoId: string, checked: boolean) => {
    const newTodoList = todoList.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          checked
        }
      }
      return todo;
    });
    handleSaveToLocalStorage(newTodoList);
    setTodoList(newTodoList);
  }, [todoList]);

  const handleDeleteTodo = useCallback((todoId: string) => {
    const newTodoList = todoList.filter(todo => todo.id !== todoId);
    handleSaveToLocalStorage(newTodoList);
    setTodoList(newTodoList);
  }, [todoList]);

  const totalTodo = useMemo(() => {
    const completedTodos = todoList.filter(todo => todo.checked);
    return completedTodos.length ?? 0;
  }, [todoList]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const todoListToLocalStorage = window.localStorage.getItem('todoList');
      if (todoListToLocalStorage) {
        const newTodoList = JSON.parse(todoListToLocalStorage);
        setTodoList([...newTodoList]);
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <InputCreateTodo handleCreateNewTodo={handleCreateNewTodo} />

      <div style={{ marginTop: '4rem' }}>
        <StatusTodo
          totalTodo={todoList.length}
          totalCompleted={totalTodo}
        />
        {todoList.map(todo => (
          <TodoItem
            key={todo.content}
            todo={todo}
            handleCheckTodo={handleCheckTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  )
}