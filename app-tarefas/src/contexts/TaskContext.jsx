import React, { createContext, useContext, useState } from 'react'

const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Comprar leite', description: '2 litros', done: false },
    { id: 2, title: 'Estudar React', description: 'Ler documentação', done: false },
    { id: 3, title: 'Ir à academia', description: 'Treino de pernas', done: true }
  ])

  function addTask(title, description = '') {
    const id = Date.now()
    const newTask = { id, title, description, done: false }
    setTasks(prev => [...prev, newTask])
  }

  function toggleTask(id) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function removeTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  const ctx = useContext(TaskContext)
  if (!ctx) throw new Error('useTasks must be used within TaskProvider')
  return ctx
}