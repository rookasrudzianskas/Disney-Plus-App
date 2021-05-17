import React from 'react';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
    // defining settings of the image slider
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,

    }
    return (
        <div>
            Image Slider
        </div>
    );
};

export default ImgSlider;
