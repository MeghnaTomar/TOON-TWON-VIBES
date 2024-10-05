// Add playful interactions, such as color changes on scroll or click.
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
// Array of fun cartoon quotes
const quotes = [
    "I'm not bad. I'm just drawn that way! - Jessica Rabbit",
    "Zoinks! - Shaggy",
    "What's up, Doc? - Bugs Bunny",
    "D'oh! - Homer Simpson",
    "Yabba Dabba Doo! - Fred Flintstone",
    "I tawt I taw a puddy tat! - Tweety Bird",
    "To infinity and beyond! - Buzz Lightyear",
    "Wubba Lubba Dub Dub! - Rick Sanchez",
  ];
  
  // Function to display a random cartoon quote
  document.getElementById('fun-button').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-box').textContent = randomQuote;
  });
// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting (since there's no backend)
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple form validation
    if (name && email && message) {
      document.getElementById('form-message').textContent = "Thank you, " + name + "! Your message has been sent.";
      
      // Clear the form
      document.getElementById('contact-form').reset();
    } else {
      document.getElementById('form-message').textContent = "Please fill in all fields before submitting.";
      document.getElementById('form-message').style.color = '#ff4500';
    }
  });
      