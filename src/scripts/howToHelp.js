import { HowToHelp } from "../pages/how-to-help/HowToHelp.js";
import { handleToggleAccordion } from "../components/accordion/Accordion.js";
import { mountPage } from "../utils/mountPage.js";

mountPage(HowToHelp, [handleToggleAccordion]);
