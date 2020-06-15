import React from "react";
import Swiper from 'react-id-swiper';
import styled from "styled-components";
import './index.css';
import 'swiper/css/swiper.css'

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   height: 80vh;
   margin: 10px;
   @media screen and (max-width: 1200px) {
        width:100%;
        display: flex;
        height: 50vh;
}
@media screen and (max-width: 750px) {
        width:100%;
        display: flex;
        height: 80vh;
}
`;
const ListPlayer = () => {
    const params = {
        direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        mousewheel: true,
    }
    return (
        <Wrapper>
            <Swiper {...params}>
                <div id="slideItem">Slide #1</div>
                <div id="slideItem">Slide #2</div>
                <div id="slideItem">Slide #3</div>
                <div id="slideItem">Slide #4</div>
                <div id="slideItem">Slide #5</div>
                <div id="slideItem">Slide #6</div>
            </Swiper>
        </Wrapper>
    )
};

export default ListPlayer;