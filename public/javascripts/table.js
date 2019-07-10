$(document).ready(function(){
var isEditing = false,
  tempNameValue = "",
  tempDataValue = "";
  tempData1Value = "";
  tempData2Value = "";
  tempData3Value = "";
  tempData4Value = "";
  // Handles live/dynamic element events, i.e. for newly created edit buttons
  $(document).on('click', '.edit', function() {
    var parentRow = $(this).closest('tr'),
      tableBody = parentRow.closest('tbody'),
      tdName = parentRow.children('td.name'),
      tdData = parentRow.children('td.data');
      tdData1 = parentRow.children('td.data1');
      tdData2 = parentRow.children('td.data2');
      tdData3 = parentRow.children('td.data3');
      tdData4 = parentRow.children('td.data4');
    if (isEditing) {
      var nameInput = tableBody.find('input[name="name"]'),
        dataInput = tableBody.find('input[name="data"]'),
        data1Input = tableBody.find('input[name="data1"]'),
        data2Input = tableBody.find('input[name="data2"]'),
        data3Input = tableBody.find('input[name="data3"]'),
        data4Input = tableBody.find('input[name="data4"]'),
        tdNameInput = nameInput.closest('td'),
        tdDataInput = dataInput.closest('td'),
        tdData1Input = data1Input.closest('td'),
        tdData2Input = data2Input.closest('td'),
        tdData3Input = data3Input.closest('td'),
        tdData4Input = data4Input.closest('td'),
        currentEdit = tdNameInput.parent().find('td.edit');
      if ($(this).is(currentEdit)) {
        // Save new values as static html
        var tdNameValue = nameInput.prop('value'),
          tdDataValue = dataInput.prop('value');
          tdData1Value = data1Input.prop('value');
          tdData2Value = data2Input.prop('value');
          tdData3Value = data3Input.prop('value');
          tdData4Value = data4Input.prop('value');
        tdNameInput.empty();
        tdDataInput.empty();
        tdData1Input.empty();
        tdData2Input.empty();
        tdData3Input.empty();
        tdData4Input.empty();
        tdNameInput.html(tdNameValue);
        tdDataInput.html(tdDataValue);
        tdData1Input.html(tdData1Value);
        tdData2Input.html(tdData2Value);
        tdData3Input.html(tdData3Value);
        tdData4Input.html(tdData4Value);
      } else {
        // Restore previous html values
        tdNameInput.empty();
        tdDataInput.empty();
        tdData1Input.empty();
        tdData2Input.empty();
        tdData3Input.empty();
        tdData4Input.empty();
        tdNameInput.html(tempNameValue);
        tdDataInput.html(tempDataValue);
        tdData1Input.html(tempData1Value);
        tdData2Input.html(tempData2Value);
        tdData3Input.html(tempData3Value);
        tdData4Input.html(tempData4Value);
      }
      // Display static row
      currentEdit.html('<i class="fa fa-pencil" aria-hidden="true"></i>');
      isEditing = false;
    } else {
      // Display editable input row
      isEditing = true;
      $(this).html('<i class="fa fa-floppy-o" aria-hidden="true"></i>');
      var tdNameValue = tdName.html(),
        tdDataValue = tdData.html();
        tdData1Value = tdData1.html();
        tdData2Value = tdData2.html();
        tdData3Value = tdData3.html();
        tdData4Value = tdData4.html();
      // Save current html values for canceling an edit
      tempNameValue = tdNameValue;
      tempDataValue = tdDataValue;
      tempData1Value = tdData1Value;
      tempData2Value = tdData2Value;
      tempData3Value = tdData3Value;
      tempData4Value = tdData4Value;
      // Remove existing html values
      tdName.empty();
      tdData.empty();
      tdData1.empty();
      tdData2.empty();
      tdData3.empty();
      tdData4.empty();
      // Create input forms
      tdName.html('<input type="text" name="name" value="' + tdNameValue + '">');
      tdData.html('<input type="text" name="data" value="' + tdDataValue + '">');
      tdData1.html('<input type="text" name="data1" value="' + tdData1Value + '">');
      tdData2.html('<select><option>yes</option><option>no</option> </select>');
      tdData3.html('<input type="date" name="data3" value="' + tdData3Value + '">');
      tdData4.html('<input type="time" name="data4" value="' + tdData4Value + '">');

    }
  });
  // Handles live/dynamic element events, i.e. for newly created trash buttons
  $(document).on('click', '.trash', function() {
    // Turn off editing if row is current input
    if (isEditing) {
      var parentRow = $(this).closest('tr'),
        tableBody = parentRow.closest('tbody'),
        tdInput = tableBody.find('input').closest('td'),
        currentEdit = tdInput.parent().find('td.edit'),
        thisEdit = parentRow.find('td.edit');
      if (thisEdit.is(thisEdit)) {
        isEditing = false;
      }
    }
    // Remove selected row from table
    $(this).closest('tr').remove();
  });
  $('.new-row').on('click', function() {
    var tableBody = $(this).closest('tbody'),
       trNew = '<tr><td class="name"><input type="text" name="name" value=""></td><td class="data"><input type="text" name="data" value=""></td><td class="data1"><input type="text" name="data1" value=""></td><td class="data2"><select value=""><option>yes</option><option>no</option> </select></td><td class="data3"><input type="date" name="data3" value=""></td><td class="data4"><input type="time" name="data4" value=""></td><td class="edit"><i class="fa fa-floppy-o" aria-hidden="true"></i></td><td class="trash"><i class="fa fa-ban" aria-hidden="true"></i></td></tr>';
    if (isEditing) {
      var nameInput = tableBody.find('input[name="name"]'),
        dataInput = tableBody.find('input[name="data"]'),
        dataInput1 = tableBody.find('input[name="data1"]'),
        dataInput2 = tableBody.find('input[name="data2"]'),
        dataInput3 = tableBody.find('input[name="data3"]'),
        dataInput4 = tableBody.find('input[name="data4"]'),
        tdNameInput = nameInput.closest('td'),
        tdDataInput = dataInput.closest('td'),
        tdDataInput1 = dataInput1.closest('td'),
        tdDataInput2 = dataInput2.closest('td'),
        tdDataInput3 = dataInput3.closest('td'),
        tdDataInput4 = dataInput4.closest('td'),
        currentEdit = tdNameInput.parent().find('td.edit');
      // Get current input values for newly created input cases
      var newNameInput = nameInput.prop('value'),
        newDataInput = dataInput.prop('value');
        newDataInput1 = dataInput1.prop('value');
        newDataInput2 = dataInput2.prop('value');
        newDataInput3 = dataInput3.prop('value');
        newDataInput4 = dataInput4.prop('value');
      // Restore previous html values
      tdNameInput.empty();
      tdDataInput.empty();
      tdDataInput1.empty();
      tdDataInput2.empty();
      tdDataInput3.empty();
      tdDataInput4.empty();
      tdNameInput.html(newNameInput);
      tdDataInput.html(newDataInput);
      tdDataInput1.html(newDataInput1);
      tdDataInput2.html(newDataInput2);
      tdDataInput3.html(newDataInput3);
      tdDataInput4.html(newDataInput4);
      // Display static row
      currentEdit.html('Edit');
    }
    isEditing = true;
    tableBody.find('tr:last').before(trNew);
  });
});