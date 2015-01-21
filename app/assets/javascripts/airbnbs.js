$(document).ready(function(){
  $('airbnb-button').on('click', findRooms)
})

function findRooms(evt){
  evt.preventDefault();
  var airbnbAjaxRequest = $.ajax({
    url: 'airbnbs/find',
    type: 'POST'
  })
  airbnbAjaxRequest.done(getAirbnbData)
}

function getAirbnbData(reply){
  $('removeable-places').remove();
}