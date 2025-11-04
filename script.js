// =============================================
// Week 6 Assignment: Interactive Web Pages with JavaScript
// =============================================

// ============================================================================
// PART 1: JavaScript Event Handling and Interactive Elements
// ============================================================================

/**
 * Initializes all event listeners when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 JavaScript Assignment Loaded Successfully!');
    
    initializeEventHandlers();
    initializeInteractiveFeatures();
    initializeFormValidation();
});

/**
 * PART 1: Event Handling - Various event types demonstration
 */
function initializeEventHandlers() {
    console.log('🎉 Initializing Event Handlers...');
    
    // =====================
    // Click Event Handling
    // =====================
    const clickDemoBtn = document.getElementById('clickDemo');
    const clickMessage = document.getElementById('clickMessage');
    
    clickDemoBtn.addEventListener('click', function(event) {
        console.log('Click event triggered!', event);
        clickMessage.textContent = '🎊 Button clicked! Great job!';
        clickMessage.style.color = '#2ecc71';
        clickMessage.style.fontWeight = 'bold';
        
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

    // =====================
    // Mouse Event Handling
    // =====================
    const mouseArea = document.getElementById('mouseArea');
    const mouseMessage = document.getElementById('mouseMessage');
    
    // Mouse enter event
    mouseArea.addEventListener('mouseenter', function() {
        mouseMessage.textContent = '🖱️ Mouse entered the area!';
        mouseMessage.style.color = '#3498db';
        this.style.backgroundColor = '#e74c3c';
        this.textContent = 'Mouse is over me! 🎯';
    });
    
    // Mouse leave event
    mouseArea.addEventListener('mouseleave', function() {
        mouseMessage.textContent = '🖱️ Mouse left the area';
        mouseMessage.style.color = '#95a5a6';
        this.style.backgroundColor = '#2ecc71';
        this.textContent = 'Hover over me!';
    });
    
    // Mouse move event with coordinates
    mouseArea.addEventListener('mousemove', function(event) {
        const rect = this.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        mouseMessage.textContent = `Mouse position: X:${Math.round(x)}, Y:${Math.round(y)}`;
    });

    // =====================
    // Keyboard Event Handling
    // =====================
    const keyboardInput = document.getElementById('keyboardInput');
    const keyboardMessage = document.getElementById('keyboardMessage');
    
    // Keydown event
    keyboardInput.addEventListener('keydown', function(event) {
        keyboardMessage.textContent = `Key pressed: ${event.key} (Code: ${event.code})`;
        keyboardMessage.style.color = '#9b59b6';
    });
    
    // Keyup event with character count
    keyboardInput.addEventListener('keyup', function(event) {
        const charCount = this.value.length;
        keyboardMessage.textContent = `Typing... Characters: ${charCount}`;
        
        if (charCount > 20) {
            keyboardMessage.style.color = '#e74c3c';
            keyboardMessage.textContent += ' - Maximum recommended length reached!';
        } else if (charCount > 10) {
            keyboardMessage.style.color = '#f39c12';
        } else {
            keyboardMessage.style.color = '#2ecc71';
        }
    });

    // =====================
    // Input Event Handling (Live Validation)
    // =====================
    const liveInput = document.getElementById('liveInput');
    const liveFeedback = document.getElementById('liveFeedback');
    
    liveInput.addEventListener('input', function(event) {
        const value = this.value.trim();
        
        if (value.length === 0) {
            liveFeedback.textContent = 'Please enter some text';
            liveFeedback.style.color = '#95a5a6';
        } else if (value.length < 3) {
            liveFeedback.textContent = '❌ Too short! Minimum 3 characters';
            liveFeedback.style.color = '#e74c3c';
        } else if (value.length > 15) {
            liveFeedback.textContent = '❌ Too long! Maximum 15 characters';
            liveFeedback.style.color = '#e74c3c';
        } else {
            liveFeedback.textContent = '✅ Perfect! Good length';
            liveFeedback.style.color = '#2ecc71';
        }
    });
}

// ============================================================================
// PART 2: Building Interactive Elements
// ============================================================================

/**
 * PART 2: Interactive Features - Three custom interactive components
 */
function initializeInteractiveFeatures() {
    console.log('🎮 Initializing Interactive Features...');
    
    // ===========================
    // Feature 1: Dark/Light Mode Toggle
    // ===========================
    const themeToggle = document.getElementById('themeToggle');
    let isDarkMode = false;
    
    themeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        
        this.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
        this.style.background = isDarkMode ? '#34495e' : '#3498db';
        
        console.log(`Theme changed to: ${isDarkMode ? 'Dark' : 'Light'} mode`);
    });

    // ===========================
    // Feature 2: Counter Game
    // ===========================
    const counterValue = document.getElementById('counterValue');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const gameMessage = document.getElementById('gameMessage');
    
    let count = 0;
    
    // Increase counter
    increaseBtn.addEventListener('click', function() {
        count++;
        updateCounter();
        checkGameProgress();
    });
    
    // Decrease counter
    decreaseBtn.addEventListener('click', function() {
        count--;
        updateCounter();
        checkGameProgress();
    });
    
    // Reset counter
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
        gameMessage.textContent = 'Game reset! Try to reach 10!';
        gameMessage.style.color = '#3498db';
    });
    
    function updateCounter() {
        counterValue.textContent = count;
        counterValue.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counterValue.style.transform = 'scale(1)';
        }, 200);
    }
    
    function checkGameProgress() {
        if (count >= 10) {
            gameMessage.textContent = '🎉 Congratulations! You reached 10!';
            gameMessage.style.color = '#2ecc71';
            counterValue.style.color = '#2ecc71';
        } else if (count < 0) {
            gameMessage.textContent = '⚠️ Negative numbers! Try to stay positive!';
            gameMessage.style.color = '#e74c3c';
            counterValue.style.color = '#e74c3c';
        } else {
            gameMessage.textContent = `Keep going! ${10 - count} more to reach 10!`;
            gameMessage.style.color = '#3498db';
            counterValue.style.color = '#3498db';
        }
    }

    // ===========================
    // Feature 3: Interactive FAQ Section
    // ===========================
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
                this.textContent = this.textContent.replace('▶', '▼');
                console.log(`FAQ ${index + 1} opened`);
            } else {
                this.textContent = this.textContent.replace('▼', '▶');
            }
        });
    });
}

// ============================================================================
// PART 3: Form Validation with JavaScript
// ============================================================================

/**
 * PART 3: Custom Form Validation - Comprehensive validation without HTML5 validation
 */
function initializeFormValidation() {
    console.log('📋✅ Initializing Form Validation...');
    
    const registrationForm = document.getElementById('registrationForm');
    const formSuccess = document.getElementById('formSuccess');
    
    // Form elements
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const phone = document.getElementById('phone');
    const age = document.getElementById('age');
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const phoneError = document.getElementById('phoneError');
    const ageError = document.getElementById('ageError');

    /**
     * Validates full name field
     */
    function validateFullName() {
        const value = fullName.value.trim();
        
        if (value === '') {
            showError(fullName, nameError, 'Full name is required');
            return false;
        }
        
        if (value.length < 2) {
            showError(fullName, nameError, 'Name must be at least 2 characters long');
            return false;
        }
        
        if (!/^[a-zA-Z\s]+$/.test(value)) {
            showError(fullName, nameError, 'Name can only contain letters and spaces');
            return false;
        }
        
        showSuccess(fullName, nameError);
        return true;
    }

    /**
     * Validates email field using regular expression
     */
    function validateEmail() {
        const value = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value === '') {
            showError(email, emailError, 'Email is required');
            return false;
        }
        
        if (!emailRegex.test(value)) {
            showError(email, emailError, 'Please enter a valid email address');
            return false;
        }
        
        showSuccess(email, emailError);
        return true;
    }

    /**
     * Validates password field with multiple criteria
     */
    function validatePassword() {
        const value = password.value;
        
        if (value === '') {
            showError(password, passwordError, 'Password is required');
            return false;
        }
        
        if (value.length < 8) {
            showError(password, passwordError, 'Password must be at least 8 characters long');
            return false;
        }
        
        if (!/(?=.*[a-z])/.test(value)) {
            showError(password, passwordError, 'Password must contain at least one lowercase letter');
            return false;
        }
        
        if (!/(?=.*[A-Z])/.test(value)) {
            showError(password, passwordError, 'Password must contain at least one uppercase letter');
            return false;
        }
        
        if (!/(?=.*\d)/.test(value)) {
            showError(password, passwordError, 'Password must contain at least one number');
            return false;
        }
        
        if (!/(?=.*[@$!%*?&])/.test(value)) {
            showError(password, passwordError, 'Password must contain at least one special character (@$!%*?&)');
            return false;
        }
        
        showSuccess(password, passwordError);
        return true;
    }

    /**
     * Validates password confirmation
     */
    function validateConfirmPassword() {
        const value = confirmPassword.value;
        const passwordValue = password.value;
        
        if (value === '') {
            showError(confirmPassword, confirmPasswordError, 'Please confirm your password');
            return false;
        }
        
        if (value !== passwordValue) {
            showError(confirmPassword, confirmPasswordError, 'Passwords do not match');
            return false;
        }
        
        showSuccess(confirmPassword, confirmPasswordError);
        return true;
    }

    /**
     * Validates phone number (optional)
     */
    function validatePhone() {
        const value = phone.value.trim();
        
        if (value === '') {
            showSuccess(phone, phoneError); // Optional field
            return true;
        }
        
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            showError(phone, phoneError, 'Please enter a valid phone number');
            return false;
        }
        
        showSuccess(phone, phoneError);
        return true;
    }

    /**
     * Validates age (optional)
     */
    function validateAge() {
        const value = age.value.trim();
        
        if (value === '') {
            showSuccess(age, ageError); // Optional field
            return true;
        }
        
        const ageNum = parseInt(value);
        
        if (isNaN(ageNum)) {
            showError(age, ageError, 'Please enter a valid number');
            return false;
        }
        
        if (ageNum < 1 || ageNum > 120) {
            showError(age, ageError, 'Please enter a valid age (1-120)');
            return false;
        }
        
        showSuccess(age, ageError);
        return true;
    }

    /**
     * Helper function to show error state
     */
    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        input.classList.add('invalid');
        input.classList.remove('valid');
    }

    /**
     * Helper function to show success state
     */
    function showSuccess(input, errorElement) {
        errorElement.textContent = '';
        input.classList.add('valid');
        input.classList.remove('invalid');
    }

    // Real-time validation for each field
    fullName.addEventListener('blur', validateFullName);
    fullName.addEventListener('input', function() {
        if (this.value.trim().length > 0) {
            validateFullName();
        }
    });
    
    email.addEventListener('blur', validateEmail);
    email.addEventListener('input', function() {
        if (this.value.trim().length > 0) {
            validateEmail();
        }
    });
    
    password.addEventListener('blur', validatePassword);
    password.addEventListener('input', function() {
        if (this.value.length > 0) {
            validatePassword();
            // Also validate confirm password when password changes
            if (confirmPassword.value.length > 0) {
                validateConfirmPassword();
            }
        }
    });
    
    confirmPassword.addEventListener('blur', validateConfirmPassword);
    confirmPassword.addEventListener('input', function() {
        if (this.value.length > 0) {
            validateConfirmPassword();
        }
    });
    
    phone.addEventListener('blur', validatePhone);
    age.addEventListener('blur', validateAge);

    /**
     * Form submission handler with comprehensive validation
     */
    registrationForm.addEventListener('submit', function(event) {
        console.log('Form submission attempted...');
        event.preventDefault(); // Prevent default form submission
        
        // Validate all fields
        const isNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isPhoneValid = validatePhone();
        const isAgeValid = validateAge();
        
        const isFormValid = isNameValid && isEmailValid && isPasswordValid && 
                           isConfirmPasswordValid && isPhoneValid && isAgeValid;
        
        if (isFormValid) {
            console.log('✅ Form validation successful!');
            
            // Show success message
            formSuccess.style.display = 'block';
            registrationForm.style.display = 'none';
            
            // Log form data (in real app, this would be sent to server)
            const formData = {
                fullName: fullName.value.trim(),
                email: email.value.trim(),
                phone: phone.value.trim() || 'Not provided',
                age: age.value.trim() || 'Not provided'
            };
            
            console.log('📝 Form Data:', formData);
            
            // Reset form after 5 seconds (for demo purposes)
            setTimeout(() => {
                registrationForm.reset();
                registrationForm.style.display = 'block';
                formSuccess.style.display = 'none';
                
                // Clear all validation states
                document.querySelectorAll('input').forEach(input => {
                    input.classList.remove('valid', 'invalid');
                });
                document.querySelectorAll('.error-message').forEach(error => {
                    error.textContent = '';
                });
                
                console.log('🔄 Form has been reset');
            }, 5000);
            
        } else {
            console.log('❌ Form validation failed!');
            // Error handling is already shown by individual validation functions
        }
    });
}

// ============================================================================
// Additional Utility Functions
// ============================================================================

/**
 * Utility function to simulate API call (for demonstration)
 */
function simulateAPICall(formData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('📤 Simulating API call with data:', formData);
            resolve({ success: true, message: 'Data submitted successfully' });
        }, 2000);
    });
}

/**
 * Utility function to format phone numbers
 */
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

// Export functions for testing (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateFullName,
        validateEmail,
        validatePassword,
        validateConfirmPassword,
        validatePhone,
        validateAge
    };
}
