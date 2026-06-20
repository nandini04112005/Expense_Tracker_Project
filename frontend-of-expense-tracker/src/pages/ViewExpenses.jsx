import './ViewExpenses.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewExpenses() {

    const navigate = useNavigate();

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses();
    }, []);

    const getExpenses = async () => {

        try {

            const token = localStorage.getItem("token");

            const myHeaders = new Headers();
            myHeaders.append(
                "Authorization",
                `Bearer ${token}`
            );

            const requestOptions = {
                method: "GET",
                headers: myHeaders
            };

            const response = await fetch(
                "http://localhost:8080/expenses",
                requestOptions
            );

            if (!response.ok) {
                throw new Error("Failed to fetch expenses");
            }

            const data = await response.json();

            setExpenses(data);

        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this expense?"
        );

        if (confirmDelete) {

            const updatedExpenses = expenses.filter(
                (expense) => expense.id !== id
            );

            setExpenses(updatedExpenses);

            alert("Expense deleted successfully!");
        }
    };

    return (
        <>
            <header>
                <nav className="view-nav">
                    <h1>All Expenses</h1>
                </nav>
            </header>

            <main className="view-main">

                {
                    expenses.map((expense) => (

                        <div
                            className="expense-item"
                            key={expense.id}
                        >

                            <h3>{expense.title}</h3>

                            <p>
                                Amount: ₹{expense.amount}
                            </p>

                            <p>
                                Category: {expense.category}
                            </p>

                            <p>
                                Date: {expense.date}
                            </p>

                            <button
                                onClick={() =>
                                    navigate(
                                        `/editExpense/${expense.id}`
                                    )
                                }
                            >
                                Edit
                            </button>

                            <button
                                onClick={() =>
                                    handleDelete(expense.id)
                                }
                            >
                                Delete
                            </button>

                        </div>

                    ))
                }

            </main>

        </>
    );
}