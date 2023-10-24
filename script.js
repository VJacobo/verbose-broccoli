// call the script to load
$(document).ready(function () {
    $('.save-button').click(function () {
      const timeBlockId = $(this).closest('.time-block').attr('id');
      const userInput = $(this).closest('.time-block').find('textarea').val();
      localStorage.setItem(timeBlockId, userInput);
    });
  // setting the current time as a variable in the function
    const currentTime = dayjs().format('HH');

  // each of the time blocks (9am, 10am, 11am etc..) has its own function, The attribute of the different ID will be seperated into different times.
    $('.time-block').each(function() {
      const blockID = $(this).attr('id').split('-')[1];

  // The function is now weeding out what has been in the past, the present and whats the future. First it checks for the past (in red per CSS), then future (grey), then the script checks for the future(green)
      if (blockID < currentTime) {
        $(this).addClass('past');
      } else if (blockID === currentTime) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
  

  // localStorage.get item will be saving the users input in each time block, in the blockID class. This will saving the user input in the textArea
      const savedUserInput = localStorage.getItem(`time-block-${blockID}`);
      $(this).find('textarea').val(savedUserInput || '');
    });
  // The Current Date is set up as a variable, as well as the current date. The current date is equal to the "MMMM D, YYYY"
    const currentDateElement = $('#current-date');
    const currentDate = dayjs().format('MMMM D, YYYY');
  // Lastly the current date will will be shown in text.
    currentDateElement.text(currentDate);
  });
