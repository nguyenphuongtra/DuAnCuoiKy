import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import UserManagement from "./UserManagement"; // Import UserManagement
import { productsData } from "../productsData";
import "./AdminPage.css";

function AdminPage() {
  const [products, setProducts] = useState(productsData);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewMode, setViewMode] = useState("products"); // State để quản lý chế độ xem

  // Hàm để chuyển đổi giữa chế độ quản lý sản phẩm và người dùng
  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const openProductForm = () => {
    setSelectedProduct(null);
    setIsFormVisible(true);
  };

  const openEditForm = (product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
    setSelectedProduct(null);
  };

  const saveProduct = (product) => {
    if (product.id) {
      const updatedProducts = products.map((p) =>
        p.id === product.id ? product : p
      );
      setProducts(updatedProducts);
    } else {
      const newProduct = { ...product, id: new Date().getTime() };
      setProducts((prevProducts) => [newProduct, ...prevProducts]);
    }
    closeForm();
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  return (
    <div className="admin-page">
      <h2>Quản lý Hệ thống</h2>
      <div className="toggle-buttons">
        <button onClick={() => toggleViewMode("products") } className="btn-qlsp">
          Quản lý Sản Phẩm
        </button>
        <button onClick={() => toggleViewMode("users")} className="btn-qlsp" >
          Quản lý Người Dùng
        </button>
      </div>

      {viewMode === "products" && (
        <>
          <button onClick={openProductForm} className="add-pro">Thêm Sản Phẩm</button>
          <ProductList
            products={products}
            onViewDetails={openEditForm}
            onDeleteProduct={deleteProduct}
          />
        </>
      )}

      {viewMode === "users" && <UserManagement />}
      
      {isFormVisible && (
        <div className="product-form-overlay">
          <ProductForm
            product={selectedProduct}
            onClose={closeForm}
            onSaveProduct={saveProduct}
          />
        </div>
      )}
    </div>
  );
}

export default AdminPage;
