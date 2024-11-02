import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from '../routes/Landing/Landing'
import { Login } from '../routes/Login/Login'
import { Register } from '../routes/Register/Register'
import { Dashboard } from '../routes/Dashboard/Dashboard'
import { MovieSingle } from '../routes/MovieSingle/MovieSingle'
import { NotFound } from '../routes/NotFound/NotFound'
import { Account } from '../routes/Account/Account'
import { ProtectedRoute } from '../routes/ProtectedRoute/ProtectedRoute'
import { PublicRoute } from '../routes/PublicRoute/PublicRoute'
function App() {
  return (
      <Routes>
        <Route>
          <Route path='/' element={<PublicRoute>
              <Landing />
            </PublicRoute>} />
          <Route path='/login' element={<PublicRoute>
              <Login />
            </PublicRoute>} />
          <Route path='/register' element={<PublicRoute>
              <Register />
            </PublicRoute>} />
          <Route path='/dashboard' element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>}>
            <Route path='m/:movie' element={<MovieSingle />} />
          </Route>
          <Route path='/account' element={<ProtectedRoute>
              <Account />
            </ProtectedRoute>} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  )
}

export default App
