import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shally mittal</h1>
      <p style={styles.text}> Email: Shallymittal@gmail.com</p>
      <p style={styles.text}> Phone: +91-975663939</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default Home;