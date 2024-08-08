// Validate email using regex
export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

// Validate password to be at least 6 characters long
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Validate mobile number to ensure it is exactly 10 digits
export const validateMobileNumber = (mobileNumber) => {
  const re = /^\+91\d{10}$/;
  return re.test(mobileNumber);
};

  