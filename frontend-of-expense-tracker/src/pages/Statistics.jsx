import "./Statistics.css";
import { useEffect, useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

export default function Statistics() {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses();
    }, []);

    const getExpenses = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:8080/expenses",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            setExpenses(data);

        }
        catch (error) {
            console.log(error);
        }
    };

    const categoryTotals = {};

    expenses.forEach((expense) => {

        if (categoryTotals[expense.category]) {

            categoryTotals[expense.category] += expense.amount;

        } else {

            categoryTotals[expense.category] = expense.amount;

        }

    });

    const chartData = Object.keys(categoryTotals).map(category => ({
        name: category,
        value: categoryTotals[category]
    }));

    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#AF19FF",
        "#FF4560"
    ];

    return (
        <>
            <header>
                <nav className="stats-nav">
                    <h1>Expense Statistics</h1>
                </nav>
            </header>

            <main className="stats-main">

                <PieChart width={500} height={400}>

                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        dataKey="value"
                        label
                    >

                        {
                            chartData.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))
                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </main>

        </>
    );
}