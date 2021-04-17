import React from "react";
import { Link } from "react-router-dom";

const styles = {
  color: "#000",
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "30px",
};

const NotFound = () => {
  return (
    <>
      <h1 style={styles}>Página não encontrada!</h1>
      <Link to="/">Ir para o catálago</Link>
    </>
  );
};

export default NotFound;
