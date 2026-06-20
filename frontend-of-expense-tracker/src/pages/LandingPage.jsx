import { useNavigate } from "react-router-dom";

import './LandingPage.css'
export default function LandingPage() {
    const navigate = useNavigate()
    const handleRegister = () => {
       navigate("/register");
    }
     const handleLogin = () => {

            navigate("/login");
     }
      
    return <>
    <div className="landing">
        <nav>
            <header>
                <h1>Welcome To Expense Tracker</h1>
                <p>Track your expenses & Manage your finances efficiently.</p>

            </header>
            <main>
                <button onClick={handleRegister}>Register</button>
                <button onClick={handleLogin}>Login</button>
            </main>
            <footer>
                <p>Expense Tracker © 2026
                    Built with React and Spring Boot</p>
            </footer>
        </nav>
        </div>



    </>
}