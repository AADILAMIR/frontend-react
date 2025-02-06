import React, { useState, useEffect } from "react";
import DataDisplay from "./components/DataDisplay";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const backendUrl = "http://dev-react-python-93760522.eu-north-1.elb.amazonaws.com/api";

  // Fetch Data from Backend
  useEffect(() => {
    fetch(`${backendUrl}/data`)
      .then((response) => response.json())
      .then((data) => setData(data?.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to Add Data to Backend (POST Request)
  const handleAddData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/add-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "John Doe",
          email: "johndoe@example.com",
          age: Math.floor(Math.random() * 50) + 20, // Random age
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Data added successfully!");
        setData((prevData) => [...(prevData || []), result.data]); // Update UI
      } else {
        alert("Failed to add data: " + result.error);
      }
    } catch (error) {
      console.error("Error adding data:", error);
      alert("Error adding data. Check console for details.");
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>React Frontend with Flask Backend</h1>

      {/* Add Data Button */}
      <button
        onClick={handleAddData}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px",
          backgroundColor: loading ? "#ccc" : "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {loading ? "Adding..." : "Add Random Data"}
      </button>

      {/* Data Display Component */}
      <DataDisplay data={data} />
    </div>
  );
}

export default App;
