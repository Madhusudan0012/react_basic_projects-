import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and vege',
    'Learn more about programming '
]
  return (
    <main>
      <TodoInput />
      <TodoList  todos={todos}/>
    </main>
  )
}

export default App
