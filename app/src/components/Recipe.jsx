import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecipeSection = styled.div`
  width: calc(25% - 16px);
  margin: 0 8px 20px 8px;
  min-height: 350px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 9px 0.3px;
  border-radius: 5px;
  background: #E7EAED;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  @media(max-width: 850px) {
    width: calc(50% - 16px);
    }
  @media(max-width: 450px) {
    width: calc(100% - 16px);
  }
`;

const ImageWrap = styled.div`
  height: 100%;
  max-height: 175px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  position: relative;
`;

const ImageLink = styled(Link)`
  display: block;
  height: 100%;
  min-width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  vertical-align: middle;
  transition: all 0.5s ease-in-out;
  :hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const TitleLink = styled(Link)`
  color: #4D4D4D;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 14px;
  text-decoration: none;
`;

const Paragraph = TitleLink.withComponent('div');

const StyledParagraph = Paragraph.extend`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #CD8D5F;
  padding: 15px 25px;
  line-height: 25px;
`;

const LikesWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 20px;
  padding: 10px 0;
  position: absolute;
  min-width: 180px;
  color: #ffffff;
`;

const Icon = styled.div`
  font-size: 20px;
  padding-left: 5px;
  text-shadow: #474720 3px 1px 2px;
`;

const Likes = Icon.withComponent('div');

const TimeSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 5px;
`;

const Time = styled.div`
  color: #4D4D4D;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 40px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Ingredient = Time.withComponent('div');

class Recipe extends React.Component {

  state = {
    recipes: [],
  }

  render() {

    const {
      likes, title, tags, cookTime, image, id, prepTime, servings
    } = this.props.recipe;

    return (
      <RecipeSection key={id}>
        <ImageWrap>
        <ImageLink style={{ background: `url(${image})no-repeat center/cover` }} to={`/recipes/${id}`} />
        </ImageWrap>
        <LikesWrap>
          <Likes>{likes}</Likes>
          <Icon>&#10084;</Icon>
        </LikesWrap>
        <TitleLink to={`/recipes/${id}`}>{title}</TitleLink>
        <StyledParagraph>{tags}</StyledParagraph>
        <TimeSection>
          <Time>{cookTime}&#8986;</Time>
          <Ingredient>
            {servings}
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADgSURBVGhD7ZmhDQJBEEVXo5AoaqAFHA1gKIBQAlQARWCxWAQSS08wP5lxd8xmc7tLJv8lz3yxx0vugOQSIYSE5CQ+O4lrT8ZN/HQS156MkCEPcV/Zu1g95IyhMkeRIb9gSCEM8WBIIc1DNuJbvWJQFqLtueIso3nITrT9hUFZirbnirMMhniMheADb9U1BmUm2p4rzjL4sHuED1mJF/WAQZmLtueKsww+7B7hQ8LcWrVgiMdYSJgfRH5rDdg1JMzf+FowxIMhhTDEgyGFNAkJ81qhtQwZIszLUEII+QdS+gJLThf/2x1j2AAAAABJRU5ErkJggg==" />
          </Ingredient>
        </TimeSection>  
      </RecipeSection> 
    );
  }
}

export default Recipe;
