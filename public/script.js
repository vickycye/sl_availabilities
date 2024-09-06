document.addEventListener('DOMContentLoaded', function() {
    const welcome = document.querySelector('.welcome');
    const bookingMessage = document.querySelector('.booking-message');
    const verticalBar = document.querySelector('.vertical-bar');
  
    setTimeout(() => {
      verticalBar.classList.add('show'); // Fade in the bar first
    }, 300); // Slight delay before bar appears
  
    setTimeout(() => {
      welcome.classList.add('show');
      bookingMessage.classList.add('show'); // Slide in the text elements
    }, 600); // Delay after the bar appears
});
  
