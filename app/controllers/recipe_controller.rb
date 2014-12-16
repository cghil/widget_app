class RecipeController < ApplicationController
  def search
    recipe = Recipe.get_recipe
    ruby_hash = JSON.parse(recipe)
    recipe_json_object = ruby_hash
    render json: recipe_json_object
  end
end
