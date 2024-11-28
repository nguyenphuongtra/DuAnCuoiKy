// ProductForm.js
import React, { useState } from "react";

function ProductForm({ product, onClose, onSaveProduct }) {
  const [name, setName] = useState(product ? product.name : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [description, setDescription] = useState(product ? product.description : "");
  const [image, setImage] = useState(product ? product.image : "");
  const [category, setCategory] = useState(product ? product.category : "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !description || !image || !category) {
      alert("Vui lòng điền đầy đủ thông tin sản phẩm!");
      return;
    }
    const newProduct = {
      id: product ? product.id : null,
      name,
      price,
      description,
      image,
      category,
    };
    onSaveProduct(newProduct);
  };

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Giá bán:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Mô tả:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Ảnh sản phẩm:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
          {image && <img src={image} alt="Product" style={{ width: 100, height: 100 }} />}
        </div>

        <div>
          <label>Danh mục:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Lưu sản phẩm</button>
          <button type="button" onClick={onClose}>
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;