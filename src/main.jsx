import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
//import { TodoApp } from './08-UseReducer/TodoApp'
import { MainApp } from './09-UseContext/MainApp'
import { BrowserRouter } from 'react-router-dom'
//import { Padre } from './07-tarea-memo/Padre'
//import './08-UseReducer/intro-reducer'
//import { CallbackHook } from './06-Memorize/CallbackHook'
//import { MemoHook } from './06-Memorize/MemorHook'
//import { Layout } from './05-UseLayoutEfect/Layout'
//import { Memorize } from './06-Memorize/Memorize'
//import { FocusScreen } from './04-UseRef/FocusScreen'
//import { SimpleForm } from './02-UseEffect/SimpleForm'
//import { FormWithCustomHook } from './02-UseEffect/FormWIthCustomHook'
//import { MultripleCustomHooks } from './03-examples/MultripleCustomHooks'
//import { CounterApp } from './01-UseState/CounterApp'
//import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
//import { HooksApp } from './HooksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
 <BrowserRouter>
   <MainApp/>
 </BrowserRouter>
    
 //</React.StrictMode>,
)
