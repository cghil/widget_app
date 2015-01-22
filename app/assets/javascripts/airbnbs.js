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
  var template = _.template("<div class='removeable-places'><h2 class='text-center'><%=reply.city.replace('--', ' ')%></h2>
    <% for(i = 0; i < 18; i++){
      <div class='room'> 
        <span class='price text-center'> <b> <%= reply.prices[i] %> </b> </span>
        <a href='https://www.airbnb.com<%=reply.urls[i]%>'> <img class='resize thumbnail' src='<%= reply.photos[i]%>'></a>
      </div>
    } %> 
    </div>")
  $('.title-airbnb').after(template)
}