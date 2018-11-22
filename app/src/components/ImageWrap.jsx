import React from 'react';
import styled from 'styled-components';

const ImgBlock = styled.div`
  background: url("http://say-hi.me/wp-content/uploads/2017/08/Food-Photography.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 13px;
  &:before {
    content: "";
    display: block;
    padding-top: 50%;
  }
`;

const Item = styled.h1`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  color: #fff;
  font-family: 'Niconne', cursive;
  font-size: 90px;
  font-weight: 400;
  padding: 20px 20px;
  text-shadow: #474747 3px 5px 2px;
`;

const ImageWrap = () => (
  <ImgBlock>
    <Item>Welcome to the Recipes</Item>
  </ImgBlock>
);

export default ImageWrap;
