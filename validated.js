document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    // Form input elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const termsError = document.getElementById('termsError');

    // Add input event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    termsCheckbox.addEventListener('change', validateTerms);

    // Form submission handler
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const areTermsAccepted = validateTerms();

        // If all validations pass, show success message
        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && areTermsAccepted) {
            form.style.display = 'none';
            successMessage.classList.remove('hidden');
            // In a real application, you would submit the form data to a server here
        }
    });

    // Validation functions
    function validateName() {
        const name = nameInput.value.trim();
        
        // Reset error state
        nameError.textContent = '';
        nameInput.classList.remove('input-error');
        
        // Check if empty
        if (name === '') {
            nameError.textContent = 'Name is required';
            nameInput.classList.add('input-error');
            return false;
        }
        
        // Check minimum length
        if (name.length < 3) {
            nameError.textContent = 'Name must be at least 3 characters long';
            nameInput.classList.add('input-error');
            return false;
        }
        
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        
        // Reset error state
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
        
        // Check if empty
        if (email === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('input-error');
            return false;
        }
        
        // Check email format using regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('input-error');
            return false;
        }
        
        return true;
    }

    function validatePassword() {
        const password = passwordInput.value;
        
        // Reset error state
        passwordError.textContent = '';
        passwordInput.classList.remove('input-error');
        
        // Check if empty
        if (password === '') {
            passwordError.textContent = 'Password is required';
            passwordInput.classList.add('input-error');
            return false;
        }
        
        // Check minimum length
        if (password.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            passwordInput.classList.add('input-error');
            return false;
        }
        
        // Check for at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one uppercase letter';
            passwordInput.classList.add('input-error');
            return false;
        }
        
        // Check for at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one lowercase letter';
            passwordInput.classList.add('input-error');
            return false;
        }
        
        // Check for at least one digit
        if (!/[0-9]/.test(password)) {
            passwordError.textContent = 'Password must contain at least one digit';
            passwordInput.classList.add('input-error');
            return false;
        }
        
        // Also validate confirm password field if it has a value
        if (confirmPasswordInput.value) {
            validateConfirmPassword();
        }
        
        return true;
    }

    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        // Reset error state
        confirmPasswordError.textContent = '';
        confirmPasswordInput.classList.remove('input-error');
        
        // Check if empty
        if (confirmPassword === '') {
            confirmPasswordError.textContent = 'Please confirm your password';
            confirmPasswordInput.classList.add('input-error');
            return false;
        }
        
        // Check if passwords match
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPasswordInput.classList.add('input-error');
            return false;
        }
        
        return true;
    }

    function validateTerms() {
        // Reset error state
        termsError.textContent = '';
        
        // Check if terms are accepted
        if (!termsCheckbox.checked) {
            termsError.textContent = 'You must accept the Terms and Conditions';
            return false;
        }
        
        return true;
    }
});