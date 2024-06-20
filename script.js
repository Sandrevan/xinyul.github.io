document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const toggleButton = document.getElementById('night-mode-toggle');
  
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            localStorage.setItem('nightMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
            moonIcon.style.display = body.classList.contains('dark-mode') ? 'none' : 'inline';
            sunIcon.style.display = body.classList.contains('dark-mode') ? 'inline' : 'none';
        });
    }
  
    // Rest of your code...
  });
  
  $(document).ready(function() {
      $('li').hover(
        function() {
          // This function is triggered when the mouse enters the element
          $(this).css({
            'font-weight': 'bold', // Optional: make text bold on hover
            // Add other styles if needed
          });
        }, 
        function() {
          // This function is triggered when the mouse leaves the element
          $(this).css({
            'font-weight': 'normal', // Revert to normal weight
            // Revert other styles if changed
          });
        }
      );
    });
