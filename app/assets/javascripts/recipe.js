$(document).ready(function(){
  $('.search-button').on('click', getNewRecipes)
});

function getNewRecipes(evt){
  evt.preventDefault();
  var recipesearchForm = $('.input-recipe-search').serialize();
  var recipeAjaxRequest = $.ajax({
    url: '/recipe/search',
    type: 'POST',
    data: recipesearchForm
  })
  recipeAjaxRequest.done(getRecipeData)
}

function getRecipeData(reply){
  $('.recipes').remove();
  var lengthOfRecipes= reply.recipes.length
  $('h3.recipe-title').after('<div class="recipes"></div>')
  for (i=0; i<lengthOfRecipes; i++){
    var html = '<p class="text-center">'+reply.recipes[i].title+'</p><a href='+reply.recipes[i].source_url+'><img src='+reply.recipes[i].image_url+' class="resize thumbnail"></a>'
    $('.recipes').append(html)
  }
}