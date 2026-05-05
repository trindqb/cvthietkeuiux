# Tạo prompt để tạo UI/UX
## Bước thứ 1: Tôi yêu cầu chatGPT viết một bộ prompt để tạo UI/UX như sau:
Bạn là một nhà thiết kế UI/UX chuyên nghiệp. Tôi cần một bộ promt để tạo UI/UX chỉ cần html và css. Tôi là một nhà thiết kế web chuyên nghiệp. Với kinh nghiệm 1 năm làm UI web bán hàng, trường học, LMS. Hãy tạo một trang cá nhân portfolio chuyên nghiệp đầy đủ các phần  như hero, header, projects, about, contact. Phong cách tối giản, màu sắc chủ đạo là màu xanh nước biển, animation như Apple.

## Mẫu prompt chatbot trả về

Thiết kế một trang portfolio cá nhân chuyên nghiệp cho UI/UX Designer với 1 năm kinh nghiệm trong mảng web bán hàng, trường học, LMS. Yêu cầu:
- Chỉ sử dụng HTML5 và CSS3 thuần, không framework, không thư viện. Có thể thêm một chút JavaScript thuần để tạo hiệu ứng cuộn (scroll reveal) nhưng giữ ở mức tối thiểu.
- Phong cách: tối giản (minimalism), lấy cảm hứng từ Apple – nhiều khoảng trắng, chữ to, rõ ràng, tinh tế.
- Bảng màu chủ đạo: xanh nước biển (primary #0066CC, dark #004499, light #E8F0FE). Màu nền: trắng (#FFFFFF) và xám nhạt (#F5F5F7). Màu chữ: đen xám (#1D1D1F) và xám trung tính (#6E6E73).
- Typography: sử dụng font hệ thống (system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif), heading đậm, body nhẹ. Kích thước lớn, dễ đọc.
- Animation:
  + Mượt mà, tinh tế như sản phẩm Apple.
  + Hero: tiêu đề và mô tả fade-in và trượt lên khi tải trang (dùng CSS animation).
  + Khi cuộn đến từng section (About, Projects, Contact), nội dung sẽ fade-up và xuất hiện tuần tự (stagger) với độ trễ 0.1-0.2s.
  + Hover vào card dự án: card nâng lên nhẹ, đổ bóng sâu hơn, ảnh scale nhẹ.
  + Hover vào nút, link: chuyển màu mượt, có thể kèm hiệu ứng underline lan ra từ giữa.
- Bố cục đầy đủ các phần:
  + Header: sticky, nền trong suốt với blur, logo tên, menu điều hướng. Mobile có hamburger menu đơn giản.
  + Hero section: full viewport, lời chào, họ tên, chức danh “UI/UX Designer”, một dòng mô tả ngắn, 2 nút CTA (Xem dự án & Liên hệ).
  + About section: ảnh đại diện (placeholder hình tròn), đoạn giới thiệu bản thân, danh sách kỹ năng (dạng tag hoặc icon đơn giản).
  + Projects section: lưới 2 cột trên desktop, 1 cột trên mobile. Mỗi card có ảnh thumbnail, tiêu đề, mô tả ngắn, tag công nghệ, link “Xem chi tiết”.
  + Contact section: form liên hệ đơn giản (họ tên, email, lời nhắn) và bên cạnh là thông tin email, điện thoại. Nút submit có style nổi bật.
  + Footer: dòng bản quyền, năm hiện tại.
- Responsive: mobile-first, breakpoint chính 768px.
- Code sạch, có comment rõ ràng, dễ bảo trì. Đặt tên class theo BEM hoặc có ý nghĩa.

# Prompt sau khi edit


Thiết kế một trang portfolio cá nhân chuyên nghiệp cho UI/UX Designer với 1 năm kinh nghiệm trong mảng web bán hàng, trường học, LMS. Yêu cầu:
- Chỉ sử dụng HTML5 và CSS3 thuần, không framework, không thư viện. Có thể thêm một chút JavaScript thuần để tạo hiệu ứng cuộn (scroll reveal) nhưng giữ ở mức tối thiểu.
- Phong cách: tối giản (minimalism), lấy cảm hứng từ Apple – nhiều khoảng trắng, chữ to, rõ ràng, tinh tế.
- Bảng màu chủ đạo: xanh nước biển (primary #0066CC, dark #004499, light #E8F0FE). Màu nền: trắng (#FFFFFF) và xám nhạt (#F5F5F7). Màu chữ: đen xám (#1D1D1F) và xám trung tính (#6E6E73).
- Typography: sử dụng font hệ thống (system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif), heading đậm, body nhẹ. Kích thước lớn, dễ đọc.
- Animation:
  + Mượt mà, tinh tế như sản phẩm Apple.
  + Hero: tiêu đề và mô tả fade-in và trượt lên khi tải trang (dùng CSS animation).
  + Khi cuộn đến từng section (About, Projects, Contact), nội dung sẽ fade-up và xuất hiện tuần tự (stagger) với độ trễ 0.1-0.2s.
  + Hover vào card dự án: card nâng lên nhẹ, đổ bóng sâu hơn, ảnh scale nhẹ.
  + Hover vào nút, link: chuyển màu mượt, có thể kèm hiệu ứng underline lan ra từ giữa.
- Bố cục đầy đủ các phần:
  + Header: sticky, nền trong suốt với blur, logo tên, menu điều hướng. Mobile có hamburger menu đơn giản.
  + Hero section: full viewport, lời chào, họ tên, chức danh “UI/UX Designer”, một dòng mô tả ngắn, 2 nút CTA (Xem dự án & Liên hệ).
  + About section: ảnh đại diện (placeholder hình tròn), đoạn giới thiệu bản thân, danh sách kỹ năng (dạng tag hoặc icon đơn giản).
  + Projects section: lưới 2 cột trên desktop, 1 cột trên mobile. Mỗi card có ảnh thumbnail, tiêu đề, mô tả ngắn, tag công nghệ, link “Xem chi tiết”.
  + Contact section: form liên hệ đơn giản (họ tên, email, lời nhắn) và bên cạnh là thông tin email, điện thoại. Nút submit có style nổi bật.
  + Footer: dòng bản quyền, năm hiện tại.
- Responsive: mobile-first, breakpoint chính 768px.
- Code sạch, có comment rõ ràng, dễ bảo trì. Đặt tên class theo BEM hoặc có ý nghĩa.
Header phải có menu hoặc tab để lựa chọn.
THông tin cá nhân:
Thông tin liên hệ:
