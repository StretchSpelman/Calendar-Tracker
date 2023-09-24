
$(document).ready(function() {
  $('.saveBtn').click(function(){
var timeBlockId= $(this).parent().attr('id');
var userInput=$(this).siblings('.description').val();
    localStorage.setItem(timeBlockId,userInput);
  });

  var currentHour = dayjs().format('H');
  $('.time-block').each(function() {
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour == currentHour) {
      $(this).addClass('present');
    } else if (timeBlockHour>currentHour) {
      $(this).addClass('future');
    }
  });

  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlockId);
    $(this).find('.description').val(userInput);
  });

  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));


});

