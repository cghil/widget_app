class AirBnBController < ApplicationController
  def search
    city = params['/air_bnb/search']['search_city']
    country = params['/air_bnb/search']['search_country']
    city.gsub(/ /, "--")!
    country.gsub(/ /, "--")!
  end
end
