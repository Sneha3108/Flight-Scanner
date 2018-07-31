var getCities = (searchTerm) => {
  return $.ajax({
    url: 'dummy-data/airports.json',
    type: 'get'
  })
}

export default getCities;
