export function recipesHasErrored(state = false, action) {
  switch (action.type) {
    case 'RECIPES_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function recipesIsLoading(state = false, action) {
  switch (action.type) {
    case 'RECIPES_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function recipes(state = [], action) {
  switch (action.type) {
    case 'RECIPES_FETCH_DATA_SUCCESS':
      return action.recipes;

    default:
      return state;
  }
}