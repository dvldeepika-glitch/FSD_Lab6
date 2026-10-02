import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.price || !formData.category) {
      alert("Please fill all fields");
      return;
    }

    onAddProduct({
      id: Date.now(),
      name: formData.name,
      price: formData.price,
      category: formData.category,
    });

    setFormData({
      name: "",
      price: "",
      category: "",
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleInputChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;