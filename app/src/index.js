import $ from 'jquery';
window.$ = $;
import activateTab from './components/searchTab';
import initDatePicker from './components/datePicker';
import getCities from './components/getCityList';
import { renderCityList, citySelection } from './components/cityAutoComplete.js';
import initPriceSlider from './components/priceSlider';
import searchTickets from './components/searchFlights.js';

var initFlightSearchApp = (function(){
    //cache elements for faster DOM manipulation (Don't touch DOM often, its slow :/ )
    var $searchContainer = $('.searchContainer'),
        $searchWidget = $('.searchWidget'),
        $searchResults = $('.searchResults');

    var onTabClick = function() {
			$searchWidget.find('.tabs li').on('click', function() {
					activateTab($(this));
			});
    }

    var onCitySearch = function() {
      $searchWidget.find('.citySearch').on('keyup', function() {
        var $thisInput = $(this),
            searchTerm = $thisInput.val(),
            cityList;

        getCities(searchTerm)
            .done( (data) => {
              console.log(data);
							renderCityList(data, $thisInput, searchTerm);
            });
      })
    }

    var onSearchFormSubmit = function() {
      $searchWidget.find('form').on('submit', (event) => {
        event.preventDefault();
        searchTickets();
      })
    }

    return {
        onTabClick,
        initDatePicker,
        onCitySearch,
        onSearchFormSubmit
    }
})();



$(document).ready(function() {
    initFlightSearchApp.onTabClick();
    initFlightSearchApp.initDatePicker();
    initFlightSearchApp.onCitySearch();
    citySelection();
    initPriceSlider();
    initFlightSearchApp.onSearchFormSubmit();

});
