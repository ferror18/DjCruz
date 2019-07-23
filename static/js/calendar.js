var table = document.getElementById("calendar");
var currentMonth = 0
function nameofmonth(p1) {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if(typeof p1 !== 'number'){
    var m = p1.getMonth();
  }else{
    var m = p1;
  }
  return months[m]
};
function changeondoc(id, cont){
  currentElement = document.getElementById(id);
  return currentElement.innerHTML = cont;
};
function nextMonth() {
  window.currentMonth = currentMonth + 1;
  SetCalendar(currentMonth);
}
function previousMonth(){
  window.currentMonth = currentMonth - 1;
  SetCalendar(currentMonth);
}
function SetCalendar(p1 = 0) {
  var x = new Date()
  // Set Year and months
  var z = x
  z.setMonth(z.getMonth() + p1)
  var nocm = nameofmonth(z);
  var nocmString = nocm + ' ' + x.getFullYear()
  changeondoc('a', nocmString)
  // Set the day in the collumns
  x.setMonth(x.getMonth() + p1)
  x.setDate(1)
  var xw = x.getDay()
  var d = x.getMonth()
  var y = (-xw + 1)
  x.setDate(y)
  for (var i = 2, row; row = table.rows[i]; i++) {
     //iterate through rows
     //rows would be accessed using the "row" variable assigned in the for loop
     for (var j = 0, col; col = row.cells[j]; j++) {
       //iterate through columns
       //columns would be accessed using the "col" variable assigned in the for loop
       col.innerText = x.getDate();
       y++;
       x.setMonth(d)
       x.setDate(y);
    }
  }
}
SetCalendar(currentMonth)
