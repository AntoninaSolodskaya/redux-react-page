import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 5px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px;
  font: bold 16px/2 "varela-round", Helvetica, sans-serif;
  color: #ffffff;
`;

const ButtonWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ButtonSubmit = styled.button`
  background-color: #ffffff;
  color: #CD8D5F;
  border: 2px solid #ffffff;
  font-size: 18px;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 3px;
`;

class ModalForm extends React.Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <Label>Email:
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
              required
            />
          </Label>
          <Label>Password:
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              required
            />
          </Label>
        </Wrapper>
        <ButtonWrap>
          <ButtonSubmit type="submit" label="submit">Log in</ButtonSubmit>
        </ButtonWrap>
      </form>
    );
  }
}

ModalForm = reduxForm ({
  form: 'login',
}) (ModalForm);

export default ModalForm;