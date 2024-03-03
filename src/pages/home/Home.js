import { CardGrid } from "../../components/cardGrid/CardGrid.js";
import { Hero } from "../../components/hero/Hero.js";
import { Layout } from "../../components/layout/Layout.js";
import { List } from "../../components/list/List.js";
import { Paragraph } from "../../components/paragraph/Paragraph.js";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle.js";
import { Tabs } from "../../components/tabs/Tabs.js";

/**
 * Generates HTML content for a card body.
 * @param {Object} params - The parameters for generating the card body HTML.
 * @param {string} params.body - The body text for the card.
 * @returns {string} The HTML string for the card body.
 */
const HtmlCardBody = ({ body }) => `
  <p>${body}</p>
`;

/**
 * Generates HTML content for a tab body.
 * @param {Object} params - The parameters for generating the tab body HTML.
 * @param {string} params.title - The title of the tab.
 * @param {string} params.body - The body content of the tab.
 * @returns {string} The HTML string for the tab body.
 */
const HtmlTabBody = ({ title, body }) => `
  <div class="home__tab--attention-model">
    <h3>${title}</h3>
    ${Paragraph({ body })}
  </div>
`;

/**
 * Represents the home page of the application.
 * This component is responsible for rendering the home page, including the hero section, introductory content,
 * our programs, and the attention model.
 * @returns {string} The complete HTML content for the home page.
 */
export const Home = () => {
  // Define cards for the "Our Programs" section
  const cards = [
    {
      imgSrc: "./assets/img/what-do-we-do-patrullas_de_rescate.jpg",
      imgAlt: "Rescue Patrols Image",
      title: "Rescue Patrols",
      html: HtmlCardBody({
        body: "Open environment program in which, through daytime patrols in the localities identified as critical, the following activities are carried out.",
      }),
    },
    {
      imgSrc:
        "./assets/img/what-do-we-do-proteccion_internado_especializado.jpg",
      imgAlt: "Protection Specialized Boarding School Image",
      title: "Protection Specialized Boarding School",
      html: HtmlCardBody({
        body: "The protection programs are developed at the Nuevo Amanecer and St. Patrick headquarters in Bogota and at the Manizales headquarters.",
      }),
    },
    {
      imgSrc: "./assets/img/what-do-we-do-centros_de_emergencia.jpg",
      imgAlt: "Emergency Centers Image",
      title: "Emergency Centers",
      html: HtmlCardBody({
        body: "This program, under the modality of initial placement, is part of the programs that initiate the protection system.",
      }),
    },
    {
      imgSrc:
        "./assets/img/what-do-we-do-seguimiento_a_la_inclusion_social.jpg",
      imgAlt: "Social Inclusion Follow-up Image",
      title: "Social Inclusion Follow-up",
      html: HtmlCardBody({
        body: "The social inclusion programs are developed in the cities of Bogota and Manizales.",
      }),
    },
  ];
  // Define tabs for the "Attention Model" section
  const tabs = [
    {
      label: "Phase I",
      html: HtmlTabBody({
        title: "Street Work and Rescue Patrols",
        body: "It is developed through daytime tours in Bogota and Manizales, where groups of people living on the streets or with violated rights are located and contacted, to whom comprehensive outpatient health, psychological, social work, information and education services are provided, referrals to other services, orientation, admission to the protection program and coverage of survival needs.",
      }),
    },
    {
      label: "Phase II",
      html: HtmlTabBody({
        title: "Reception and Adaptation",
        body: "It is provided in an open-door institutional environment. It corresponds to the process of adaptation to the institutional environment, rules, services and therapeutic interventions of the case, providing substitute family care, school leveling, making initial assessments, case studies and definition of the intervention plan at the individual and family level.",
      }),
    },
    {
      label: "Phase III",
      html: HtmlTabBody({
        title: "Preparation for Exit",
        body: "Children and adolescents must prepare themselves to return to their family and society. To achieve this, they must have learned to live with love; to forgive, that is, to remember without pain, and to give without expecting to receive, which are the three fundamental pillars on which the process of formation and transformation of the Children of the Andes Foundation is based, based on the invaluable teachings of Papá Jaime.",
      }),
    },
    {
      label: "Phase IV",
      html: HtmlTabBody({
        title: "Life Project",
        body: "Once the child has accepted to change and improve his/her life habits, he/she begins the process of awareness for the construction of a better present and a promising future. Based on the teachings of Papá Jaime, 'Never, never stop dreaming, give wings to imagination and landing gear to dreams', children and adolescents begin to plan their lives, directing their efforts to achieve new goals that will allow them to find the path to their inner harmony.",
      }),
    },
    {
      label: "Phase V",
      html: HtmlTabBody({
        title: "Follow-up",
        body: "A process of accompaniment is developed through home and work visits, psychological and social care, legal advice, connection with special service networks, financial and material assistance, which seeks to ensure the successful social inclusion of those who leave the program, reducing the risk of a return to the problem situation.",
      }),
    },
  ];

  const children = `
    ${Hero({
      title: "Fundación Niños de Los Andes",
      body: "Over thirty years helping to transform the lives of hundreds of at-risk children and teenagers",
      imgSrc: "./assets/img/home-hero.png",
      imgAlt: "Fundación Niños de Los Andes Hero Image",
    })}
    <section class="home__intro section-container">
      ${SectionTitle({
        title:
          "We help children BE children... and teach them to realize their dreams!",
      })}
      ${Paragraph({
        body: `Thanks to the unwavering support you have given us, Fundación Niños de los Andes celebrates three decades of transforming the lives of hundreds of children forced to live on the streets, seeking their means of survival. Our work spans the full cycle from psychosocial intervention for abandoned children and teenagers to their true social inclusion and follow-up, thus contributing to the achievement of the SDGs in the context of combating poverty and reducing inequalities.`,
      })}
      ${Paragraph({
        body: `Our mission is to nurture happy children and teenagers, ensure their rights, and facilitate their transformational journey by developing skills that allow them to shape their future, all rooted in the pursuit of their dreams. We offer interdisciplinary care in health, nutrition, psychology, social work, and education to address each situation personally and prepare them for life beyond our care.`,
      })}
      ${Paragraph({
        body: `For many alumni, now adults, their time at Fundación Niños de los Andes holds deep meaning. Their stories affirm the lasting impact of the nurturing they received in what was their home for so long:`,
      })}
      ${List({
        items: [
          "They escaped the clutches of violence, crime, prostitution, and drug addiction.",
          "They grew in stature and weight like other children their age, overcoming the effects of malnutrition.",
          "They attended school and trained in various arts and trades that enabled them to be self-reliant.",
          "They enjoyed healthy recreation, went on trips, and had joyful Christmases full of gifts.",
          "They strengthened their faith in God and received the sacraments of Baptism and First Communion.",
          "With love, they healed deep wounds in both body and soul.",
          "They experienced childhood as children should, free from child labor and begging, forming a brotherhood with their peers that endures to this day.",
          "They embraced new opportunities for interaction and development through ongoing contact with volunteers and benefactors.",
          "Some participated in cultural exchanges, building strong bonds with host families in France, Canada, and the United States.",
          "Guided by Papá Jaime, they learned to forgive an often indifferent society and sometimes abusive parents.",
        ],
      })}
    </section>
    <section class="home__our-programs section-container">
      ${SectionTitle({ title: "Our Programs" })}
      ${CardGrid({ cards })}
    </section>
    <section class="home__attention-model section-container">
      ${SectionTitle({ title: "Attention Model" })}
      ${Tabs({ tabs, options: { className: "home__tabs--height" } })}
    </section>
  `;

  return Layout({ children });
};
