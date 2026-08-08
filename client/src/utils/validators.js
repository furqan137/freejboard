// Validate if the input is a valid email
export const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Validate password strength (at least 6 characters, including letters and numbers)
export const isValidPassword = (password) => {
  return password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password);
};

// Check if a field is required (not empty or only whitespace)
export const isRequired = (value) => {
  return value && value.trim() !== "";
};

// Validate if a string has a minimum length
export const hasMinLength = (string, minLength) => {
  return string.length >= minLength;
};

// Validate if a number is within a given range (inclusive)
export const isInRange = (number, min, max) => {
  return number >= min && number <= max;
};
