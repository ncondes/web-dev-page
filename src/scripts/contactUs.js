import { ContactUs } from "../pages/contact-us/ContactUs.js";
import {
  registerHandleFormSubmit,
  registerSetCaptcha,
  setCaptcha,
} from "../components/form/Form.js";
import { mountPage } from "../utils/mountPage.js";

mountPage(ContactUs, [
  registerHandleFormSubmit,
  registerSetCaptcha,
  setCaptcha,
]);
