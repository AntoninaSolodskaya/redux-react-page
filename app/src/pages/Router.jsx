import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from './Main';
import Edit from './Edit';
import Blog from './Blog';
import BlogPage from './BlogPage';
import Members from './Members';
import RecipePage from './RecipePage';
import { instagram, facebook, twitter } from '../icons';

const bg = 'http://grandtheatrecompany.com/wp-content/uploads/2016/05/img_3.jpg';

injectGlobal`
  @font-face {
    font-family: UmbrellaMarket;
    src: url('fonts/Umbrella-Market.ttf') format('ttf');
  }
  *{
    box-sizing: border-box;
    margin: 0;
    outline: none;
  }
  html {
    min-height: 100%;
    }
  body {
    min-height: 100%;
    height: 100%;
    display: flex;
  }
  .hide{
    display: none!important;
  }
  .content-width{
    max-width: 1140px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  .main-bg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  #main{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  #main-wrap{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  main{
    flex: 1 0 auto; 
    min-width: 350px;
    margin: 10px 10px;
  }
  form{
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
  }
  footer{
    background: initial;
  }
  :root{
    --main-bg-color: rgba(0, 0, 0, 0.6); 
    --main-color: #CD8D5F;
    --main-text-color: #ffffff;
  }
  .theme-bg{
    background-color:  var(--main-bg-color);
  }
  .theme-color{
    color: var(--main-color);
  }
  .light-color{
    color: var(--main-text-color);
  }
  input{
    min-height: 35px;
    width: 65%;
    padding: 0 15px;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #ffffff;
    font: normal 16px/2 "varela-round", Helvetica, sans-serif;
    color: rgba(255,247,247,1);
    ::-webkit-input-placeholder {
      color: #ffffff;
      font-size: 16px;
    }
    ::-moz-placeholder {
      color: #ffffff;
      font-size: 16px;
    }
    :-ms-input-placeholder {
      color: #ffffff;
      font-size: 16px;
    }
    :-moz-placeholder { 
      color: #ffffff;
      font-size: 16px;
    }
  }
  .number{
    width: 40%;
    @media(max-width: 450px) {
      width: 100%;
    }
  }
  .ingrediant{
    width: 100%;
  }
  .amount{
    width: 100%;
  }
  textarea{
    resize: none;
    max-height: 190px;   
    padding: 15px 15px;
    margin-bottom: 10px;
    width: 80%;
    background-color: initial;
    border: 1px solid #b7b7b7;
    border-radius: 4px; 
    color: #ffffff;
    font-size: 18px; 
    @media(max-width: 450px) {
      width: 100%;
  }
  .labelWidth{
    width: 210px;
  }
`;
const Router = ({ changeLanguage }) => (
  <BrowserRouter>
    <div id="main-wrap">
      <div className="main-bg" style={{ background: `url(${bg}) no-repeat center/cover` }}></div>
      <div className="content-width">
        <Header
          facebook={facebook}
          instagram={instagram}
          twitter={twitter}
          changeLanguage={changeLanguage}
        />
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/add-recipe" component={Edit} />
            <Route exact path="/recipes/:recipeId" component={RecipePage} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/posts" component={Blog} />
            <Route exact path="/posts/:postId" component={BlogPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
);

export default Router;
