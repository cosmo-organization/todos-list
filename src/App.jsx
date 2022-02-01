import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { AddTodo } from './Components/AddTodo';
import { Footer } from './Components/Footer';
import { useState, useEffect } from 'react';
import { About } from './Components/About';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { TodoEditor } from './Components/TodoEditor';
import { FileHandle } from './Components/FileHandle';

const TODO_STORAGE_KEY = "TODO_KEY_VER1"
const TODO_STORAGE_LAST_DATE_USED = "TODO_APP_LAST_DATE_USED"
const BASE_LINK = "/todos-list"


function App() {


  const [editable, setEditable] = useState(false)
  const [editableTodo, setEditableTodo] = useState(null)

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
      creationDate: date.toLocaleString(),
      changesCount: 0,
      lastChangeDate: ""
    }
    setTodos([...todos, newTodo])

  }

  const requestTodoChange = (todo) => {
    if (!editable) {
      setEditable(true)
      setEditableTodo(todo)
    }
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  const changer = () => {
    setEditable(false)
    setEditableTodo(null)
  }

  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
  }, [todos, editable, editableTodo]);

  return (
    <>
      <Router>
        <Header title="Todo App" baseLink={BASE_LINK} homeLink={BASE_LINK} aboutLink="about" searchBar={false} />
        <Routes>
          {
            !editable ?
              <Route path="/" element={<><AddTodo addTodo={addTodo} /><Todos todos={todos} requestChange={requestTodoChange} onDelete={onDelete} /></>} /> :
              <Route path="/" element={<>
                <TodoEditor currentTodo={editableTodo} title={editableTodo.title} desc={editableTodo.desc} changer={changer}></TodoEditor>
              </>} />
          }
          <Route path="/about" element={<About />} />
          <Route path="/file" element={<FileHandle />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


export default App;
