import React from "react";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="User Avatar" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="Arrow Up" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="Arrow Up" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="Arrow Down" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/25975158/pexels-photo-25975158/free-photo-of-portrait-of-a-turtle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shared Photo"
                />
                <span>2024_2_13</span>
              </div>
              <img src="./download.png" className = 'icon'alt="Download Icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/25975158/pexels-photo-25975158/free-photo-of-portrait-of-a-turtle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shared Photo"
                />
                <span>2024_2_13</span>
              </div>
              <img src="./download.png" className = 'icon'alt="Download Icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="Arrow Up" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
