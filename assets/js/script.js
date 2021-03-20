// global variables
var containerEl = $('.container');
var time = parseInt(moment().format('H'));

// write today's date on top
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

// div elements to contain each hour block
var div9am = $('<div>').val(9);
var div10am = $('<div>').val(10);
var div11am = $('<div>').val(11);
var div12pm = $('<div>').val(12);
var div1pm = $('<div>').val(13);
var div2pm = $('<div>').val(14);
var div3pm = $('<div>').val(15);
var div4pm = $('<div>').val(16);
var div5pm = $('<div>').val(17);

// labels for each hour
var hourLabel9am = $('<div>').text('9AM')
var hourLabel10am = $('<div>').text('10AM')
var hourLabel11am = $('<div>').text('11AM')
var hourLabel12pm = $('<div>').text('12PM')
var hourLabel1pm = $('<div>').text('1PM')
var hourLabel2pm = $('<div>').text('2PM')
var hourLabel3pm = $('<div>').text('3PM')
var hourLabel4pm = $('<div>').text('4PM')
var hourLabel5pm = $('<div>').text('5PM')
var hourLabel6pm = $('<div>').text('6PM')

// add classes to labels
hourLabel9am.addClass('hourlabel col-md-1');
hourLabel10am.addClass('hourlabel col-md-1');
hourLabel11am.addClass('hourlabel col-md-1');
hourLabel12pm.addClass('hourlabel col-md-1');
hourLabel1pm.addClass('hourlabel col-md-1');
hourLabel2pm.addClass('hourlabel col-md-1');
hourLabel3pm.addClass('hourlabel col-md-1');
hourLabel4pm.addClass('hourlabel col-md-1');
hourLabel5pm.addClass('hourlabel col-md-1');

// inputs for each hour, and get values from local storage
var input9am = $('<input>').val(localStorage.getItem('9am'));
var input10am = $('<input>').val(localStorage.getItem('10am'));
var input11am = $('<input>').val(localStorage.getItem('11am'));
var input12pm = $('<input>').val(localStorage.getItem('12pm'));
var input1pm = $('<input>').val(localStorage.getItem('1pm'));
var input2pm = $('<input>').val(localStorage.getItem('2pm'));
var input3pm = $('<input>').val(localStorage.getItem('3pm'));
var input4pm = $('<input>').val(localStorage.getItem('4pm'));
var input5pm = $('<input>').val(localStorage.getItem('5pm'));

// Add classes to inputs
input9am.addClass('input col-md-10');
input10am.addClass('input col-md-10');
input11am.addClass('input col-md-10');
input12pm.addClass('input col-md-10');
input1pm.addClass('input col-md-10');
input2pm.addClass('input col-md-10');
input3pm.addClass('input col-md-10');
input4pm.addClass('input col-md-10');
input5pm.addClass('input col-md-10');

// buttons for each hour with values
var saveBtn9am = $('<button>').val(9);
var saveBtn10am = $('<button>').val(10);
var saveBtn11am = $('<button>').val(11);
var saveBtn12pm = $('<button>').val(12);
var saveBtn1pm = $('<button>').val(1);
var saveBtn2pm = $('<button>').val(2);
var saveBtn3pm = $('<button>').val(3);
var saveBtn4pm = $('<button>').val(4);
var saveBtn5pm = $('<button>').val(5);

// Add classes to buttons and set text
saveBtn9am.addClass('saveBtn col-md-1 fas fa-save').val(9);
saveBtn10am.addClass('saveBtn col-md-1 fas fa-save').val(10);
saveBtn11am.addClass('saveBtn col-md-1 fas fa-save').val(11);
saveBtn12pm.addClass('saveBtn col-md-1 fas fa-save').val(12);
saveBtn1pm.addClass('saveBtn col-md-1 fas fa-save').val(1);
saveBtn2pm.addClass('saveBtn col-md-1 fas fa-save').val(2);
saveBtn3pm.addClass('saveBtn col-md-1 fas fa-save').val(3);
saveBtn4pm.addClass('saveBtn col-md-1 fas fa-save').val(4);
saveBtn5pm.addClass('saveBtn col-md-1 fas fa-save').val(5);

// build each row
div9am.addClass('row').append(hourLabel9am).append(input9am).append(saveBtn9am);
div10am.addClass('row').append(hourLabel10am).append(input10am).append(saveBtn10am);
div11am.addClass('row').append(hourLabel11am).append(input11am).append(saveBtn11am);
div12pm.addClass('row').append(hourLabel12pm).append(input12pm).append(saveBtn12pm);
div1pm.addClass('row').append(hourLabel1pm).append(input1pm).append(saveBtn1pm);
div2pm.addClass('row').append(hourLabel2pm).append(input2pm).append(saveBtn2pm);
div3pm.addClass('row').append(hourLabel3pm).append(input3pm).append(saveBtn3pm);
div4pm.addClass('row').append(hourLabel4pm).append(input4pm).append(saveBtn4pm);
div5pm.addClass('row').append(hourLabel5pm).append(input5pm).append(saveBtn5pm);

// place rows in document
containerEl.append(div9am);
containerEl.append(div10am);
containerEl.append(div11am);
containerEl.append(div12pm);
containerEl.append(div1pm);
containerEl.append(div2pm);
containerEl.append(div3pm);
containerEl.append(div4pm);
containerEl.append(div5pm);

// change input color based on the time
function updateInputColors() {

  if (div9am.val() < time) {
      input9am.addClass('past')
  } else if (div9am.val() > time) {
      input9am.addClass('future')
  } else {
      input9am.addClass('present')
  }
  if (div10am.val() < time) {
      input10am.addClass('past')
  } else if (div9am.val() > time) {
      input10am.addClass('future')
  } else {
      input10am.addClass('present')
  }
  if (div11am.val() < time) {
      input11am.addClass('past')
  } else if (div11am.val() > time) {
      input11am.addClass('future')
  } else {
      input11am.addClass('present')
  }
  if (div12pm.val() < time) {
      input12pm.addClass('past')
  } else if (div12pm.val() > time) {
      input12pm.addClass('future')
  } else {
      input12pm.addClass('present')
  }
  if (div1pm.val() < time) {
      input1pm.addClass('past')
  } else if (div1pm.val() > time) {
      input1pm.addClass('future')
  } else {
      input1pm.addClass('present')
  }
  if (div2pm.val() < time) {
      input2pm.addClass('past')
  } else if (div2pm.val() > time) {
      input2pm.addClass('future')
  } else {
      input2pm.addClass('present')
  }
  if (div3pm.val() < time) {
      input3pm.addClass('past')
  } else if (div3pm.val() > time) {
      input3pm.addClass('future')
  } else {
      input3pm.addClass('present')
  }
  if (div4pm.val() < time) {
      input4pm.addClass('past')
  } else if (div4pm.val() > time) {
      input4pm.addClass('future')
  } else {
      input4pm.addClass('present')
  }
  if (div5pm.val() < time) {
      input5pm.addClass('past')
  } else if (div5pm.val() > time) {
      input5pm.addClass('future')
  } else {
      input5pm.addClass('present')
  }
}

// Save values fo inputs to localstorage
$('.saveBtn').on("click", function () {
  var btnClicked = this.value;

  if (btnClicked == 9) {
      localStorage.setItem('9am', input9am.val());
  } else if (btnClicked == 10) {
      localStorage.setItem('10am', input10am.val());
  } else if (btnClicked == 11) {
      localStorage.setItem('11am', input11am.val());
  } else if (btnClicked == 12) {
      localStorage.setItem('12pm', input12pm.val());
  } else if (btnClicked == 1) {
      localStorage.setItem('1pm', input1pm.val());
  } else if (btnClicked == 2) {
      localStorage.setItem('2pm', input2pm.val());
  } else if (btnClicked == 3) {
      localStorage.setItem('3pm', input3pm.val());
  } else if (btnClicked == 4) {
      localStorage.setItem('4pm', input4pm.val());
  } else if (btnClicked == 5) {
      localStorage.setItem('5pm', input5pm.val());
  }
})

updateInputColors();