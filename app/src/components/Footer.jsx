import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
`;

const Block = FooterWrap.extend`
  @media(max-width: 850px) {
    width: calc(100% - 16px);
    justify-content: center;
  }
  @media(max-width: 450px) {
    width: calc(100% - 16px);
    justify-content: center;
  }
`;

const StyledParagraph = styled.p`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 20px 20px;
  font-family: sans-serif;
  font-size: 13px;
  margin: 0 5px;
`;

const Link = StyledParagraph.withComponent('a');

const StyledLink = Link.extend`
  position: relative;
  transition: all .3s cubic-bezier(.2, 0, 0, 1);
  z-index: 1;
  &:after {
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #ffffff;
    transition: all .3s cubic-bezier(.2, 0, 0, 1);
    transform-origin: bottom center;
    z-index: -1;
  }
  &:hover {
    color: #2D2D2D;
    &:after {
      right: 0;
      left: 0;
      height: 100%;
    }
  }
  @media(max-width: 850px) {
    width: 50%;
    padding: 20px 0;
  }
  @media(max-width: 450px) {
    width: 100%;
    padding: 20px 0;
  }
`;

const Button = styled.button`
  background-color: #000000;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`;

class Footer extends React.Component {

  state = {
    active: true,
  };

  handleClick = (event) => {
    this.setState({ active: !this.state.active }, () => {
      document.querySelector('body').style.setProperty('--main-bg-color', this.state.active ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)');
      document.querySelector('body').style.setProperty('--main-color', this.state.active ? '#CD8D5F' : '#000000')
      document.querySelector('body').style.setProperty('--main-text-color', this.state.active ? '#000000' : '#ffffff')
    });
  };

  render() {
    return(
      <footer>
        <FooterWrap>
          <Block>
            <StyledLink>Advertising</StyledLink>
            <StyledLink>Terms & Conditions</StyledLink>
            <StyledLink>Private Policy</StyledLink>
          </Block>
          <Block>
            <StyledParagraph>&copy;Copyright Recipes</StyledParagraph>
          </Block>
          <Block>
            <Button
              type="button"
              onClick={this.handleClick}
            >
              {this.state.active ? 'Light theme' : 'Dark theme'}
            </Button>
          </Block>
        </FooterWrap>
      </footer> 
    );
  }
}

export default Footer;
