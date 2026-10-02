function ProductCard({
  name,
  price,
  category,
  onAddToCart,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className="product-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="product-icon">🛍️</div>

      <h3>{name}</h3>

      <p className="price">${price}</p>

      <p className="category">{category}</p>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;