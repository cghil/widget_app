class Airbnb < ActiveRecord::Base
  require 'open-uri'
  def self.get_rentals
    array_of_cities = ['Berlin--Germany', 'San-Francisco--CA', 'Barcelona--Spain', 'Budapest--Hungary', 'New-York--NY', 'Munich--Germany'].sample
    url = "https://www.airbnb.com/s/#{array_of_cities}"
    doc = Nokogiri::HTML(open(url))
    #i am filtering through all of this fucking html
    price_nodes = doc.css('span.price-amount')
    prices = []
    price_nodes.each do |price|
      prices << price.text
    end
    photos_nodes = doc.css('.img-responsive-height')
    photos = []
    photos_nodes.each do |image_url|
      photos << image_url.attributes['src'].value
    end
    byebug
  end
end
