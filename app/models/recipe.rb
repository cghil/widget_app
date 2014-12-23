class Recipe < ActiveRecord::Base
  include HTTParty
  def self.get_recipe
    select_type = ['beef', 'chicken', 'pork', 'potato', 'chinese', 'burger', 'sandwich'].sample
    api_key = ENV['API_RECIPE']
    @response = HTTParty.get("http://food2fork.com/api/search?key=#{api_key}&q=chicken")
    JSON.parse(@response)
  end
end
