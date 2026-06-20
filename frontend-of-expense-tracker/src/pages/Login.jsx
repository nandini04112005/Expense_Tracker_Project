import { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {

        setError('');

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            email: email,
            password: password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
        };

        const response = await fetch(
            "http://localhost:8080/login",
            requestOptions
        );

        if (response.ok) {
            const token = await response.text();

            localStorage.setItem("token", token);

            navigate("/dashboard");
        }
        else {
            const errorBody = await response.json();

            setError(errorBody.message);
        }
    }

    return (
        <div className="box">
            <h1>Welcome Back</h1>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
                Log In
            </button>

            <p>
                Don't have an account?
                <Link to="/register"> Register</Link>
            </p>

            {error && (
                <p className="error">
                    {error}
                </p>
            )}
        </div>
    );
}