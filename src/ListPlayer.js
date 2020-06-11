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
                <div className="slideItem">Slide #1</div>
                <div className="slideItem">Slide #2</div>
                <div className="slideItem">Slide #3</div>
                <div className="slideItem">Slide #4</div>
                <div className="slideItem">Slide #5</div>
                <div className="slideItem">Slide #6</div>
                
            </Swiper>
        </Wrapper>
    )
};

export default ListPlayer;