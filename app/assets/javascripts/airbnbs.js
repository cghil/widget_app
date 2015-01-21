$(document).ready(function(){
  $('.airbnb-button').on('click', findRooms)
})

function findRooms(evt){
  evt.preventDefault();
  var cityInput = $('.input-city-airbnb').val();
  var countryInput = $('.input-country-airbnb').val();
  var airbnbAjaxRequest = $.ajax({
    url: 'airbnbs/find',
    type: 'POST',
    data: {
    	city: cityInput,
    	country: countryInput
    }
  })
  airbnbAjaxRequest.done(getAirbnbData)
}

function getAirbnbData(reply){
  $('.removeable-places').remove();
  $('.title-airbnb').after()
}