export const validate = values => {
  
  const errors = {}

  if (!values.title) {
    errors.title = 'Required'
  }else if (values.title.length < 4) {
    errors.title = "must be at least 4 characters!";
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  if (!values.prepTime) {
    errors.prepTime = 'Required'
  }else if (isNaN(Number(values.prepTime))) {
    errors.prepTime = 'Must be a number'
  }else if (Number(values.prepTime) > 150) {
    errors.prepTime = 'Sorry, there must be less time '
  }
  if (!values.cookTime) {
    errors.cookTime = 'Required'
  }
  else if (isNaN(Number(values.cookTime))) {
    errors.cookTime = 'Must be a number'
  }else if (Number(values.cookTime) > 150) {
    errors.cookTime = 'Sorry, there must be less time '
  }
  if (!values.servings) {
    errors.servings = 'Required'
  }
  else if (isNaN(Number(values.servings))) {
    errors.servings = 'Must be a number'
  }else if (Number(values.servings) > 150) {
    errors.servings = 'Sorry, there must be less time '
  }
  if (!values.tags) {
    errors.tags = 'Required'
  }
  if (!values.ingredient) {
    errors.ingredient = 'Required'
  }
  if (!values.amount) {
    errors.amount = 'Required'
  }
 
  return errors
}

export const required = value =>
  value ? undefined : 'Value is required';
