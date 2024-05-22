import React from 'react';
import './Paper.css';

const Paper = () => {
  return (
    <div className="paper-container">
      <div className="header-paper">
        <h1>TIN TỨC</h1>
      </div>
      <div className="main-news">
        <div className="main-news-image">
          <img src="https://vpf.vn/wp-content/uploads/2023/10/FlagMockup-HNQG-2324-741x486.jpg" alt="Main News" />
          <div className="main-news-title">
            <h2>Danh sách cầu thủ nghỉ thi đấu vòng 19 Gold Star V.League 2 – 2023/24</h2>
          </div>
        </div>
        <div className="side-news">
          <div className="side-news-item">
            <img src="https://vpf.vn/wp-content/uploads/2024/05/IMG_3065-324x160.jpeg" alt="Side News" />
            <div className="side-news-title">
              <h4>Vòng 20 Night Wolf V.League 1-2023/24: Biến động cuộc đua nhóm đầu</h4>
            </div>
          </div>
          <div className="side-news-item">
            <img src="https://vpf.vn/wp-content/uploads/2024/05/kquav18HNQG-648x320.jpg" alt="" />
            <div className="side-news-title">
              <h4>Vòng 18 Gold Star V.League 2-2023/24: CLB Đồng Tháp bước vào nhóm an toàn</h4>
            </div>
          </div>
          <div className="side-news-item">
            <img src="https://vpf.vn/wp-content/uploads/2024/05/pre-vong-20-nw-vl-2023-24-648x320.jpg" alt="" />
            <div className="side-news-title">
              <h4>Trước vòng 20 Night Wolf V.League 1-2023/24: Đầy kịch tính!</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-news">
        <div className="bottom-news-item">
          <img src="https://vpf.vn/wp-content/uploads/2024/05/BinhDinh-HaiPhong2023-24-03-100x70.jpg" alt="Bottom News" />
          <h4>Hải Phòng FC nhận cú đúp giải thưởng tháng 4 Night Wolf V.League 1 – 2023/24</h4>
        </div>
        <div className="bottom-news-item">
          <img src="https://vpf.vn/wp-content/uploads/2023/10/FlagMockup-VDQG-2324-100x70.jpg" alt="Bottom News" />
          <h4>Danh sách cầu thủ nghỉ thi đấu vòng 20 Night Wolf V.League 1 – 2023/24</h4>
        </div>
        <div className="bottom-news-item">
            <img src="https://vpf.vn/wp-content/uploads/2024/05/BinhPhuoc-DongNai2023-24-14-100x70.jpg" alt="Bottom News" />
          <h4>Vòng 18 Gold Star V.League 2-2023/24: Đeo bám quyết liệt</h4>
        </div>
        <div className="bottom-news-item">
          <h4>Vòng 18 Gold Star V.League 2-2023/24: Đeo bám quyết liệt</h4>
        </div>
      </div>
    </div>
  );
};

export default Paper;
