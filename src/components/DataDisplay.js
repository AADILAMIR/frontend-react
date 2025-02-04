import React from "react";

function DataDisplay({ data }) {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>MongoDB Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h2>Redis Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataDisplay;