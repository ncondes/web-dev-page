import { generateCaptcha } from "../../utils/generateCaptcha.js";

/**
 * Renders a form component with input fields for name, email, message, terms of privacy agreement, and a CAPTCHA challenge for submission validation.
 *
 * @returns {string} HTML string representing the form component.
 */
export const Form = () => {
  return `
    <form class="form shadow rounded-sm" onsubmit="handleFormSubmit(event)">
      <div class="form__group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required />
      </div>
      <div class="form__group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" required />
      </div>
      <div class="form__group">
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Write here your message" required></textarea>
      </div>
      <div class="form__checkbox">
        <input type="checkbox" id="terms" name="terms" required />
        <label for="terms">I agree to the Terms of Privacy</label>
      </div>
      <div class="form__group">
        <label for="captcha">Enter Captcha</label>
        <div id="captcha_challenge"></div>
        <div class="form__captcha-input">
          <input type="text" id="captcha" name="captcha" placeholder="Enter captcha here" required />
          <button
            type="button"
            onclick="setCaptcha()"
          >
            <i class="fa-solid fa-arrows-rotate"></i>
          </button>
        </div>
        <span class="form__error-message" id="captcha-error"></span>
      </div>
      <button class="form__submit-button" type="submit">Send</button>
      <div class="form__success-submit">
        <p>Message sent successfully</p>
      </div>
    </form>
  `;
};

/**
 * Sets a visually distorted CAPTCHA challenge in the specified HTML element.
 * The CAPTCHA is generated using various fonts and rotations to increase complexity.
 */
export const setCaptcha = () => {
  // Array of font families to apply to CAPTCHA characters for visual distortion
  const fonts = ["cursive", "fantasy", "monospace", "sans-serif", "serif"];
  // Get element where the CAPTCHA will be displayed
  const captchaChallengeElement = document.getElementById("captcha_challenge");
  // Generate a CAPTCHA string, split it into individual characters, and transform each character for visual distortion
  const captcha = generateCaptcha()
    .split("")
    .map((char) => {
      // Random rotation between -20 and 20 degrees for each character
      const rotate = -20 + Math.trunc(Math.random() * 40);
      // Randomly select a font from the fonts array
      const font = Math.trunc(Math.random() * fonts.length);
      // Return the character wrapped in a span, with inline styles for rotation and font family
      return `<span style="display: inline-block; font-family: ${fonts[font]}; transform: rotate(${rotate}deg)">${char}</span>`;
    })
    .join("");

  // Set the transformed CAPTCHA string as the inner HTML of the challenge element
  captchaChallengeElement.innerHTML = captcha;
};

/**
 * Registers the setCaptcha function globally on the window object.
 */
export const registerSetCaptcha = () => {
  window.setCaptcha = setCaptcha;
};

/**
 * Handles the submission of a form with CAPTCHA validation.
 * Prevents the default form submission, validates the CAPTCHA,
 * displays an error message if CAPTCHA validation fails,
 * and shows a success message if the submission is successful.
 *
 * @param {Event} event - The submit event triggered by the form submission.
 */
export const handleFormSubmit = (event) => {
  // Prevent the default form submission.
  event.preventDefault();
  // Create a FormData object from the form.
  const form = event.target;
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData);
  // Validate the CAPTCHA.
  const captchaInput = formObject.captcha;
  const captchaChallengeElement = document.getElementById("captcha_challenge");
  const captchaErrorElement = document.getElementById("captcha-error");
  const captchaChallenge = Array.from(captchaChallengeElement.children)
    .map((el) => el.textContent)
    .join("");
  // Display an error message if the CAPTCHA is not correct.
  if (captchaInput !== captchaChallenge) {
    captchaErrorElement.textContent = "Captcha is not correct";
    return;
  }
  // Success, display success message and reset form.
  const successSubmitElement = document.querySelector(".form__success-submit");
  successSubmitElement.style.display = "block";
  captchaErrorElement.textContent = "";
  form.reset();
  // Regenerate the CAPTCHA for next submission.
  setCaptcha();
  // Hide success message after 3 seconds.
  setTimeout(() => {
    successSubmitElement.style.display = "none";
  }, 3000);
};

/**
 * Registers the handleFormSubmit function globally on the window object.
 */
export const registerHandleFormSubmit = () => {
  window.handleFormSubmit = handleFormSubmit;
};
