import React from "react";
import "./NewsSection.css";
import tin1 from "../assets/images/tin1.jpg";
import tin2 from "../assets/images/tin2.jpg";
import tin3 from "../assets/images/tin3.jpg";
import tin4 from "../assets/images/tin4.jpg";

const NewsSection = () => {
const newsItems = [
    {
        id: 1,
        title: "Công nghệ khiến smartphone Trung Quốc vượt mặt iPhone...",
        image: tin1, // Thay bằng URL ảnh thực
        description: "Những cải tiến vượt bậc khiến smartphone Trung Quốc chiếm ưu thế.",
    },
    {
        id: 2,
        title: "Giải mã các ký tự đằng sau tên chip AMD...",
        image: tin2,
        description: "Hướng dẫn tìm hiểu ý nghĩa các ký tự trên bộ vi xử lý AMD.",
    },
    {
        id: 3,
        title: "Đánh giá hiệu năng OPPO Find X8...",
        image: tin3,
        description: "Smartphone Dimensity 9400 mạnh mẽ với giá cả hợp lý.",
    },
    {
        id: 4,
        title: "Đánh giá JMGO PicoFlix...",
        image: tin4,
        description: "Máy chiếu di động nhỏ gọn, tiện lợi cho mọi gia đình.",
    },
];

return (
    <div className="news-section">
        <h2 className="section-title">Tin Công Nghệ</h2>
        <div className="news-grid">
        {newsItems.map((item) => (
        <div key={item.id} className="news-card">
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
                <a href="https://vnexpress.net/harmonyos-vuot-ios-tai-trung-quoc-4758747.html"><h3 className="news-title">{item.title}</h3></a>
                <p className="news-description">{item.description}</p>
            </div>
        </div>
        ))}
        </div>
    </div>
    );
};

export default NewsSection;