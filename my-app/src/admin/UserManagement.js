import React, { useState, useEffect } from "react";
import "./AdminPage.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập gọi API
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Nguyen Van A", email: "a@gmail.com" },
        { id: 2, name: "Tran Thi B", email: "b@gmail.com" },
        { id: 3, name: "Tran Thi C", email: "c@gmail.com" },
        { id: 4, name: "Tran Thi D", email: "d@gmail.com" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const deleteUser = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }
  };

  if (loading) {
    return <div>Đang tải danh sách người dùng...</div>;
  }

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user.id)} className="btn-xoa">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
