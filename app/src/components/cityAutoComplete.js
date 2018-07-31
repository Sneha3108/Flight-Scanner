// import $ from 'jquery';
import Handlebars from 'handlebars/dist/handlebars.min.js';


var source   = document.getElementById("cityListTemplate").innerHTML;
var template = Handlebars.compile(source);

var renderCityList = (cities, $thisInput, searchTerm) => {
  var citiesFiltered = cities.filter((city) => {
    if(city.citiName.indexOf(searchTerm) != -1 || city.name.indexOf(searchTerm) != -1){
      return true;
    }
    else return false;
  });

  var context = citiesFiltered;
  var html = template(context);
  $thisInput.siblings('.autocomplete').remove();
  $thisInput.parent().append(html)
}

var citySelection = () => {
  $('.citySearchContainer').on('click', '.autocomplete li', function() {
    $(this).parents('.citySearchContainer').find('.citySearch').val($(this).text());
    $(this).parent().hide();
  })
}

export { renderCityList, citySelection }
