$('document').ready(function() {
  $('.Date').datepicker();
  $('.Date').datepicker('setDate', 'today');
  $(".Date").datepicker( "option", "dateFormat", "dd-mm-yy" );

     showAnim: "fold"
});