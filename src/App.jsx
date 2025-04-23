import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogIn from './Components/LogIn/LogIn'
import './index.css'
import store from './redux/App/Store'
import { Provider } from 'react-redux'
import Home from './Components/Home/Home'
import MainProfile from './Components/MainProfile/MainProfile'
function App () {
  let router = createBrowserRouter([
    { index: true, element: <LogIn /> },
    { path: '/home', element: <Home /> },
    { path: '/MainProfile', element: <MainProfile /> },
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
