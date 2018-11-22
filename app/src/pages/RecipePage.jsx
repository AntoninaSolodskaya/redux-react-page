import React from 'react';
import { connect } from 'react-redux';
import { recipesFetchData } from '../actions/recipes';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AvatarBlock from '../components/AvatarBlock';

const RecipeWrap = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const Title = styled.h1`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  color: #fff;
  font-family: 'Niconne',cursive;
  font-size: 90px;
  font-weight: 400;
  padding: 20px 20px;
  text-shadow: #474747 3px 5px 2px;
`;

const Image = styled.div`
  position: relative;
  width: 100%;	
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    display: block;
    padding-top: 50%; 
  }
`;

const MainContentWrap = styled.div`
  max-width: 630px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: sans-serif;
  color: #333333;
`;

const LikesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const TimeBlock = LikesBlock.extend`
  justify-content: space-between;
`;

const BlockWrap = TimeBlock.extend`
  flex-direction: unset;
  padding: 8px 0;
  border-bottom: 1px solid #f2f2f2;
`;

const Span = styled.span`
  color: #5E5E5E;
  font-weight: bold;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 15px;
`;

const ItemSection = styled.p`
  font-size: 12px;
  font-family: sans-serif;
  color: #6C6C6C;
`;

const Button = ItemSection.withComponent('button');

const StyledButton = Button.extend`
  display: flex;
  font-size: 14px;
  font-family: sans-serif;
  padding: 5px 8px;
  margin-right: 5px;
  cursor: pointer;
  background: initial;
  border: 1px solid #E8E8E8;
  border-radius: 3px;
  &:active{
    background: #CD8D5F;
    color: #fff;
    border-color: transparent;
    span{
      color: #fff;
    }
  }
`;

const Item = styled.h1`
  font-size: 20px;
  font-family: sans-serif;
  color: #111111;
  padding: 10px 0;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
  @media(max-width: 450px) {
    width: 100%;
    align-items: center;
  }
`;
const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  list-style-type: none;
  padding: 0;
`;

const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`;

const SpanList = styled.span`
  width: 50%;
  margin: 3px 0;
  text-align: left;
`;

const InputBlock = styled.input`
  display: none;
  &:checked + label {
    text-decoration: line-through;
  }
`;

const LabelBlock = styled.label`
  display: flex;
  width: 90%;
`;

const Description = styled.div`
  white-space: pre-wrap;
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
`;

const Circle = styled.span`
  height: 23px;
  width: 23px;
  border-radius: 50%;
  background: #000;
  margin-right: 10px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const StepsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 480px;
  margin: 25px 5px;
  border-bottom: 1px solid #E8E8E8;
`;

const ContextList = styled.span`
  margin: 8px 0;
`;

const SliderLink = styled(Link)`
  display: flex;
  position: fixed;
  top: 50%;
  right: ${props => (props.right ? props.right : 'initial')};
  left: ${props => (props.left ? props.left : 'initial')};
  transform: translateY(-50%) ${props => (props.right ? 'translateX(100%)' : 'translateX(-100%)')};
  width: 245px;
  background: #CD8D5F;
  text-decoration: none;
  align-items: center;
   &:hover{
    right: ${props => (props.right ? '245px' : 'initial')};
    left: ${props => (props.left ? '245px' : 'initial')};
  }
  -webkit-transition-duration: 0.7s; 
  -moz-transition-duration: 0.7s;
  -o-transition-duration: 0.7s;
  transition-duration: 0.7s;
`;

const SpanSlider = styled.span`
  color: #fff;
  background: #CD8D5F;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  height: 50px;
  width: 50px;
  padding-bottom: 5px;
`;

const TitleImage = styled.span`
  height: 50px;
  width: 50px;
`;

const TitleSpan = styled.span`
  flex: 1;
  padding: 0 15px;
  font-size: 15px;
  font-family: sans-serif;
`;

class RecipePage extends React.Component {

  state = {
    hasErrored: false,
    isLoading: false,
    recipe: null,
    prevRecipe: null,
    nextRecipe: null,
  };

  setRecipes = (idRecipe) => {
    const recipesArr = this.props.recipes;
    recipesArr.forEach((item, i) => {
      if (idRecipe === item.id) {
        console.log(item);
        this.setState({ recipe: item, prevRecipe: recipesArr[i - 1] ? recipesArr[i - 1] : null, nextRecipe: recipesArr[i + 1] });
        // localStorage.setItem('recipe', JSON.stringify(this.props.match.params));
        // console.log(localStorage);
      }
    });
  };
  
  componentDidMount() {
    this.props.fetchData('http://localhost:3000/recipes');
    this.setRecipes(this.props.match.params.recipeId);
  } 

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.recipeId !== nextProps.match.params.recipeId) {
      this.setRecipes(nextProps.match.params.recipeId);
    }
  }

  render() {
    const { recipe, prevRecipe, nextRecipe } = this.state;
   
     if (recipe) {
      const {
        image, title, likes, dislike, servings, prepTime, cookTime, description, ingredients, steps,
      } = recipe;

      if (this.props.hasErrored) {
        return <div>Sorry! There was an error loading the recipes</div>;
      }
  
      if (this.props.isLoading) {
        return <div>Loading…</div>;
      }

      return (
        <RecipeWrap>
          <Image style={{ background: `url(${image})no-repeat center/cover` }}>
            <Title>{title}</Title>
          </Image>
          <MainContentWrap>
            <BlockWrap>
              <TimeBlock>
                <ItemSection>Servings</ItemSection>
                <Span>{servings}</Span>
              </TimeBlock>
              <TimeBlock>
                <ItemSection>Prep</ItemSection>
                <Span>{prepTime}</Span>
              </TimeBlock>
              <TimeBlock>
                <ItemSection>Cook</ItemSection>
                <Span>{cookTime}</Span>
              </TimeBlock>
              <LikesBlock>
                <ItemSection>Vote</ItemSection>
                <ButtonWrap>
                  <StyledButton>Like
                    <Span>{likes}</Span>
                  </StyledButton>
                  <StyledButton>Dislike
                    <Span>{dislike}</Span>
                  </StyledButton>
                </ButtonWrap>
              </LikesBlock>
            </BlockWrap>
            <Description>
              {description}
            </Description>
            <Ingredients>
              <Item>Ingredients</Item>
              <ListWrap>
                {ingredients.map((ingr, i) => (
                  <ListItem key={i}>
                    <InputBlock id={`check${i}`} type="checkbox" />
                    <LabelBlock htmlFor={`check${i}`}>
                      <SpanList>{`${ingr.title}`}</SpanList>
                      <SpanList>{`${ingr.amount}`}</SpanList>
                    </LabelBlock>
                  </ListItem>
                ))}
              </ListWrap>
            </Ingredients>
            <StepsWrap>
              <Item>Directions</Item>
              <ListWrap>
                {steps.map((number, i) => (
                  <ListItem key={i}>
                    <Circle>
                      {i + 1}
                    </Circle>
                    <ContextList  value={number}>
                      {number}
                    </ContextList>
                  </ListItem>
                ))}
              </ListWrap>
            </StepsWrap>
            <AvatarBlock tags={recipe.tags} author={recipe.author} title="Recipe By" />
          </MainContentWrap>

          {prevRecipe && (
            <SliderLink left="50px" to={`/recipes/${prevRecipe.id}`}>
              <TitleImage style={{ background: `url(${prevRecipe.image})no-repeat center/cover` }} />
              <TitleSpan>{prevRecipe.title}</TitleSpan>
              <SpanSlider>&larr;</SpanSlider>
            </SliderLink>
          )}
          {nextRecipe && (
          <SliderLink right="50px" to={`/recipes/${nextRecipe.id}`}>
            <SpanSlider>&rarr;</SpanSlider>
            <TitleSpan>{nextRecipe.title}</TitleSpan>
            <TitleImage style={{ background: `url(${nextRecipe.image})no-repeat center/cover` }} />
          </SliderLink>
          )}
        </RecipeWrap>
      );
    }
    return (
      <div></div>
    );
  }
}

RecipePage.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    hasErrored: state.recipesHasErrored,
    isLoading: state.recipesIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(recipesFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
