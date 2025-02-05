import React, { useState, useEffect } from "react";
import DataDisplay from "./components/DataDisplay";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://react-backend-alb-1158815214.eu-north-1.elb.amazonaws.com/api/data")
      .then((response) => response.json())
      .then((data) =>{ setData(data?.data)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>React Frontend with Flask Backend</h1>
      <DataDisplay data={data} />
    </div>
  );
}

export default App;
