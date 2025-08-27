const CartWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          padding: "2rem",
          fontSize: "1.5rem",
          color: "#333",
        }}
      >
        🛒
      </span>
    </div>
  );
};

export default CartWidget;
