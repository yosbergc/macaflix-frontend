import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from '../routes/Landing/Landing'
import { Login } from '../routes/Login/Login'
import { Register } from '../routes/Register/Register'
import { Dashboard } from '../routes/Dashboard/Dashboard'
import { MovieSingle } from '../routes/MovieSingle/MovieSingle'
import { NotFound } from '../routes/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={Landing} />
          <Route path='/login' element={Login} />
          <Route path='/register' element={Register} />
          <Route path='/dashboard' element={Dashboard} />
          <Route path='/dashboard/movie/:movie' element={MovieSingle} />
          <Route path='*' element={NotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
