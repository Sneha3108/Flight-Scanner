import datepicker from '@fengyuanchen/datepicker';
// import $ from 'jquery';

var today = new Date();
dd = today.getDate(),
mm = today.getMonth()+1, //January is 0!
yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

var initDatePicker = () => {
  $('[data-toggle="datepicker"]').datepicker({
    autoHide: true,
    startDate: today,
    format: 'dd-mm-yyyy'
  });
}


export default initDatePicker;
