import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { recipesFetchData } from '../actions/recipes';

const BlogWrap = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 645px;
  margin: 0 auto;
  padding: 20px 20px;
  font-size: 16px;
  font-family: sans-serif;
  color: #333333;
`;

const Title = styled.h1`
  padding: 30px 0;
  box-sizing: content-box;
  overflow: hidden;
  font: normal 32px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  color: #CD8D5F;
`;

const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 20px;
  font-size: 16px;
  font-family: sans-serif;
  border-top: 1px solid #A9A9A9;
`;

const Avatar = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Item = styled.span`
  padding-bottom: 5px;
  border-bottom: 1px solid #CD8D5F;
`;

const Recipes = styled.div`
  margin-top: 5px;
`;

class Members extends React.Component {

  state = {
    hasErrored: false,
    isLoading: false,
  };

  componentDidMount() {
    this.props.fetchData('http://localhost:3000/recipes');
  }

  render() {

    if (this.props.hasErrored) {
      return <div>Sorry! There was an error loading the recipes</div>;
    }

    if (this.props.isLoading) {
      return <div>Loading…</div>;
    }

    return (
      <BlogWrap className="theme-bg">
        <Container>
          <Title>Member Directory</Title>
          {this.props.recipes.map((recipe) => (
            <Block className="light-color" key={recipe.id}>
              <Avatar style={{ background: `url(${recipe.author.avatar})no-repeat center/cover` }} />
              <Section>
                <Item>{recipe.author.name}</Item>
                <Recipes>{recipe.likes}</Recipes>
              </Section>
            </Block>
          ))}
        </Container>
      </BlogWrap>
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

export default connect(mapStateToProps, mapDispatchToProps)(Members);

