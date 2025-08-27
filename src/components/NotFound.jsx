import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "4rem 2rem",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#333",
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <h2
        style={{
          color: "#666",
          marginBottom: "2rem",
        }}
      >
        Página no encontrada
      </h2>
      <p
        style={{
          color: "#888",
          marginBottom: "2rem",
        }}
      >
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
