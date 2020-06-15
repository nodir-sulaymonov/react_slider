import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import styled from "styled-components";
import './index.css';
import Button from "react-bootstrap/Button";


const WrapperModel = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    margin: 5%;
`;

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <div className="row">
                <Modal
                    visible={this.state.visible}
                    width="400"
                    border-radius="10"
                    height="400"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}
                >
                    <WrapperModel>
                        <h2>Войдите удобным способом</h2>
                        <button className="buttonModal">Email</button>
                        <button className="buttonModal">ВКонтакте</button>
                        <button className="buttonModal">Facebook</button>
                    </WrapperModel>
                </Modal>
                <Button variant="secondary" ovalue="Open" onClick={() => this.openModal()}>Primary</Button>
            </div>
        );
    }
}