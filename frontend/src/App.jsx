import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8005/api/hello")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then(setData)
      .catch(() => setError("Could not connect to Node.js API."));
  }, []);

  return (
    <main>
      <h1>React + Node.js DevOps Lab</h1>

      {data && (
        <>
          <h2>{data.message}</h2>
          <p>{data.application}</p>
          <p>Status: {data.status}</p>
        </>
      )}

      {error && <p>{error}</p>}
      {!data && !error && <p>Connecting to backend...</p>}
    </main>
  );
}

export default App;
