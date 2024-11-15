import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import "../assets/Style.css"
import images from "../assets/images/Iphone13.jpg"
import Shirt from "../assets/images/Iphone14.jpg"
import Watch from "../assets/images/iphonePlus.jpg"
import Phone from "../assets/images/Iphone16.webp";
import Shoes from "../assets/images/Samsung2.webp";
import Samsung1 from "../assets/images/Samsung1.webp"
import Samsung3 from "../assets/images/Samsung3.webp"
import Samsung4 from "../assets/images/Samsung4.webp"
import Maytinh1 from "../assets/images/Maytinh1.webp"
import Maytinh2 from "../assets/images/Maytinh2.webp"
import Maytinh3 from "../assets/images/Maytinh3.webp"
import Maytinh4 from "../assets/images/Maytinh4.webp"
import Maytinh5 from "../assets/images/Maytinh5.webp"
import Maytinh6 from "../assets/images/Maytinh6.webp"
import Maytinh7 from "../assets/images/Maytinh7.webp"
import Maytinh8 from "../assets/images/Maytinh8.webp"
import Footer from '../footer/Footer';
const products= [
    { id: 1,  name: 'Iphone 13',price: 3000, describe:'Category Electronics' , image:images,quantity: 1,description: 'A smartphone with latest features'},
    { id: 2,  name: 'Iphone 14',price: 3000, describe:'Category Clothing', image:Shirt, quantity: 1,description: 'The Premium Round Neck Shirt from Craft Clothing is a testament to comfort and quality' },
    { id: 3,  name: 'Iphone 12',price: 3000, describe:'Category Accessones', image:Watch, quantity: 1,description: 'A Watch with latest features' },
    { id: 4,  name: 'Iphone 16',price: 3000, describe:'Category Electronics', image:Phone, quantity: 1,description: 'A Phone with latest features'},
    { id: 5,  name: 'Samsung Galaxy S24',price: 3000, describe: 'Smart Phone', category: 'Clothing', quantity: 1, image: Shoes, description: ' phiên bản 512GB được trang bị con chip Exynos 2400 kết hợp cùng dung lượng RAM 12GB cho hiệu năng đáng kinh ngạc. Cụm camera với cảm biến chính 50MP đảm bảo mang tới những bức ảnh sống động và khả năng quay video Super HDR đỉnh cao. Màn hình Dynamic AMOLED 2X cùng độ phân giải Quad-HD+ với độ sáng 2.600 nit hỗ trợ mang lại khả năng hiển thị vượt trội'},
    { id: 6,  name: 'Samsung Galaxy S23',price: 3000, describe: 'Smart Phone', category: 'Electronics', quantity: 1, image: Samsung1,description: ' 12GB 512GB tạo nên đột phá mạnh mẽ về mặt hiệu năng khi được trang bị vi xử lý Snapdragon 8 Gen 2 vượt trội cùng 12GB bộ nhớ RAM. Chất lượng hiển thị siêu sắc nét trên S23 Ultra tới từ tầm nền Dynamic AMOLED 2X 120Hz thế hệ mới. Bên cạnh đó, smartphone này còn sở hữu cụm camera cao cấp với độ rõ nét đạt tới 200MP. Viên pin 5000mAh cùng sạc nhanh 45W giúp nâng cao thời lượng sử dụng lên một tầm cao mới'},
    { id: 7,  name: 'Samsung Galaxy S24+',price: 3000, describe: 'Smart Phone', category: 'Clothing', quantity: 1, image: Samsung3,description:' 12GB 512GB được trang màn hình QHD+ Dynamic AMOLED 2X 6,8 inch với độ phân giải (3120 x 1440) và tốc độ làm mới 120Hz. Bên cạnh đó là chip Snapdragon 8 Gen 3 for Galaxy và RAM 12GB siêu ấn tượng. Đặc biệt, cụm camera sau với 4 camera có cảm biến chính 200MP, camera tele 50MP/10MP, camera góc siêu rộng 12MP cùng camera selfie 12MP,... Tất cả sẽ giúp bạn có những trải nghiệm ấn tượng, cực chất trên siêu phẩm này.' },
    { id: 8,  name:  'Galaxy Z Flip 5',price: 3000, describe: 'Smart Phone', category: 'Accessories', quantity: 1, image: Samsung4,description:' 5 có màn chính hình rộng 6.7 inch, với độ phân giải Full HD+ (1080 x 2636 Pixels), cụm camera trước 10MP và camera sau 12MP, rõ đến từng chi tiết. Cấu hình của sản phẩm mạnh mẽ nhờ hệ điều hành Android 10, con chipset mạnh mẽ Snapdragon 8 gen 2, với chip đồ họa tạo hình ảnh hiển thị hàng triệu màu sắc khác nhau. Sản phẩm có RAM 8GB, bộ nhớ trong 512GB.' },
    { id: 9,  name: 'Màn hình LG UltraGear', price: 2500, describe: 'Smart Phone', category: 'Electronics', image: Maytinh1, quantity: 1, description: 'Samsung Galaxy Z Flip 5 có thiết kế màn hình rộng 6.7 inch và độ phân giải Full HD+ (1080 x 2640 Pixels), dung lượng RAM 8GB, bộ nhớ trong 256GB. Màn hình Dynamic AMOLED 2X của điện thoại này hiển thị rõ nét và sắc nét, mang đến trải nghiệm ấn tượng khi sử dụng.' },
    { id: 10, name: 'Màn hình Monitor Xiaomi', price: 3200,describe: 'Smart Phone', category: 'Electronics', image: Maytinh2, quantity: 1 ,description: 'Màn hình Monitor Xiaomi 27 inch A27i ELA5345EU có độ phân giải Full HD (1920 x 1080) cùng tần số quét lên đến 100 Hz đem lại trải nghiệm hình ảnh mượt mà. Mẫu màn hình 27 inch sử dụng công nghệ tấm nền IPS cho màu sắc chân thực, góc nhìn rộng 178 độ, đáp ứng chuẩn màu sắc cao với 99% sRGB và độ sai lệch màu Delta E dưới 2, phù hợp cho công việc thiết kế đòi hỏi chất lượng cao. Các cổng kết nối HDMI 2.0 và DisplayPort giúp kết nối đa thiết bị dễ dàng và linh hoạt.'},
    { id: 11, name: 'Màn hình LG UltraWide',price: 2000, describe: 'Smart Phone', category: 'Electronics', image: Maytinh3, quantity: 1,description:'Màn hình gaming LG ULTRAGEAR 24GS50F-B 24 inch sở hữu màn hình FHD cùng tần số làm mới 180Hz, tốc độ phản hồi 1ms MBR ấn tượng. Màn hình với công nghệ AMD FreeSync hỗ trợ mang lại trải nghiệm hình ảnh mượt mà. Cùng với đó màn hình còn sở hữu công nghệ tối ưu chơi game như chế độ ổn định màu đen, bộ đếm FPS hay đồng bộ hành động.' },
    { id: 12, name: 'Màn hình Samsung Odyssey',price: 3500, describe: 'Smart Phone', category: 'Electronics', image: Maytinh4, quantity: 1,description:'Màn hình gaming LG ULTRAGEAR 24GS50F-B 24 inch sở hữu màn hình FHD cùng tần số làm mới 180Hz, tốc độ phản hồi 1ms MBR ấn tượng. Màn hình với công nghệ AMD FreeSync hỗ trợ mang lại trải nghiệm hình ảnh mượt mà. Cùng với đó màn hình còn sở hữu công nghệ tối ưu chơi game như chế độ ổn định màu đen, bộ đếm FPS hay đồng bộ hành động.' },
    { id: 13, name: 'Màn hình MSI Pro MP245V',price: 2299, describe: 'Smart Phone', category: 'Electronics', image: Maytinh5 , quantity: 1,description:'Màn hình gaming LG ULTRAGEAR 24GS50F-B 24 inch sở hữu màn hình FHD cùng tần số làm mới 180Hz, tốc độ phản hồi 1ms MBR ấn tượng. Màn hình với công nghệ AMD FreeSync hỗ trợ mang lại trải nghiệm hình ảnh mượt mà. Cùng với đó màn hình còn sở hữu công nghệ tối ưu chơi game như chế độ ổn định màu đen, bộ đếm FPS hay đồng bộ hành động.'},
    { id: 14, name: 'Màn hình Xiaomi Monitor',price: 1900, describe: 'Smart Phone', category: 'Electronics', image: Maytinh6 , quantity: 1,description:'Màn hình gaming LG ULTRAGEAR 24GS50F-B 24 inch sở hữu màn hình FHD cùng tần số làm mới 180Hz, tốc độ phản hồi 1ms MBR ấn tượng. Màn hình với công nghệ AMD FreeSync hỗ trợ mang lại trải nghiệm hình ảnh mượt mà. Cùng với đó màn hình còn sở hữu công nghệ tối ưu chơi game như chế độ ổn định màu đen, bộ đếm FPS hay đồng bộ hành động.'},
    { id: 15, name: 'Màn hình E-Dra',price: 2900, describe: 'Smart Phone', category: 'Electronics', image: Maytinh7, quantity: 1 ,description:'Màn hình gaming LG ULTRAGEAR 24GS50F-B 24 inch sở hữu màn hình FHD cùng tần số làm mới 180Hz, tốc độ phản hồi 1ms MBR ấn tượng. Màn hình với công nghệ AMD FreeSync hỗ trợ mang lại trải nghiệm hình ảnh mượt mà. Cùng với đó màn hình còn sở hữu công nghệ tối ưu chơi game như chế độ ổn định màu đen, bộ đếm FPS hay đồng bộ hành động.'},
    { id: 16, name:  'Màn hình Viewsonic',price: 9999, describe: 'Smart Phone', category: 'Electronics', image: Maytinh8, quantity: 1 ,description:'Màn hình gaming LG ULTRAGEAR 24GS50F-B 24 inch sở hữu màn hình FHD cùng tần số làm mới 180Hz, tốc độ phản hồi 1ms MBR ấn tượng. Màn hình với công nghệ AMD FreeSync hỗ trợ mang lại trải nghiệm hình ảnh mượt mà. Cùng với đó màn hình còn sở hữu công nghệ tối ưu chơi game như chế độ ổn định màu đen, bộ đếm FPS hay đồng bộ hành động.'},
  ];
function ProductDetail({addToCart}) {
    const {id} = useParams();
    const product = products.find((p) => p.id === parseInt(id))
    const navigate = useNavigate();      
    const handleBackToHome = () => {
      navigate('/')
    }
    const handleAddToCart = () => {
      addToCart(product);
      navigate('/cart')
    }
  return (
    <div>
      <div className="product-detail">
        <h1>{product.describe}</h1>
        <img src={product.image} alt={product.name} className='image-productDetail' />
        <h2>{product.name}</h2>
        <p>{product.name}{product.description}</p>
        <div className="btn-productdetail">
          <button className='btn-backtohome' onClick={handleBackToHome}><i class="fa-sharp fa-solid fa-arrow-left"></i>  Back to home</button>
          <button onClick={handleAddToCart} className='btn-back'><i class="fa-solid fa-cart-shopping"></i>  Add to Cart</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetail
