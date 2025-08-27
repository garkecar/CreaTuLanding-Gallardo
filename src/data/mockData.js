export const products = [
  {
    id: 1,
    name: "Smartphone Galaxy",
    price: 599,
    category: "electronics",
    description:
      "Smartphone de última generación con cámara de 108MP y pantalla AMOLED de 6.7 pulgadas.",
    image: "📱",
    stock: 15,
  },
  {
    id: 2,
    name: "Laptop Gaming",
    price: 1299,
    category: "electronics",
    description:
      "Laptop para gaming con procesador Intel i7, 16GB RAM y tarjeta gráfica RTX 4060.",
    image: "💻",
    stock: 8,
  },
  {
    id: 3,
    name: "Camiseta Deportiva",
    price: 29,
    category: "clothing",
    description:
      "Camiseta deportiva de alta calidad, transpirable y cómoda para entrenar.",
    image: "👕",
    stock: 25,
  },
  {
    id: 4,
    name: "Zapatillas Running",
    price: 89,
    category: "clothing",
    description:
      "Zapatillas para running con tecnología de amortiguación avanzada.",
    image: "👟",
    stock: 12,
  },
  {
    id: 5,
    name: "Auriculares Bluetooth",
    price: 149,
    category: "electronics",
    description:
      "Auriculares inalámbricos con cancelación de ruido y 30 horas de batería.",
    image: "🎧",
    stock: 20,
  },
  {
    id: 6,
    name: "Jeans Clásicos",
    price: 79,
    category: "clothing",
    description: "Jeans de corte clásico, cómodos y duraderos para uso diario.",
    image: "👖",
    stock: 18,
  },
];

export const categories = [
  { id: "electronics", name: "Electrónicos" },
  { id: "clothing", name: "Ropa" },
];

// Simular llamada a API
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category === categoryId
      );
      resolve(filteredProducts);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === parseInt(id));
      resolve(product);
    }, 1000);
  });
};
