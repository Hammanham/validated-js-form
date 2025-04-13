# JavaScript Form Validation

## Project Overview
This project implements a client-side form validation system using HTML, CSS, and JavaScript. The form collects user registration information and validates the input according to specified requirements before submission.

## Features
- Real-time validation as the user types
- Comprehensive validation rules for:
  - Name (minimum length)
  - Email (format verification)
  - Password (complexity requirements)
  - Password confirmation (matching)
  - Terms and conditions acceptance
- Visual feedback with error messages
- Success message upon successful validation

## Requirements Met
### Form Structure
- Name field: Required, must be at least 3 characters long
- Email field: Required, must be a valid email address format
- Password field: Required, must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
- Confirm Password field: Required, must match the password field
- Submit button: Processes the form data after validation

### Validation Rules
- **Name Validation:**
  - Checks if the field is not empty
  - Ensures the name is at least 3 characters long
- **Email Validation:**
  - Checks if the field is not empty
  - Uses a regular expression to validate the email format
- **Password Validation:**
  - Checks if the field is not empty
  - Ensures the password is at least 8 characters long
  - Verifies the password contains at least one uppercase letter, one lowercase letter, and one digit
- **Confirm Password Validation:**
  - Checks if the field is not empty
  - Ensures it matches the password field
- **Terms and Conditions:**
  - Requires user acceptance before form submission

### Error Handling
- Displays specific error messages next to each field when validation fails
- Dynamically adds or removes error messages based on user input
- Applies visual styling to indicate invalid fields

### Form Submission
- Prevents the form from submitting if any validation fails
- Displays a success message when all validations pass

## File Structure
- **index.html**: Contains the form structure and HTML elements
- **styles.css**: Contains all styling for the form and feedback elements
- **script.js**: Contains the JavaScript validation logic

## Implementation Details

### HTML
The HTML file sets up the form structure with appropriate input fields, labels, and error message containers. It also includes the success message element that appears upon successful validation.

### CSS
The CSS file provides styling for:
- Form layout and appearance
- Input field states (normal, focus, error)
- Error messages
- Success message
- Responsive design for different screen sizes

### JavaScript
The JavaScript file handles all validation logic, including:
- Event listeners for real-time validation
- Form submission handling
- Individual validation functions for each field
- Error message management
- Success state transition

## Testing
The form has been tested for the following scenarios:
- Empty field submissions
- Invalid data formats
- Password complexity requirements
- Form submission with valid and invalid data
- Real-time validation feedback

## Bonus Features Implemented
- Terms and conditions checkbox with validation
- Visually appealing styling with feedback indicators
- Real-time validation as users type

## How to Run
1. Download all three files (index.html, styles.css, script.js)
2. Place them in the same directory
3. Open the index.html file in a web browser

## Future Improvements
- Add password strength meter
- Implement more advanced email validation
- Add form data persistence
- Create a server-side validation component
