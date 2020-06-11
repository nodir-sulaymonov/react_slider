import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #229FFF;
    margin: 5%;
    height: 80vh;
    border-radius: 50px;
`;

const InsideWrapper = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 10%;
    margin-top: 5%;
    @media screen and (max-width: 750px) {
        width: auto;
        text-align: center;
        margin: 10%
}
   
`;

const P = styled.div`
    font-size: 65px;
    font-family: system-ui;
    font-weight: 600;
`;
const Small = styled.div`
    font-size: 25px;
    font-family: serif;
`;
class FooterBanner extends React.Component{
    render() {
        return (
            <Wrapper>
                <InsideWrapper>
                    <P>Звук - это музыка для каждого момента в жизни.</P>
                    <Small>Тысячи готовых плейлистов, чарты и персональные рекомендации для разных ситуаций, занятий и настроений собраны в удобном приложение и нас сайте. </Small>
                </InsideWrapper>
            </Wrapper>
        )
    }
}


export default FooterBanner;