// Email validation using regex
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
// Password validation using regex
export const validatePassword = (password) => {
  const passwordRegex = /^.{6,}$/;
  return passwordRegex.test(password);
};

// Phone number validation using regex
export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
};
// Letter only validation using regex for inputs such as names
export const validateLettersOnly = (letters) => {
  const letterRegex = /^[A-Za-z]+$/;
  return letterRegex.test(letters);
};
// UserName validation using regex
export const validateUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  return usernameRegex.test(username);
};
