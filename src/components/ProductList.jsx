import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 999,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Mouse",
      price: 29,
      category: "Accessories",
    },
    {
      id: 3,
      name: "Keyboard",
      price: 79,
      category: "Accessories",
    },
  ]);

  const [cartCount, setCartCount] = useState(0);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <ProductForm onAddProduct={handleAddProduct} />

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            onAddToCart={handleAddToCart}
            onMouseEnter={() =>
              console.log(`${product.name} hovered`)
            }
            onMouseLeave={() =>
              console.log(`${product.name} mouse left`)
            }
          />
        ))}
      </div>

      <div className="cart-counter">
        🛒 Cart Items: {cartCount}
      </div>
    </div>
  );
}

export default ProductList;