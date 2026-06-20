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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/addExpense" element={<AddExpense />} />
         <Route path="/viewExpenses" element={<ViewExpenses />} />
         <Route path="/editExpense" element={<EditExpense />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
