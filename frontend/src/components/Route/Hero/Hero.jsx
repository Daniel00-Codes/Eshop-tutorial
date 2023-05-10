import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#030303] font-[Cambria] `}
        >
          - Your Local Market. <br /> - Your Fingertips.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#0a0a0aba]">
          - Discover the Best Local Shops with Ease! Our ecommerce website helps
          you find the nearest and most popular stores in your area. Shop local
          for the best deals and support your community today. <br /> <br /> - Don't
          settle for the closest store around you, settle for the best closest
          store around you.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
