import { Footer } from "../footer/Footer.js";
import { Navbar } from "../navbar/Navbar.js";

export const Layout = ({ children }) => `
    ${Navbar()}
    <main>
        ${children}
    </main>
    ${Footer()}
`;
