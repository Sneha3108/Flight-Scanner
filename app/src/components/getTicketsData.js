var getTickets = () => {
  return $.ajax({
    url: 'dummy-data/tickets.json',
    type: 'get'
  })
}

export default getTickets;
