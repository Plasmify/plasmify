import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { FourOhFour } from '../pages/404'

export const AppRouter = () => {
  return(
    <Routes>
      <Route path='*' element={<FourOhFour />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}