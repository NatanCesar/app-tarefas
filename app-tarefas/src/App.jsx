import { TaskProvider } from './contexts/TaskContext'
import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import './App.css'

function App() {
  return (
    <TaskProvider>
      <Header />
      <main style={{ padding: 12, alignSelf: 'center' }}>
        <AddTask />
        <TaskList />
      </main>
    </TaskProvider>
  )
}

export default App