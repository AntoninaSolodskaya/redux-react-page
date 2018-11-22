import React, {Fragment} from 'react';
import ModalForm from '../components/ModalForm';
import styled from 'styled-components';

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  max-width: 430px;
  max-height: 335px;
  height: 100%;
  width: 100%;
  background: #CD8D5F;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 25px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const BtnClose = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 7px 10px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  border: 0;
  font-size: 25px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class ModalWindow extends React.Component {

  submit = values => {
    window.alert (JSON.stringify (values));
  };

  handleSubmit  = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <ModalWrap
        onClick={this.props.closeModal}
        data-close
      >
        <Modal
          onSubmit={this.handleSubmit}
        >
          <BtnClose>
            <Button
              onClick={this.props.closeModal}
              data-close
            >
              x
            </Button>
          </BtnClose>
          <Title>Logo</Title>
          <ButtonWrap>
            <ModalForm onSubmit={this.submit}/>
          </ButtonWrap>
        </Modal>
      </ModalWrap>
      </Fragment>
    );
  }
}

export default ModalWindow;
