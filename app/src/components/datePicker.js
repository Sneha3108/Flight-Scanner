import datepicker from '@fengyuanchen/datepicker';
// import $ from 'jquery';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

var initDatePicker = () => {
  $('[data-toggle="datepicker"]').datepicker({
    autoHide: true,
    startDate: today,
    format: 'dd-mm-yyyy'
  });
}


export default initDatePicker;
