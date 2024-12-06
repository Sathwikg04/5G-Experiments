import './App.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Exp1 from './Pages/Exp1'
import Exp2 from './Pages/Exp2'
import Exp3 from './Pages/Exp3'
import Exp4 from './Pages/Exp4'
import Exp5 from './Pages/Exp5'

const router = createBrowserRouter([
  { path: "*", element: <Root /> },
  { path: "/", element: <Home /> },
  { path: "/Exp1", element: <Exp1 /> },
  { path: "/Exp2", element: <Exp2 /> },
  { path: "/Exp3", element: <Exp3 /> },
  { path: "/Exp4", element: <Exp4 /> },
  { path: "/Exp5", element: <Exp5 /> },
])

export default function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Exp1' element={<Exp1 />} />
        <Route path='/Exp2' element={<Exp2 />} />
        <Route path='/Exp3' element={<Exp3 />} />
        <Route path='/Exp4' element={<Exp4 />} />
        <Route path='/Exp5' element={<Exp5 />} />
      </Routes>
    </div>
  )
}
