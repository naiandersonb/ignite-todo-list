import { PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { Todo } from '../TodoList';
import styles from './InputCreateTodo.module.css';

interface InputCreateTodoProps {
  handleCreateNewTodo: (args: Todo) => void;
}

export function InputCreateTodo({ handleCreateNewTodo }: InputCreateTodoProps) {
  const [newTodo, setNewTodo] = useState('');

  function generateHashId() {
    let hash = '';
    const passwordLength = 20;
    while (hash.length < passwordLength) {
      const randomString = Math.random().toString(36).slice(2);
      hash += randomString;
    }
    return hash.slice(0, passwordLength);
  }

  function handleClick() {
    handleCreateNewTodo({
      content: newTodo,
      checked: false,
      id: generateHashId(),
    });
    setNewTodo('');
  }
  return (
    <div className={styles.inputContainer}>
      <input
        value={newTodo}
        onChange={evt => setNewTodo(evt.target.value)}
        placeholder='Adicione uma nova tarefa'
        type="text"
      />
      <div onClick={handleClick} className={styles.createButton}>
        <button>Criar</button>
        <PlusCircle />
      </div>
    </div>
  )
}