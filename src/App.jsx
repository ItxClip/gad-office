import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AttendancePage from './pages/AttendancePage'
import GenderPage from './pages/GenderPage'
import EventsPage from './pages/TotalEventsPage'
import ErrorPage from './pages/404'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/attendace-graph" element={<AttendancePage/>}/>
          <Route path="/gender-graph" element={<GenderPage/>}/>
          <Route path="/events-graph" element={<EventsPage/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
