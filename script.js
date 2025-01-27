document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display a success message
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = Thank you, ${name}! Your message has been sent.;
    formMessage.style.color = 'green';
  
    // Clear the form
    document.getElementById('contactForm').reset();
  });