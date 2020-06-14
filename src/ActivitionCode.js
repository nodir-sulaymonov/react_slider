import React from "react";
import styled from "styled-components";
import './index.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";

const Wrapper = styled.div`
    margin: 10%;
    text-align: center;
`;

const BannerStyled = styled.div`
    font-size: 80px;
    font-weight: bold;
    @media screen and (max-width: 650px) {
        font-size:35px;
}
`;


class ActivitionCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        };
    }

    handleThemeChange = e => {
        let {name, value} = e.target;
        this.setState({...this.state, [name]: value});
    };
    onSubmit = (event) => {
        event.preventDefault();
        const {code} = event.target;
    };

    render() {
        return (
            <Wrapper>
                <Container>
                        <BannerStyled>
                            Активируйте ваш код
                        </BannerStyled>
                        <Form onSubmit={this.onSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6" >
                                    <input
                                        type="text"
                                        name="code"
                                        id="code"
                                        placeholder="Введите код"
                                        value={this.state.code}
                                        onChange={this.handleThemeChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <button className="activation" type="submit">Продолжить</button>
                                </div>
                            </div>
                        </Form>
                </Container>
            </Wrapper>
        )
    }
}


export default ActivitionCode;