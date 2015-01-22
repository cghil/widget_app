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
  if (reply.city !== ""){
    var cityName = reply.city.replace('--', ', ');
    cityName = toTitleCase(cityName)    
    var title = "<div class='removeable-places'><h2 class='text-center city-name'>"+cityName+"</h2></div>"
    $('.title-airbnb').after(title)
  }
  if (reply.city === ""){
    cityName = 'You Put A Blank Input In The Search Box'
    ar title = "<div class='removeable-places'><h2 class='text-center city-name'>"+cityName+"</h2></div>"
    $('.title-airbnb').after(title)
  }
  for(i=0; i<18; i++){
    var roomHtml = "<div class='room'><span class='price text-center'><b>$"+reply.prices[i]+"</b></span><a href='https://www.airbnb.com"+reply.urls[i]+"'><img class='resize thumbnail' src='"+reply.photos[i]+"'></a></div>";
    $('.city-name').after(roomHtml);
  }
}

// this is to capitalize the each word
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}