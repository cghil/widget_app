class Airbnb < ActiveRecord::Base
  require 'open-uri'
  def self.get_rentals
    array_of_cities = ['Berlin--Germany', 'San-Francisco--CA', 'Barcelona--Spain', 'Budapest--Hungary', 'New-York--NY', 'Munich--Germany'].sample
    url = "https://www.airbnb.com/s/#{array_of_cities}"
    doc = Nokogiri::HTML(open(url))
    listings = doc.css('.outer-listings-container')
    byebug
  end
end
