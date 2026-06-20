import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddExpense.css";

export default function AddExpense() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async () => {

        const token = localStorage.getItem("token");

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const raw = JSON.stringify({
            title,
            amount,
            category,
            date,
            description
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
        };

        const response = await fetch(
            "http://localhost:8080/expenses",
            requestOptions
        );

        if (response.ok) {
            navigate("/dashboard");
        }
        else {
            alert("Failed to add expense");
        }
    };

    return(
        <>
            <main className="add-expense-main">

                <div className="expense-form">

                    <h1>Add Expense</h1>

                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                    <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />

                    <input
                        type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />

                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <button onClick={handleSubmit}> Add Expense </button>
                </div>
            </main>
        </>
    );
}