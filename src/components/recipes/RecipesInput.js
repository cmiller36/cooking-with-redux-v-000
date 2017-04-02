import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRecipe } from '../../actions/recipes'
import { AddIngredients } from '../ingredients/AddIngredients'

export class RecipesInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: ''
    }
  }

   handleOnRecipeNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnCalorieChange(event) {
    this.setState({
      calories: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault()
    let recipe = Object.assign({}, this.state, {ingredientIds: this.props.selectedIngredients})
    this.props.addRecipe(recipe)
  }


  render(){
    return(
      <form onSubmit={this.handleOnSubmit.bind(this)}>
      <p>
        <input type="text" onChange={this.handleOnRecipeNameChange.bind(this)} placeholder="Recipe name"/>
      </p>
      <p>
        <input type="text" onChange={this.handleOnCalorieChange.bind(this)} placeholder="calories"/>
      </p>
        <AddIngredients />
        <input type="submit" />
      </form>
    )
  }
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRecipe: addRecipe}, dispatch)
}

function mapStateToProps(state) {
  return { selectedIngredients: state.recipeForm.ingredientIds}
}