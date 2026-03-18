import TaskItem from './TaskItem'
import { useTasks } from '../contexts/TaskContext'

const TaskList = () => {
  const { tasks } = useTasks()

  return (
    <section>
      <h2>Minhas Tarefas</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(t => (
          <TaskItem key={t.id} task={t} />
        ))}
      </ul>
    </section>
  )
}

export default TaskList
