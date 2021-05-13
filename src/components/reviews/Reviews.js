import React from "react";
import "./index.css";

import img from "../../assets/Img.png";
import usImg from "../../assets/us.png";
const Reviews = () => {
  return (
    <div className="reviewsContainer">
      <div className="bothArraowContainer">
        <div className="reviewsText">
          <h1>Reviews</h1>
          <div className="underline"></div>
        </div>
        <p className="bothArrow">
          1/2
          <span className="left">
            <i class="fas fa-arrow-left"></i>
          </span>
          <span className="right">
            <i class="fas fa-arrow-right"></i>
          </span>
        </p>
      </div>
      <div className="reviewCardContainer">
        <div className="reviewCardSection">
          <div className="reviewBack"></div>
          <div className="reviewFront">
            <div className="profileContainer">
              <img src={img} alt="" className="reviewerImg" />
              <div className="reviewerName">
                <h5>Hellen jummy</h5>
                <div className="flagContainer">
                  <img src={usImg} alt="" className="countryImg" />
                  <p>PALO ALTO, CA</p>
                </div>
              </div>
            </div>
            <div className="reviewWords">
              <p>
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry's standard dummy text ever since the.
              </p>
            </div>
          </div>
        </div>
        <div className="reviewCardSection">
          <div className="reviewBack"></div>
          <div className="reviewFront">
            <div className="profileContainer">
              <img src={img} alt="" className="reviewerImg" />
              <div className="reviewerName">
                <h5>Hellen jummy</h5>
                <div className="flagContainer">
                  <img src={usImg} alt="" className="countryImg" />
                  <p>PALO ALTO, CA</p>
                </div>
              </div>
            </div>
            <div className="reviewWords">
              <p>
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry's standard dummy text ever since the.
              </p>
            </div>
          </div>
        </div>
        <div className="reviewCardSection">
          <div className="reviewBack"></div>
          <div className="reviewFront">
            <div className="profileContainer">
              <img src={img} alt="" className="reviewerImg" />
              <div className="reviewerName">
                <h5>Hellen jummy</h5>
                <div className="flagContainer">
                  <img src={usImg} alt="" className="countryImg" />
                  <p>PALO ALTO, CA</p>
                </div>
              </div>
            </div>
            <div className="reviewWords">
              <p>
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry's standard dummy text ever since the.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
