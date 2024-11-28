// ProductList.js
import React from "react";

const ProductList = ({ products, onViewDetails, onDeleteProduct }) => {
  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Hình Ảnh</th>
            <th>Tên Sản Phẩm</th>
            <th>Giá</th>
            <th>Mô Tả</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  width="50"
                  height="50"
                />
              </td>
              <td>{product.name}</td>
              <td>{product.price} USD</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => onViewDetails(product)} className="btn-xoa">Sửa</button>
                <button onClick={() => onDeleteProduct(product.id)} className="btn-del">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;