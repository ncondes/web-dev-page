/**
 * This function creates a captcha string of 6 characters length, composed of
 * uppercase and lowercase letters, digits, and special characters.
 *
 * @returns {string} A string representing the generated captcha.
 */
export const generateCaptcha = () => {
  // Define the characters that can be included in the captcha.
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
  // Initialize an empty string to hold the captcha.
  let captcha = "";
  // Loop 6 times to generate a 6-character captcha.
  for (let i = 0; i < 6; i++) {
    // Append a random character from the characters string to the captcha.
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return captcha;
};
