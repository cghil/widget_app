class RecipeController < ApplicationController
  def search
    user_search = params['/recipe/search']['search']
    api_key = ENV["API_RECIPE"]
    user_search = user_search.gsub(/ /, '%20')
    @response = HTTParty.get("http://food2fork.com/api/search?key=#{api_key}&q=#{user_search}")
    ruby_hash = JSON.parse(@response)
    recipe_json_object = ruby_hash
    render json: recipe_json_object
  end
end
