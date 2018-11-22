import { combineReducers } from 'redux';
import { recipes, recipesHasErrored, recipesIsLoading } from './recipes';
import { posts, postsHasErrored, postsIsLoading } from './posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  recipes,
  recipesHasErrored,
  recipesIsLoading,
  posts,
  postsHasErrored,
  postsIsLoading,
  form: formReducer
});

export default rootReducer;
