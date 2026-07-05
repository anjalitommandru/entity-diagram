function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#e6f7ff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#0077b6" }}>
        🌊 Rising Water Monitoring System
      </h1>

      <p style={{ fontSize: "18px", color: "#333" }}>
        Welcome to the Rising Water Monitoring Dashboard.
      </p>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          margin: "30px auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Current Water Level</h2>
        <h1 style={{ color: "green" }}>2.5 m</h1>
        <p>Status: Safe ✅</p>
      </div>
    </div>
  );
}

export default App;