import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
    const navigate=useNavigate()
    return (
        <>
            <header>
                <nav className="dashboard-nav">
                    <h1>Expense Tracker</h1>
                    <button>Log Out</button>
                </nav>
            </header>

            <main className="dashboard-main">

             
                <div className="welcome">
                    <h2>Welcome Back!</h2>
                    <p>Manage your expenses efficiently.</p>
                </div>

                <div className="card-items">

                    <div className="card">
                        <h3>Total Expenses</h3>
                        <h5>₹15000</h5>
                    </div>

                    <div className="card">
                        <h3>Monthly Expenses</h3>
                        <h5>₹5000</h5>
                    </div>

                    <div className="card">
                        <h3>Transactions</h3>
                        <h5>10</h5>
                    </div>

                </div>

                <h2 className="recent-heading">Recent Expenses</h2>

                <div className="recent-expenses">

                    <div className="expense-card">
                        <h3>Food</h3>
                        <p>₹450</p>
                    </div>

                    <div className="expense-card">
                        <h3>Travel</h3>
                        <p>₹4500</p>
                    </div>

                    <div className="expense-card">
                        <h3>Shopping</h3>
                        <p>₹1000</p>
                    </div>

                    <div className="expense-card">
                        <h3>Entertainment</h3>
                        <p>₹800</p>
                    </div>

                </div>

              
                <button className="add-btn"  onClick={() => navigate("/addExpense")}>
                    + Add Expense
                </button>

            </main>

            <footer className="dashboard-footer">
                <p>Expense Tracker © 2026</p>
            </footer>
        </>
    );
}