import React, { useEffect, useState} from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");
  const categories  = ["All", "food", "transport", "utilities", "entertainment", "health", "other"];
  const fetchTransactions = async () => {
    try { setError("");
      const url = selectedCategory === "All"
      ? "http://localhost:3000/api/transactions" 
      : `http://localhost:3000/api/transactions?category=${selectedCategory}`;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setTransactions(data);
    } catch (err) {
    setError("Error fething transactions")
    }
};
    useEffect(() => {
      fetchTransactions();
    }, [selectedCategory]);

    const totalSpentByCategory = transactions.reduce((acc, txn) => {
      const amount = parseFloat(txn.amount);

      if (amount < 0 ) {
        acc[txn.category] = (acc[txn.category] || 0) + amount;
      }
      return acc;
    }, {});

    return (
      <div>
        <h2> Transactions </h2>
        <select value={selectedCategory}onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}> {cat}</option>))}
        </select>

        { error && <p style={{ color: "red"}}>{error}</p>} 

          <table border="1">
            <thead>
              <tr>
                <th>description</th>
                <th>amount</th>
                <th>category</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id}>
                  <td>{txn.description}</td>
                  <td>{txn.amount}</td>
                  <td>{txn.category}</td>
                  <td>{txn.status}</td>
                </tr>
                ))}
            </tbody>
          </table>

          <div>
            <h3>
              Total Spent: 
              </h3>
              {Object.keys(totalSpentByCategory).map((cat) => <p key={cat}>
                {cat}: {totalSpentByCategory[cat].toFixed(2)}
              </p>)}
          </div>
      </div>
      );
}

export default App;