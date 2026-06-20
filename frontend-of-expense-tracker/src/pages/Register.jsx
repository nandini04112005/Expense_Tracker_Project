import { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate  ()
    const [error, setError] = useState('');

    const handleRegister = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": username,
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        const response = await fetch("http://localhost:8080/register", requestOptions)
        const body = await response.json()

        if (!response.ok) {
            console.log(body)
            setError(body.message)
            throw new Error(body.message, response.status)
        }           
        navigate("/login")
    }
    return <>
        <div className="box">
            <h1>Welcome To ExpenseTracker</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Sign Up</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            <p className='error'>{error}</p>
        </div>
    </>

}
