$(document).ready(function(){
$('.remove').click(function(){
  var id=$(this).val();
  //alert(id);
  $.post("/remove",{no:id},function(data){
    location.reload('/');
  });
});
$('.edit').click(function(){
  var id=$('#out').val();
  //alert(id);
$.post("/edit",{no:id},function(data){
  //alert(data);
  var a=JSON.stringify(data);
  //alert(a);
  var parseddata=JSON.parse(a);
  //alert(parseddata[0].products.outwardno);
  $("#outwardno2").val(parseddata[0].products.outwardno);
  $("#select2").val(parseddata[0].products.reason);
  $("#date2").val(parseddata[0].products.date);
  $("#time2").val(parseddata[0].products.time);
  $("#source2").val(parseddata[0].products.from);
  $("#destination2").val(parseddata[0].products.to);
  $("#contactno2").val(parseddata[0].products.cno);
  $("#vehicleno2").val(parseddata[0].products.vno);
  $("#vehicletype2").val(parseddata[0].products.vtype);
  $("#personname2").val(parseddata[0].products.name1);
  $("#personno2").val(parseddata[0].products.pno);
  $("#splperson2").val(parseddata[0].products.splperson);
  $("#remarks2").val(parseddata[0].products.remarks);
  $("#sno2").val(parseddata[0].products.serialno[0]);
  $("#material2").val(parseddata[0].products.material[0]);
  $("#quantity2").val(parseddata[0].products.quantity[0]);
  $("#select21").val(parseddata[0].products.select[0]);
  $("#date21").val(parseddata[0].products.date0[0]);
  $("#time21").val(parseddata[0].products.time0[0]);
  
  });
  $(".dontshow").show();
});	
});
