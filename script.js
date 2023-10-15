$(document).ready(function () {
    $('.save-button').click(function () {
      const timeBlockId = $(this).closest('.time-block').attr('id');
      const userInput = $(this).closest('.time-block').find('textarea').val();
      localStorage.setItem(timeBlockId, userInput);
    });
  
    const currentTime = dayjs().format('HH');
  
    $('.time-block').each(function() {
      const blockID = $(this).attr('id').split('-')[1];
  
      if (blockID < currentTime) {
        $(this).addClass('past');
      } else if (blockID === currentTime) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
  
      const savedUserInput = localStorage.getItem(`time-block-${blockID}`);
      $(this).find('textarea').val(savedUserInput || '');
    });
  
    const currentDateElement = $('#current-date');
    const currentDate = dayjs().format('MMMM D, YYYY');
  
    currentDateElement.text(currentDate);
  });
