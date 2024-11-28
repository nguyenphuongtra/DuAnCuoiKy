import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'

const Introduce = () => {
  const navigate = useNavigate(); 

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="introduce-container">
      <h1>Giới thiệu về Thương Mại Điện Tử</h1>

      <section className="section">
        <h5>1. Khái niệm về thương mại điện tử</h5>
        <p>
          Thương mại điện tử (E-commerce) là hình thức giao dịch mua bán hàng hóa, dịch vụ thông qua Internet. 
          Các giao dịch này có thể diễn ra giữa các cá nhân, tổ chức với nhau thông qua các nền tảng trực tuyến như 
          Amazon, eBay, Shopee, Lazada, hay các cửa hàng trực tuyến của các doanh nghiệp lớn.
        </p>
      </section>

      <section className="section">
        <h5>2. Các hình thức thương mại điện tử phổ biến</h5>
        <p>
          Các mô hình chính của thương mại điện tử bao gồm B2B (Business to Business), B2C (Business to Consumer), 
          C2C (Consumer to Consumer), và C2B (Consumer to Business). Mỗi mô hình này phục vụ những đối tượng và nhu cầu khác nhau, 
          tạo ra sự đa dạng trong các giao dịch thương mại.
        </p>
      </section>

      <section className="section">
        <h5>3. Lợi ích của thương mại điện tử đối với người tiêu dùng</h5>
        <ul>
          <li><strong>Mua sắm tiện lợi:</strong> Người tiêu dùng có thể mua sắm 24/7 mà không cần phải đến cửa hàng vật lý, chỉ cần có kết nối Internet.</li>
          <li><strong>So sánh giá cả và sản phẩm:</strong> Người dùng dễ dàng so sánh các sản phẩm, dịch vụ từ nhiều nhà cung cấp khác nhau, từ đó tìm ra lựa chọn tốt nhất.</li>
          <li><strong>Đánh giá và nhận xét:</strong> Nền tảng thương mại điện tử cho phép người tiêu dùng đánh giá và đưa ra nhận xét về sản phẩm, giúp cải thiện quyết định mua hàng.</li>
        </ul>
      </section>

      <section className="section">
        <h5>4. Lợi ích đối với doanh nghiệp</h5>
        <p>
          Thương mại điện tử giúp các doanh nghiệp, đặc biệt là các công ty nhỏ và vừa, có thể tiếp cận khách hàng toàn cầu mà không cần đầu tư quá nhiều vào cơ sở vật chất. 
          Các doanh nghiệp có thể giảm chi phí vận hành và mở rộng thị trường một cách hiệu quả.
        </p>
      </section>

      <section className="section">
        <h5>5. Các thách thức trong thương mại điện tử</h5>
        <ul>
        <li><strong>Bảo mật thông tin:</strong> Giao dịch trực tuyến yêu cầu người dùng cung cấp thông tin cá nhân và tài chính, do đó vấn đề bảo mật rất quan trọng.</li>
          <li><strong>Chất lượng sản phẩm và dịch vụ:</strong> Người tiêu dùng không thể kiểm tra sản phẩm trực tiếp, dẫn đến việc có thể gặp phải sản phẩm không giống như mô tả hoặc không đạt kỳ vọng.</li>
          <li><strong>Vận chuyển hàng hóa:</strong> Việc giao nhận hàng hóa từ người bán đến người mua có thể gặp khó khăn, đặc biệt là về thời gian giao hàng và tình trạng sản phẩm khi đến tay người tiêu dùng.</li>
        </ul>
      </section>

      <section className="section">
        <h5>6. Giải pháp cho các thách thức</h5>
        <p>
          Các nền tảng thương mại điện tử hiện nay áp dụng nhiều biện pháp bảo mật tiên tiến như mã hóa SSL và xác thực hai yếu tố (2FA) để đảm bảo an toàn cho các giao dịch. 
          Đồng thời, các chính sách trả hàng và đổi hàng cũng được áp dụng để giảm thiểu sự không hài lòng của khách hàng. 
          Các công nghệ mới như thực tế ảo (VR) và thực tế tăng cường (AR) đang được tích hợp vào các trang web để người tiêu dùng có thể xem thử sản phẩm trước khi mua.
        </p>
      </section>

      <section className="section">
        <h5>7. Các vấn đề pháp lý trong thương mại điện tử</h5>
        <p>
          Thương mại điện tử cũng phải đối mặt với các vấn đề về pháp lý, bao gồm bảo vệ quyền lợi người tiêu dùng, bảo mật dữ liệu cá nhân và các quy định về thuế. 
          Các quốc gia và khu vực đã và đang xây dựng các chính sách pháp lý để điều chỉnh hoạt động thương mại điện tử.
        </p>
      </section>

      <section className="section">
        <h5>8. Tương lai của thương mại điện tử</h5>
        <p>
          Thương mại điện tử sẽ tiếp tục phát triển mạnh mẽ trong tương lai nhờ sự tiến bộ không ngừng của công nghệ. 
          Cùng với sự chuyển mình của xã hội và thay đổi thói quen tiêu dùng, thương mại điện tử hứa hẹn sẽ trở thành xu hướng chủ đạo trong nền kinh tế toàn cầu.
        </p>
      </section>

      <section className="section">
        <h5>9. Kết luận</h5>
        <p>
          Thương mại điện tử đang ngày càng chiếm ưu thế trong nền kinh tế hiện đại và có ảnh hưởng sâu rộng đến mọi lĩnh vực trong xã hội.Với sự cải tiến không ngừng của công nghệ và chính sách quản lý, thương mại điện tử sẽ tiếp tục là một yếu tố quan trọng thúc đẩy sự phát triển của nền kinh tế toàn cầu.
        </p>
      </section>

      <button className="back-home-button" onClick={handleBackToHome}>
        Quay lại Trang Chủ
      </button>
    </div>
  );
};

export default Introduce;