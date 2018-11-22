import React from 'react';
import { connect } from 'react-redux';
import { recipesFetchData } from '../actions/recipes';
import styled from 'styled-components';
import Recipe from './Recipe';

const RecipesWrap = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const RecipeBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 5px;
`;

const ButtonsWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-right: 50px;
  @media(max-width: 850px) {
    width: 100%;
    justify-content: center;
    margin: 0 10px;
  }
  @media(max-width: 320px) {
    width: 100%;
    justify-content: center;
    margin: 0 10px;
  }
`;

const Button = styled.button`
  text-decoration: none;
  text-align: center; 
  padding: 8px 11px; 
  border: solid 1px #998d8d; 
  border-radius: 5px; 
  color: #9e8d8d; 
  background-color: #ffffff; 
  display: inline-block;
  margin: 10px 6px;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif; 
  transition: .2s ease-in-out;
  &:before {
    content: "";
    background: linear-gradient(to right, #d8e0de 0%,#aebfbc 22%,#99afab 33%,#8ea6a2 50%,#829d98 67%,#4e5c5a 100%,#0e0e0e 100%);
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
  }
  &:hover {
    background: #CAD5D2;
    color: #fff;
  }
  &:hover:before {
    left: 150px;
    transition: .9s ease-in-out;
  }
  @media(max-width: 850px) {
    padding: 15px;
    margin: 17px;
  }
  @media(max-width: 320px) {
    padding: 13px;
    margin: 10px 15px;
  }
`;

class MainContent extends React.Component {
  
  state = {
    hasErrored: false,
    isLoading: false,
    currentPage: 1,
    currentPerPage: 8,
  };

  componentDidMount() {
    this.props.fetchData('http://localhost:3000/recipes');
  }

  handleClick(event){
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    
    const { currentPage, currentPerPage } = this.state;

    const indexOfLastRecipe = currentPage * currentPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - currentPerPage;
    const currentRecipe = this.props.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.recipes.length / currentPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderRecipes = currentRecipe
      .map((recipe, i) => <Recipe recipe={recipe} key={i}/>)

    const renderPageNumbers = pageNumbers.map((number, i) => (
      <Button
        type="button"
        key={i}
        id={number}
        onClick={this.handleClick.bind(this)}
      >
        {number}
      </Button>
    ));


    if (this.props.hasErrored) {
      return <div>Sorry! There was an error loading the recipes</div>;
    }

    if (this.props.isLoading) {
      return <div>Loading…</div>;
    }

    return (
      <RecipesWrap>
        <RecipeBlock>
          {renderRecipes}
        </RecipeBlock>
        <ButtonsWrap>
          {renderPageNumbers}
        </ButtonsWrap>
      </RecipesWrap>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
