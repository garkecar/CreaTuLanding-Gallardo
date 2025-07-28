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
