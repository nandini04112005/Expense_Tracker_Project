import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddExpense from './pages/AddExpense.jsx'
import ViewExpenses from './pages/ViewExpenses';
import EditExpense from './pages/EditExpense.jsx'
import Protected from './components/Protected';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Protected> <Dashboard /> </Protected>}/>
         <Route path="/addExpense" element={<Protected><AddExpense /></Protected>} />
         <Route path="/viewExpenses" element={<Protected><ViewExpenses /></Protected>} />
         <Route path="/editExpense/:id" element={<Protected><EditExpense /></Protected>} />
         
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
