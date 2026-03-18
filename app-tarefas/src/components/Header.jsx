import React from 'react'
import { useTasks } from '../contexts/TaskContext'

export default function Header() {
  const { tasks } = useTasks()
  const total = tasks.length
  const completed = tasks.filter(t => t.done).length

  return (
    <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>
      <h1 style={{ margin: 0 }}>App de Tarefas</h1>
      <div style={{ marginTop: 6, color: '#555' }}>
        Totais: {total} · Concluídas: {completed}
      </div>
    </header>
  )
}