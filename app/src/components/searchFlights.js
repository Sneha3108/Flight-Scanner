import getTickets from './getTicketsData';

var searchTickets = () => {
  getTickets()
    .done((data) => {
      console.log(data);
      filterTickets(data);
    })
    .fail(function(data) {

    })
    .always(function() {

    });
}

var filterTickets = tickets => {
  var $searchForm = $('.searchWidget form'),
      originCity = $searchForm.find('[name=originCity]').val(),
      destinationCity = $searchForm.find('[name=destinationCity]').val(),
      primaryDate =  $searchForm.find('[name=primaryDate]').val().replace(/-/g,''),
      returnDate =  $searchForm.find('[name=returnDate]').val().replace(/-/g,''),
      passengers = $searchForm.find('[name=passengers]').val(),
      price = $searchForm.find('.priceSlider').val();

  var ticketsAvailableOnDate = {
    primaryTicket : [],
    returnTicket : []
  }

  var primaryTicket = [], returnTicket = [];

    primaryTicket.push(tickets[primaryDate]);
    returnTicket.push(tickets[returnDate]);

    primaryTicket = ticketsAvailableOnDate.primaryTicket.filter(ticket => {

    });
}

export default searchTickets;
