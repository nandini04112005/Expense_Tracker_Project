import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate();

    const username = localStorage.getItem("username");

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses();
    }, []);

    const getExpenses = async () => {

        const token = localStorage.getItem("token");

        const myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            `Bearer ${token}`
        );

        const response = await fetch(
            "http://localhost:8080/expenses",
            {
                method: "GET",
                headers: myHeaders
            }
        );

        const data = await response.json();

        setExpenses(data);
    };

    const totalExpenses = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    const transactions = expenses.length;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const monthlyExpenses = expenses
        .filter((expense) => {

            const expenseDate = new Date(expense.date);

            return (
                expenseDate.getMonth() === currentMonth &&
                expenseDate.getFullYear() === currentYear
            );
        })
        .reduce(
            (sum, expense) => sum + expense.amount,
            0
        );

    const recentExpenses = expenses
        .slice(-3)
        .reverse();

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("username");

        navigate("/login");
    };

    return (
        <>
            <header>
                <nav className="dashboard-nav">

                    <h1>Expense Tracker</h1>

                    <button
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </nav>
            </header>

            <main className="dashboard-main">

                <div className="welcome">

                    <h2>
                        Welcome Back!
                    </h2>

                    <p>
                        Manage your expenses efficiently.
                    </p>

                </div>

                <div className="card-items">

                    <div className="card">

                        <h3>Total Expenses</h3>

                        <h5>
                            ₹{totalExpenses}
                        </h5>

                    </div>

                    <div className="card">

                        <h3>Monthly Expenses</h3>

                        <h5>
                            ₹{monthlyExpenses}
                        </h5>

                    </div>

                    <div className="card">

                        <h3>Transactions</h3>

                        <h5>
                            {transactions}
                        </h5>

                    </div>

                </div>

                <h2 className="recent-heading">
                    Recent Expenses
                </h2>

                <div className="recent-expenses">

                    {
                        recentExpenses.map((expense) => (

                            <div
                                className="expense-card"
                                key={expense.id}
                            >

                                <h3>
                                    {expense.title}
                                </h3>

                                <p>
                                    ₹{expense.amount}
                                </p>

                            </div>

                        ))
                    }

                </div>

                <div className="dashboard-buttons">

                    <button
                        className="add-btn"
                        onClick={() =>
                            navigate("/addExpense")
                        }
                    >
                        + Add Expense
                    </button>

                    <button
                        className="add-btn"
                        onClick={() =>
                            navigate("/viewExpenses")
                        }
                    >
                        View All Expenses
                    </button>
                    <button
                        className="add-btn"
                        onClick={() => navigate("/statistics")}
                    >
                        Expense Statistics
                    </button>

                </div>

            </main>

            <footer className="dashboard-footer">

                <p>
                    Expense Tracker © 2026
                </p>

            </footer>
        </>
    );
}