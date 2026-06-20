import './ViewExpenses.css';
import { useNavigate } from "react-router-dom";

export default function ViewExpenses() {
    const navigate=useNavigate()
    return (
        <>
            <header>
                <nav className="view-nav">
                    <h1>All Expenses</h1>
                </nav>
            </header>

            <main className="view-main">

                <div className="expense-item">
                    <h3>Food</h3>
                    <p>Amount: ₹450</p>
                    <p>Category: Food</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>

                <div className="expense-item">
                    <h3>Travel</h3>
                    <p>Amount: ₹1200</p>
                    <p>Category: Travel</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>

                <div className="expense-item">
                    <h3>Shopping</h3>
                    <p>Amount: ₹2500</p>
                    <p>Category: Shopping</p>
                    <button  onClick={() => navigate("/editExpense")}>Edit</button>
                    <button>Delete</button>
                </div>

            </main>
        </>
    );
}