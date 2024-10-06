// Form validation and submission handling
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Grab input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName  = document.getElementById('lastName').value.trim();
    const email     = document.getElementById('email').value.trim();
    const phone     = document.getElementById('phone').value.trim();
    const password  = document.getElementById('password').value.trim();
  
    // Simple validation
    let errorMessage = '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
  
    if (!firstName) {
      errorMessage = 'First Name is required.';
    } else if (!lastName) {
      errorMessage = 'Last Name is required.';
    } else if (!emailPattern.test(email)) {
      errorMessage = 'Please enter a valid email.';
    } else if (!phonePattern.test(phone)) {
      errorMessage = 'Please enter a valid 10-digit phone number.';
    } else if (password.length < 8) {
      errorMessage = 'Password must be at least 8 characters.';
    }
  
    // Show error message if validation fails
    const errorDiv = document.getElementById('error-message');
    if (errorMessage) {
      errorDiv.textContent = errorMessage;
      return;
    }
  
    // Log form data as object if validation passes
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      password: password
    };
  
    console.log("User Information => ",formData);
    errorDiv.textContent = '';  // Clear error message
  
    // Clear the form fields
    document.getElementById('registerForm').reset();
  });



  
  
  // Smooth scroll functionality
  const loginButton = document.querySelector('.login');
  const registerButton = document.querySelector('.register');
  
  function scrollToFormSection() {
    const formSection = document.getElementById('formSection');
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Add event listeners to the buttons
  loginButton.addEventListener('click', scrollToFormSection);
  registerButton.addEventListener('click', scrollToFormSection);
  