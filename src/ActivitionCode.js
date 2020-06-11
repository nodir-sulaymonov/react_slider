import React from "react";
import styled from "styled-components";
import './index.css';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10%;
`;

const BannerStyled = styled.div`
    display: flex;
    font-size: 80px;
    font-weight: bold;
    text-align: center;
`;

const FormStyled = styled.div`
    display: flex;
    flex-direction: row;
`;
const InputWrapper = styled.div`
    display: flex;
    padding: 15px;
    margin-left: 20px;
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
                <BannerStyled>
                    Активируйте ваш код
                </BannerStyled>
                <form onSubmit={this.onSubmit}>
                    <FormStyled>
                        <InputWrapper>
                            <input
                                type="text"
                                name="code"
                                id="code"
                                placeholder="Введите код"
                                value={this.state.code}
                                onChange={this.handleThemeChange}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <button className="activation" type="submit">Продолжить</button>
                        </InputWrapper>
                    </FormStyled>
                </form>
            </Wrapper>
        )
    }
}


export default ActivitionCode;