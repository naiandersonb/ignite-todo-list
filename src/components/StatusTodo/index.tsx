import styles from './Status.module.css';
export function StatusTodo({
  totalTodo,
  totalCompleted
}: {
  totalTodo: number,
  totalCompleted: number
}) {
  const completed =
    totalCompleted > 0 && totalTodo > 0 ?
      `${totalCompleted} de ${totalTodo}` : 0;
  return (
    <div className={styles.container}>
      <div className={styles.createTodo}>
        <p >Tarefas criadas</p>
        <span className={styles.badge}>{totalTodo || 0}</span>
      </div>
      <div className={styles.completed}>
        <p>Concluídas</p>
        <span className={styles.badge}>{completed}</span>
      </div>
    </div>
  )
}