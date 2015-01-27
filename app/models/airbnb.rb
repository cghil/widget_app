class Airbnb < ActiveRecord::Base
  require 'open-uri'
  def self.get_rentals
    array_of_cities = ['Berlin--Germany', 'San-Francisco--CA', 'Barcelona--Spain', 'Budapest--Hungary', 'New-York--NY', 'Munich--Germany'].sample
    url = "https://www.airbnb.com/s/#{array_of_cities}"
    doc = Nokogiri::HTML(open(url))
    #i am filtering through all of this fucking html
    @urls = []
    url_nodes = doc.css('div.listing')
    13.times do
      url_nodes.pop
    end
    url_nodes.each do |url|
      @urls << url.attributes['data-url'].value
    end
    @photos = []
    (0..(@urls.length-1)).each do |room|
      room_url = "https://www.airbnb.com#{@urls[room]}"
      room_doc= Nokogiri::HTML(open(room_url))
      room_nokogiri = room_doc.at_css('.cover-img')
      room_image= room_nokogiri.attributes["style"].value
      my_match = /url/.match(room_image)
      room_photo_url = my_match.post_match
      room_photo_url = room_photo_url.gsub(/[()]/, '')
      @photos << room_photo_url
    end
    @prices = []
    price_nodes = doc.css('span.price-amount')
    13.times do
      price_nodes.pop
    end
    price_nodes.each do |price|
      @prices << price.text
    end
    @airbnb_hash = {city: array_of_cities, urls: @urls, prices: @prices, photos: @photos}
  end

  def self.search_city(city)
    url = "https://www.airbnb.com/s/#{city}"
    doc = Nokogiri::HTML(open(url))
    @urls = []
    url_nodes = doc.css('div.listing')
    13.times do
      url_nodes.pop
    end
    url_nodes.each do |url|
      @urls << url.attributes['data-url'].value
    end
    @photos = []
    (0..(@urls.length-1)).each do |room|
      room_url = "https://www.airbnb.com#{@urls[room]}"
      room_doc= Nokogiri::HTML(open(room_url))
      room_nokogiri = room_doc.at_css('.cover-img')
      room_image= room_nokogiri.attributes["style"].value
      my_match = /url/.match(room_image)
      room_photo_url = my_match.post_match
      room_photo_url = room_photo_url.gsub(/[()]/, '')
      @photos << room_photo_url
    end
    @prices = []
    price_nodes = doc.css('span.price-amount')
     13.times do
      price_nodes.pop
    end
    price_nodes.each do |price|
      @prices << price.text
    end
    @airbnb_hash = {city: city, urls: @urls, prices: @prices, photos: @photos}
  end
end
