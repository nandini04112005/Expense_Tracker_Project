import "./EditExpense.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditExpense() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        getExpense();
    }, []);

    const getExpense = async () => {

        const token = localStorage.getItem("token");

        const myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            `Bearer ${token}`
        );

        const response = await fetch(
            `http://localhost:8080/expenses/${id}`,
            {
                method: "GET",
                headers: myHeaders
            }
        );

        const expense = await response.json();

        setTitle(expense.title);
        setAmount(expense.amount);
        setCategory(expense.category);
        setDate(expense.date);
        setDescription(expense.description);
    };

    const handleUpdate = async () => {

        const token = localStorage.getItem("token");

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
            "Authorization",
            `Bearer ${token}`
        );

        const raw = JSON.stringify({
            title,
            amount,
            category,
            date,
            description
        });

        const response = await fetch(
            `http://localhost:8080/expenses/${id}`,
            {
                method: "PUT",
                headers: myHeaders,
                body: raw
            }
        );

        if (response.ok) {
            alert("Expense Updated Successfully!");
            navigate("/viewExpenses");
        }
        else {
            alert("Failed to update expense");
        }
    };

    return (
        <>
            <header>
                <nav className="edit-nav">
                    <h1>Edit Expense</h1>
                </nav>
            </header>

            <main className="edit-main">

                <div className="edit-form">

                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button
                        className="update-btn"
                        onClick={handleUpdate}
                    >
                        Update Expense
                    </button>

                </div>

            </main>
        </>
    );
}