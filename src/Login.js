import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic validation
        if (!username || !password) {
            setError('Both fields are required.');
            return;
        }

        try {
            // Send login request to the backend
            const response = await fetch('http://192.168.2.113/api/Auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful login (e.g., store token, redirect)
                localStorage.setItem('token', data.token);
                console.log('Login successful', data);
                // Redirect to a protected route or home page
                navigate('/dashboard');
            } else {
                // Handle login failure
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            console.error('Login error:', error);
        }
    };

    return(
        <div className="login-page">
        <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div> 
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="login-button">Login</button>
            {error && <p className="error">{error}</p>}
        </form>
        <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
    </div>
    );
}
export default Login;