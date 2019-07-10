$(document).ready(function(){
    //alert('hai')
    $("#addbtn-c").click(function () {
        $(".chapter").append("<tr><td><input type='text' name='serialno' placeholder='serialno' style='font-size:15px;'></td><td><input type='text' name='material'placeholder='material'style='font-size:15px;'></td><td><input type='text' name='quantity'placeholder='quantity'style='font-size:15px;'></td><td><select name='select'><option value='yes'>Yes</option><option value='no'>NO</option></select></td><td><input type='date' name='date0'></td><td><input type='time' name='time0'></td></tr>")

        });
    });
