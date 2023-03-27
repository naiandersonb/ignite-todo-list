import { Header } from './components/Header'
import { TodoList } from './components/TodoList'

import './styles/global.css'

function App() {

  return (
    <div>
      <Header />
      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App
