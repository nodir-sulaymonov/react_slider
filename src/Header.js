import React from "react";
import styled from "styled-components";
import ModalButton from "./ModalButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeaderStyled = styled.header`
    padding: 30px;
    background-color: #229FFF;
    @media screen and (max-width: 650px) {
        width: auto;
        font-size:10px;
}
    
`;

const StyleUl = styled.ul`
    list-style-type: none;   
    margin: 0;
`;

const ListIndex = styled.li`
    display: inline-block;
    margin-right: 20px;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
@media screen and (max-width: 650px) {
        font-size:5px;
}
`;

class Header extends React.Component {
    render() {
        return (
            <HeaderStyled>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={1}>
                            <h4 style={{margin: "0px", color: "white"}}>LOGO</h4>
                        </Col>
                        <Col xs={12} sm={10}>
                            <StyleUl>
                                <ListIndex>Текст</ListIndex>
                                <ListIndex>Текст</ListIndex>
                                <ListIndex>Текст</ListIndex>
                                <ListIndex>Текст</ListIndex>
                                <ListIndex>Текст</ListIndex>
                            </StyleUl>
                        </Col>
                        <Col xs={6} sm={1}>
                            <ModalButton/>
                        </Col>
                    </Row>
                </Container>
            </HeaderStyled>
        )
    }
}

export default Header;