import { useNavigate } from 'react-router-dom';
import './EditExpense.css';

export default function EditExpense() {


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
                        value="Food"
                    />

                    <input
                        type="number"
                        placeholder="Amount"
                        value="450"
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value="Food"
                    />

                    <input
                        type="date"
                        value="2026-06-20"
                    />

                    <textarea>
Lunch with friends
                    </textarea>

                    <button className="update-btn" >
                        Update Expense
                    </button>

                </div>

            </main>
        </>
    );
}