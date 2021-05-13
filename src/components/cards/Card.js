import React from "react";
import "./index.css";
import img1 from "../../assets/Img1.png";
import img2 from "../../assets/Img2.png";
import img3 from "../../assets/Img3.png";
import img4 from "../../assets/Img4.png";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="upcommingShow">
        <div className="upcommingText">
          <h1>Upcomming Show</h1>
          <div className="underline"></div>
        </div>
        <p>View all</p>
      </div>
      <div className="mainCardContainer">
        <div className="cardSection">
          <div className="back"></div>
          <div className="front">
            <img src={img1} alt="img" />
            <div className="cardTextSection">
              <div className="singType">Fork</div>
              <p className="name">Benny Dayal</p>
              <div className="moreInfo">
                <p className="arrow">
                  more info <i class="fas fa-arrow-right"></i>
                </p>
                <p className="icon">
                  <i class="fas fa-book"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardSection">
          <div className="back"></div>
          <div className="front">
            <img src={img2} alt="img" />
            <div className="cardTextSection">
              <div className="singType">Fork</div>
              <p className="name">Benny Dayal</p>
              <div className="moreInfo">
                <p className="arrow">
                  more info <i class="fas fa-arrow-right"></i>
                </p>
                <p className="icon">
                  <i class="fas fa-book"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardSection">
          <div className="back"></div>
          <div className="front">
            <img src={img3} alt="img" />
            <div className="cardTextSection">
              <div className="singType">Fork</div>
              <p className="name">Benny Dayal</p>
              <div className="moreInfo">
                <p className="arrow">
                  more info <i class="fas fa-arrow-right"></i>
                </p>
                <p className="icon">
                  <i class="fas fa-book"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardSection">
          <div className="back"></div>
          <div className="front">
            <img src={img4} alt="img" />
            <div className="cardTextSection">
              <div className="singType">Fork</div>
              <p className="name">Benny Dayal</p>
              <div className="moreInfo">
                <p className="arrow">
                  more info <i class="fas fa-arrow-right"></i>
                </p>
                <p className="icon">
                  <i class="fas fa-book"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
