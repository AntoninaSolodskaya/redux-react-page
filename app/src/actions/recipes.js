export function recipesHasErrored(bool) {
  return {
    type: 'RECIPES_HAS_ERRORED',
    hasErrored: bool
  };
}

export function recipesIsLoading(bool) {
  return {
    type: 'RECIPES_IS_LOADING',
    isLoading: bool
  };
}

export function recipesFetchDataSuccess(recipes) {
  return {
    type: 'RECIPES_FETCH_DATA_SUCCESS',
    recipes
  };
}

export function errorAfterFiveSeconds() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(recipesHasErrored(true));
    }, 5000);
  };
}

export function recipesFetchData(url) {
  return (dispatch) => {
    dispatch(recipesIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(recipesIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((recipes) => dispatch(recipesFetchDataSuccess(recipes)))
      .catch(() => dispatch(recipesHasErrored(true)));
  };
}