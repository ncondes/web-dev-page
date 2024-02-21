import { AboutUs } from "../pages/about-us/AboutUs.js";
import { handleClickOnTabs } from "../components/tabs/Tabs.js";
import { handleToggleAccordion } from "../components/accordion/Accordion.js";
import { mountPage } from "../utils/mountPage.js";

mountPage(AboutUs, [handleClickOnTabs, handleToggleAccordion]);
