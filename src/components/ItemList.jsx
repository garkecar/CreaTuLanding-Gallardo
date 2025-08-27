import Item from "./Item";

const ItemList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h3>No se encontraron productos en esta categoría</h3>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "2rem",
        padding: "1rem",
      }}
    >
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
