import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ExpenseList from "./expense-list/components/ExpenseList";
import ExpenseFilter from "./expense-list/components/ExpenseFilter";
import ExpenseForm from "./expense-list/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50, category: "Food" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 75,
      category: "Utilities",
    },
    { id: 3, description: "Gym Membership", amount: 30, category: "Health" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="App">
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDeleteExpense={(id) =>
          setExpenses(expenses.filter((e) => e.id !== id))
        }
      />
    </div>
  );
}

export default App;
