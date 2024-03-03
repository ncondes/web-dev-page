import { CardGrid } from "../../components/cardGrid/CardGrid.js";
import { Form } from "../../components/form/Form.js";
import { Hero } from "../../components/hero/Hero.js";
import { Layout } from "../../components/layout/Layout.js";
import { Paragraph } from "../../components/paragraph/Paragraph.js";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle.js";

/**
 * Generates the HTML body content for each card displayed in the Contact Us page's "Our Locations" section.
 * @param {Object} props - The properties object, containing subtitle, address, and description.
 * @returns {string} - The HTML string for the body of a location card.
 */
const HtmlCardBody = ({ subtitle, address, description }) => `
  <div class="location-card-body">
    <p>${subtitle}</p>
    <p>
      <i class="fa-solid fa-map-pin"></i>
      ${address}
    </p>
    <p>${description}</p>
  </div>
`;

/**
 * Constructs the Contact Us page, incorporating various components such as Hero, SectionTitle, CardGrid, and Form.
 * The page provides contact information, showcases facility locations, and includes a form for visitors to get in touch.
 * @returns {string} - HTML string representing the Contact Us page.
 */
export const ContactUs = () => {
  // Define the data for the location cards to be displayed.
  const cards = [
    {
      imgSrc: "./assets/img/sede_nuevo_amanecer.jpg",
      imgAlt: "New Dawn Facility Image",
      title: "New Dawn Facility",
      html: HtmlCardBody({
        subtitle: "PROTECTION PROGRAM",
        address: "Carrera 7 No. 237-54",
        description:
          "Located in the Municipality of Chía, Cundinamarca, on the outskirts of Bogotá. It houses 60 children, including sibling groups, aged zero to 18 years who are in vulnerable or at-risk situations.",
      }),
    },
    {
      imgSrc: "./assets/img/sede_st_patrick.jpg",
      imgAlt: "St. Patrick's Facility Image",
      title: "St. Patrick's Facility",
      html: HtmlCardBody({
        subtitle: "RESIDENTIAL PROTECTION PROGRAM",
        address: "Carrera 71D No. 121-22",
        description:
          "Located in the Niza neighborhood in Bogotá. It accommodates 30 children and youth in the process of rights restoration and preparation for social and family reintegration. Most complete their high school education and proceed to University.",
      }),
    },
    {
      imgSrc: "./assets/img/sede_manizales.jpg",
      imgAlt: "Manizales Facility Image",
      title: "Manizales Facility",
      html: HtmlCardBody({
        subtitle: "RESIDENTIAL PROTECTION PROGRAM",
        address: "Vereda El Arenillo, Manizales",
        description:
          "Located in Vereda El Arenillo in Manizales, it accommodates 145 children in the process of psychosocial recovery and rights restoration. Visit our Manizales facility by clicking here.",
      }),
    },
    {
      imgSrc: "./assets/img/sede_albachiara.jpg",
      imgAlt: "Albachiara Facility Image",
      title: "Albachiara Facility",
      html: HtmlCardBody({
        subtitle: "EMERGENCY CENTER RESIDENTIAL PROGRAM",
        address: "Transversal 15ª No. 32-36 Sur",
        description:
          "Located in the Gustavo Restrepo neighborhood, designated to house 35 children and adolescents in the Emergency Center program.",
      }),
    },
    {
      imgSrc: "./assets/img/sede_casacorazones.jpg",
      imgAlt: "Casacorazones Facility Image",
      title: "Casacorazones Facility",
      html: HtmlCardBody({
        subtitle: "EMERGENCY CENTER RESIDENTIAL PROGRAM",
        address: "Calle 31G Sur No.13D-10",
        description:
          "Located in the Gustavo Restrepo neighborhood in the south of Bogotá. It accommodates 35 male children and adolescents while they are reintegrated with their families or placed in another institution according to their needs.",
      }),
    },
    {
      imgSrc: "./assets/img/sede_san_cristobal.jpg",
      imgAlt: "San Cristóbal Facility Image",
      title: "San Cristóbal Facility",
      html: HtmlCardBody({
        subtitle: "ADMINISTRATIVE OFFICE",
        address: "San Cristóbal Norte, Bogotá",
        description:
          "Located in the San Cristóbal Norte neighborhood, it coordinates the work at a national level. The Administrative, Financial, Accounting, Solidarity Management, Donations, and Quality departments are based here.",
      }),
    },
  ];

  const children = `
    ${Hero({
      title: "Contact Us",
      body: "We'd love to hear from you! Feel free to reach out to us with any questions or comments.",
      imgSrc: "./assets/img/contact-us-hero.jpeg",
      imgAlt: "Contact Us Hero Image",
    })}
    <section class="contact-us__contact-info section-container">
      ${SectionTitle({ title: "Contact Information" })}
      ${Paragraph({
        body: `We are here to help. If you have any questions or comments, please feel free to reach out to us. We will get back to you as soon as possible.`,
      })}
      <div class="contact-us__contact-info--container">
        <div class="contact-us__contact-info--item">
          <h3>Bogota</h3>
          <p>+571 678 06 55 (PBX)</p>
          <a href="mailto:ninandes@ninandes.org">ninandes@ninandes.org</a>
          <p>Carrera 8C Bis A No. 164 A - 51</p>
        </div>
        <div class="contact-us__contact-info--item">
          <h3>Manizales</h3>
          <p>+576 883 55 65</p>
          <a href="mailto:directormanizales@ninandes.org">directormanizales@ninandes.org</a>
          <p>Parque Adolfo Hoyos Ocampo, El arenillo</p>
        </div>
      </div>
    </section>
    <section class="contact-us__our-locations section-container">
      ${SectionTitle({ title: "Our Locations" })}
      ${Paragraph({
        body: `Discover our care centers. Day after day, we inspire our children to rediscover their lives and find the greatest treasure within their hearts: inner peace, love, and joy.`,
      })}
      ${CardGrid({ cards })}
    </section>
    <section class="contact-us__get-in-touch section-container">
      ${SectionTitle({ title: "Get In Touch" })}
      ${Form()}
    </section>
  `;

  return Layout({ children });
};
