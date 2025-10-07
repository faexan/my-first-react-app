import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Navbar from './components/navbar.jsx'
import Animals from './components/animals.jsx'
import PackingList from './components/conditionalRendering.jsx'
import TodoList from './components/keys.jsx'
import Btns from './components/passingData.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Btns />
  </StrictMode>
)
