var today = new Date()
var table = document.getElementById("calendar");
var currentMonth = today.getMonth()
var currentYear = today.getFullYear()
var currentDayofWeek = today.getDay()
var currentDate = today.getDate()
var start = 1
var start2 = null
var e = 0
var fwdm = (currentDate % 7) / (currentDayofWeek)
function pmsd() {
  var x = (daysinmonth(currentMonth - 1))-(firstCurrentMonth()-1)
  window.start2 = x
}
pmsd()
function nameofmonth(p1) {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if (typeof p1 !== 'number') {
    var m = p1.getMonth();
  } else {
    var m = p1;
  }
  return months[m]
};
function changeondoc(id, cont){
  currentElement = document.getElementById(id);
  return currentElement.innerHTML = cont;
};
function daysinmonth(p1){
  var dayspermonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  return dayspermonth[p1]
};
function checkdim(p1, p2) {
  var m = p1.getMonth();
  var dim = daysinmonth(m);
  return p2 < dim
}
function popDay() {
  for (var i = 2, row; row = table.rows[i]; i++) {
     //iterate through rows
     //rows would be accessed using the "row" variable assigned in the for loop
     for (var j = 0, col; col = row.cells[j]; j++) {
       //iterate through columns
       //columns would be accessed using the "col" variable assigned in the for loop
       if (e < firstCurrentMonth()){
           col.innerText = start2
           start2 = start2 + 1
           e = e + 1
         } else if (start <= daysinmonth(currentMonth)){
           col.innerText = start;
           start = start + 1;
         } else {
         start = 1
         col.innerText = start;
         start = start + 1;
       }
     }
  }
  window.start = 1
  pmsd()
  window.e = 0
}
function popMoye() {
  var nocm = nameofmonth(currentMonth);
  var nocmString = nocm + ' ' + currentYear
  changeondoc('a', nocmString)
}
function nextMonth() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear = currentYear + 1;
  } else {
    currentMonth = currentMonth + 1;
  }
  popDay()
  popMoye()
}
function previousMonth() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear = currentYear - 1;
  } else {
    currentMonth = currentMonth - 1;
  }
  popDay()
  popMoye()
}
popDay()
popMoye()
