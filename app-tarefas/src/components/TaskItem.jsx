import React from 'react'
import { useTasks } from '../contexts/TaskContext'

export default function TaskItem({ task }) {
  const { toggleTask, removeTask } = useTasks()

  return (
    <li style={{ marginBottom: 12, border: '1px solid #ddd', padding: 12, borderRadius: 6, background: task.done ? '#f0fff0' : '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0, textDecoration: task.done ? 'line-through' : 'none' }}>{task.title}</h3>
          {task.description && <p style={{ margin: '4px 0 0', color: '#555' }}>{task.description}</p>}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => toggleTask(task.id)}>{task.done ? 'Desmarcar' : 'Concluir'}</button>
          <button onClick={() => removeTask(task.id)} style={{ background: 'transparent', border: 'none', color: '#c00', cursor: 'pointer' }}>Remover</button>
        </div>
      </div>
    </li>
  )
}