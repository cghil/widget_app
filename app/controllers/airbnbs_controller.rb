class AirbnbsController < ApplicationController
  def find
    city = params['city']
    country = params['country']
    city = city.gsub(/ /, '--')
    country = country.gsub(/ /, '--')
    combination = "#{city}--#{country}"
    search_results= Airbnb.search_city(combination)
    render json: search_results
  end
end