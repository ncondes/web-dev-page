/**
 * Renders the footer component of the webpage.
 *
 * This component includes multiple sections for contact information, headquarters and tax information, social media links, and copyright notice. Each section is structured to provide users with easy access to the organization's contact details, social media platforms, and legal documents.
 *
 * @returns {string} HTML string representing the footer component.
 */
export const Footer = () => `
  <footer class="footer">
    <section class="footer__contact-us">
      <h2>Contact Us</h2>
      <div>
        <h3>Bogota</h3>
        <p class="footer__contact-us--info">
          <i class="fa-solid fa-phone"></i>
          +571 678 06 55 (PBX)
        </p>
        <p class="footer__contact-us--info">
          <i class="fa-solid fa-envelope"></i>
          ninandes@ninandes.org
        </p>
        <p class="footer__contact-us--info">
          <i class="fa-solid fa-location-dot"></i> 
          Carrera 8C Bis A No. 164 A - 51
        </p>
      </div>
      <div>
        <h3>Manizales</h3>
          <p class="footer__contact-us--info">
            <i class="fa-solid fa-phone"></i>
            +576 883 55 65
          </p>
          <p class="footer__contact-us--info">
            <i class="fa-solid fa-envelope"></i>
            directormanizales@ninandes.org
          </p>
          <p class="footer__contact-us--info">
            <i class="fa-solid fa-location-dot"></i>
            Parque Adolfo Hoyos Ocampo, El arenillo
          </p>
      </div>
    </section>
    <section class="footer__headquarters-taxes">
      <div class="footer__headquarters">
        <h2>Headquarters</h2>
        <ul>
          <li>
            <a href="/contact-us.html">Casacorazones</a>
          </li>
          <li>
            <a href="/contact-us.html">Albachiara</a>
          </li>
          <li>
            <a href="/contact-us.html">Nuevo Amanecer</a>
          </li>
          <li>
            <a href="/contact-us.html">St. Patrick</a>
          </li>
          <li>
            <a href="/contact-us.html">Manizales</a>
          </li>   
        </ul>
      </div>
      <div class="footer__taxes">
        <h2>Taxes</h2>
        <ul>
          <li>
            <a href="https://www.ninandes.org/es/2018" target="_blank">2018</a>
          </li>
          <li>
            <a href="https://www.ninandes.org/es/2019" target="_blank">2019</a>
          </li>
          <li>
            <a href="https://www.ninandes.org/es/2020" target="_blank">2020</a>
          </li>
          <li>
            <a href="https://www.ninandes.org/es/2021" target="_blank">2021</a>
          </li>
          <li>
            <a href="https://www.ninandes.org/es/2022" target="_blank">2022</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="footer__social-media">
      <h2>Join Our Social Community</h2>
      <div>
        <a href="https://www.facebook.com/FundacionNinosDeLosAndes/" aria-label="Facebook">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/funiandes/" aria-label="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </section>
    <section class="footer__rights">
      <p>
        <small>
          © 2020 Fundación Niños de Los Andes. All rights reserved.
        </small>
      </p>
    </section>
  </footer>
`;
