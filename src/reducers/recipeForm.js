export default function recipeForm(state = {ingredientIds: []}, action){
  switch (action.type) {
    case 'RECIPE_FORM_ADD_INGREDIENT':
      const ingredientIds = state.ingredientIds.concat(action.payload)
      return {...state, ingredientIds: ingredientIds}

    default:
      return state;
  }
}
