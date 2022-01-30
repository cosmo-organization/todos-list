import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { AddTodo } from './Components/AddTodo';
import { Footer } from './Components/Footer';
import { useState, useEffect } from 'react';
import { About } from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const TODO_STORAGE_KEY = "TODO_KEY_VER1"
const TODO_STORAGE_LAST_DATE_USED = "TODO_APP_LAST_DATE_USED"
function App() {
  let initTodo = null
  if (localStorage.getItem(TODO_STORAGE_KEY) === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem(TODO_STORAGE_KEY))
  }

  localStorage.setItem(TODO_STORAGE_LAST_DATE_USED, new Date().toLocaleString())


  const [todos, setTodos] = useState(initTodo)

  const addTodo = (title, desc) => {
    let sno = todos.length + 1
    let date = new Date()
    let newTodo = {
      sno: sno,
      title: title,
      desc: desc,
      creationDate: date.toLocaleString()
    }
    setTodos([...todos, newTodo])

  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e != todo
    }))
  }

  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todo App" searchBar={false} />
        <Routes>
          <Route exact path="/" element={<>
            <AddTodo addTodo={addTodo} /><Todos todos={todos} onDelete={onDelete} /></>}>
          </Route>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


export default App;
