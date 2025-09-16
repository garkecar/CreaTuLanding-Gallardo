import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { getProductById } from "../services/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getProductById(itemId);
      setProduct(data);
      setLoading(false);
    };
    fetchData();
  }, [itemId]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Cargando...</h2>;
  if (!product)
    return <h2 style={{ textAlign: "center" }}>Producto no encontrado</h2>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
