import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import "./index.css";

const Wrapper = styled.div`
    background-color: #229FFF;
    margin: 5%;
    height: 80vh;
    border-radius: 50px;
    @media screen and (max-width: 1100px) {
     height: 50vh;
     margin: 5%;
}
`;


class FooterBanner extends React.Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="title_name">Звук - это музыка для каждого момента в жизни.</h1>
                            <p class="footer_text">Тысячи готовых плейлистов, чарты и персональные рекомендации для разных ситуаций, занятий
                                и настроений собраны в удобном приложение и нас сайте.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        )
    }
}


export default FooterBanner;