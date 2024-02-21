import { handleClickOnTabs } from "../components/tabs/Tabs.js";
import { Home } from "../pages/home/Home.js";
import { mountPage } from "../utils/mountPage.js";

mountPage(Home, [handleClickOnTabs]);
