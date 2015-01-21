class AirbnbsController < ApplicationController
  def find
    city = params['/airbnbs/find']['search_city']
    country = params['/airbnbs/find']['search_country']
    city = city.gsub(/ /, '--')
    country = country.gsub(/ /, '--')
    byebug
  end
end
