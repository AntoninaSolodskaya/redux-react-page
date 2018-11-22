import React, {Fragment} from 'react';
import Form from '../components/Form';
import styled from 'styled-components';

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #A9A9A9;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Title = styled.div`
  padding: 30px 0;
  box-sizing: content-box;
  overflow: hidden;
  color: #CD8D5F;
  font: normal 32px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
`;


class Edit extends React.Component{

  submit = values => {
    window.alert (JSON.stringify (values));
  }

  render() {
    return (
      <Fragment>
        <TitleWrap className="theme-bg">
          <Title>
            Submit a Recipe
          </Title>
        </TitleWrap>
        <Wrapper className="theme-bg light-color">
          <Form onSubmit={this.submit} />
        </Wrapper>
      </Fragment> 
    );
  }
}

export default Edit;
