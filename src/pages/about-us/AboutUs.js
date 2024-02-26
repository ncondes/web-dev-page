import { Accordion } from "../../components/accordion/Accordion.js";
import { Blockquote } from "../../components/blockquote/Blockquote.js";
import { Card } from "../../components/card/Card.js";
import { Hero } from "../../components/hero/Hero.js";
import { Layout } from "../../components/layout/Layout.js";
import { Paragraph } from "../../components/paragraph/Paragraph.js";
import { Picture } from "../../components/picture/Picture.js";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle.js";
import { Tabs } from "../../components/tabs/Tabs.js";

const HtmlTabBody = ({ title, imgSrc, imgAlt, body }) => `
  <div class="about-us__history-tab-content">
    <h3>${title}</h3>
    <img class="rounded-sm" src="${imgSrc}" alt="${imgAlt}" />
    <div>${body}</div>
  </div>
`;

const HtmlAccordionBody = ({ iconClass, body }) => `
<div class="about-us__accordion-body">
  <i class="${iconClass}"></i>
  <p>${body}</p>
</div>`;

export const AboutUs = () => {
  const tabs = [
    {
      label: "1973",
      html: HtmlTabBody({
        title: "The Mission 1973 - 1988",
        imgSrc: "./assets/img/about-us-mision.jpg",
        imgAlt: "Mission 1973 - 1988 Image",
        body: Paragraph({
          body: "The Foundation Niños de los Andes was founded after a tragic event in December 1973 when Jaime Jaramillo witnessed a street child fatally hit by a truck while trying to retrieve an empty doll box. This incident inspired 'Papá Jaime' to dedicate his life to helping destitute children by providing medical care, food, affection, and shelter. Starting in the 1970s, with the aid of volunteers, the foundation emphasized friendship and philanthropic assistance. Its first facility was a small house in La Perseverancia, sheltering 25 children cared for by volunteers and the female police of the fifth station, marking the beginning of a mission to transform the lives of street children in Colombia.",
        }),
      }),
    },
    {
      label: "1988",
      html: HtmlTabBody({
        title: "Materialization of the dream 1988 - 1995",
        imgSrc: "./assets/img/about-us-materializacion.jpg",
        imgAlt: "Materialization of the dream 1988 - 1995 Image",
        body: Paragraph({
          body: `
            ${Paragraph({
              body: "The dream that began as an individual commitment quickly evolved into an institutional challenge, marking a period of construction and consolidation for the Foundation Niños de los Andes from 1988 to 1995. To extend its reach, a new house was opened in the San Cristóbal neighborhood, serving children for six years from 1988 to 1991. During this time, it was feasible to rescue at-risk children directly from the streets and dangerous situations.",
            })}
            ${Paragraph({
              body: `This effort led by "Papá Jaime" evolved into the "Rescue Patrols," a flagship program of the Foundation. Concurrently, in 1988, efforts expanded to Manizales, focusing on those living in the city's dumps, leading to the inauguration of the Girasoles facility.`,
            })}
            ${Paragraph({
              body: "By the 1990s, with a larger house in Cajicá provided by ICBF, the Foundation began to refine its Care Model and services. However, after a fire damaged this facility, it was returned to the ICBF. In 1993, the La Esperanza facility was built in Rosal with funds from the AYUDATON campaign, supported by 29 major companies in the country.",
            })}
            ${Paragraph({
              body: `For more details on Papá Jaime's story, <a href="https://papajaime.com/">click HERE.</a>`,
            })}
          `,
        }),
      }),
    },
    {
      label: "1995",
      html: HtmlTabBody({
        title: "Technification 1995 - 2001",
        imgSrc: "./assets/img/about-us-tecnificacion.jpg",
        imgAlt: "Technification 1995 - 2001 Image",
        body: Paragraph({
          body: `
            From 1995 to 2001, Fundación Niños de Los Andes significantly advanced in technical sophistication, partnering with the Colombian Institute of Family Welfare (ICBF) across Bogotá, Manizales, and other cities. The Foundation joined a quality improvement project in 1999 with UNICEF, ICBF, and other foundations, enhancing protection processes for street children, earning high quality ratings from ICBF in 2000. Achieving ISO 9001:2000 certification in 2005 underscored its commitment to quality. Between 2006 and 2007, it led a national project against child labor, aiding 2,950 children and their families. In 2007, with ICBF support, it collaborated on the "Bogotá Towards an Inclusive City" project, benefiting 544 children and 220 families, focusing on reducing street life risks through Centers of Hospitality and Coexistence over five years.
          `,
        }),
      }),
    },
    {
      label: "2001",
      html: HtmlTabBody({
        title: "Growth 2001 - 2005",
        imgSrc: "./assets/img/about-us-crecimiento.jpg",
        imgAlt: "Growth 2001 - 2005 Image",
        body: Paragraph({
          body: `
            Between 2001 and 2005, Fundación Niños de Los Andes experienced significant growth and development. In 2001, it enhanced its family intervention work and established a Coexistence Pact tailored to its institutional reality, guided by gender perspectives and rights. In 2003, the foundation received its first international cooperation agreement from JICA (Japan International Cooperation Agency), funding Rescue Patrols and training workshops at La Esperanza for three years. That same year, Schneider Electric France supported a Pre-employment and Vocational Training project, including a bakery workshop. The St. Patrick facility opened in 2003 for a Residence Program, largely supported by COTA Ireland. In 2004, the Emergency Center program was launched, and Fundación ÉXITO, with contributions from its French partner CASINO, equipped the Casacorazones facility, provided by the National Directorate of Narcotics. Additionally, the Italian organization XMAS Project from Milan contributed funds to purchase the house for the Albachiara facility.
          `,
        }),
      }),
    },
    {
      label: "2005",
      html: HtmlTabBody({
        title: "Improvement 2005 - 2010",
        imgSrc: "./assets/img/about-us-mejoramiento.jpg",
        imgAlt: "Improvement 2005 - 2010 Image",
        body: Paragraph({
          body: `
            The inception of Fundación Niños de Los Andes is rooted in a tragic incident: In December 1973, Jaime Jaramillo witnessed a street child fatally struck by a truck while trying to retrieve an empty doll box. Motivated by this heartbreak, "Papá Jaime" dedicated himself to aiding homeless children, offering medical care, nourishment, love, and shelter. This mission began in the 1970s with the support of volunteers focused on friendship and philanthropy. The foundation's first location was a modest house in La Perseverancia, providing refuge for 25 children cared for by volunteers and the local female police unit.
          `,
        }),
      }),
    },
    {
      label: "2010",
      html: HtmlTabBody({
        title: "Consolidation 2010 - Present",
        imgSrc: "./assets/img/about-us-volviendo_a_lo_basico.jpg",
        imgAlt: "Consolidation 2010 - Present Image",
        body: `
          ${Paragraph({
            body: `
            In 2010, Fundación Niños de Los Andes built the Nuevo Amanecer house to support children facing abandonment, abuse, and vulnerability. This boarding house, located in a rural, open-air setting, offers comprehensive care to sixty-two minors aged 0 to 18 years. In 2012, a project was initiated in collaboration with IDIGER, the District Secretary of Social Integration, to integrate 150 homeless individuals into society as environmental recuperators, enhancing their life projects and socioeconomic conditions through income generation while rehabilitating the city's canals.`,
          })}
          ${Paragraph({
            body: `Since 2010, the foundation's challenge has been to instill in children, adolescents, the management team, care professionals, and other staff, the principles of Papá Jaime's SER Philosophy. This philosophy advocates for a natural and simple lifestyle, consciousness awakening, and living from love instead of fear. This mindset has been progressively solidified into a methodology equipped with tools designed to guide the implementation of this philosophy in the lives of the children served by the foundation.`,
          })}
          `,
      }),
    },
  ];

  const accordions = [
    {
      label: "Mission",
      html: HtmlAccordionBody({
        iconClass: "fa-regular fa-flag fa-xl",
        body: "To contribute to the restoration and defense of the fundamental rights of street children and those with violated rights, to facilitate their transformation challenge from a place of love, enhancing the development of skills that enable them to shape their future. We work towards strengthening their family systems and inspiring civic commitment and participation in addressing this social issue.",
      }),
    },
    {
      label: "Vision",
      html: HtmlAccordionBody({
        iconClass: "fa-regular fa-eye fa-xl",
        body: "The transformation of the human being through love is possible, measurable, and verifiable. Our goal is for every child or adolescent at risk or with violated rights who comes through the Foundation to find or rediscover the inner peace within their heart and carry the ability to forgive and be happy.",
      }),
    },
    {
      label: "Philosophy",
      html: HtmlAccordionBody({
        iconClass: "fa-solid fa-scroll fa-xl",
        body: "We embrace key ethical principles as our core values, shaping our corporate culture and guiding the education we provide to children. These include the drive for innovative thinking, highlighting the importance of always seeking new perspectives. Forgiveness is crucial for healing and moving forward, while service emphasizes selflessness and contributing to the greater good. The power of kind words underscores the transformative impact of compassion and respect in communication. Lastly, believing in human potential reflects our conviction in each individual's innate ability to grow, change, and make meaningful contributions to society.",
      }),
    },
  ];

  const children = `
    ${Hero({
      title: "About Us",
      body: "Empowering Colombia's street children through comprehensive care, Fundación Niños de Los Andes strives to protect their fundamental rights and foster their physical, mental, spiritual, and social development. Join us in making a real difference.",
      imgSrc: "./assets/img/about-us-hero.png",
      imgAlt: "About Us Hero Image",
    })}
    <section class="about-us__intro section-container">
      ${SectionTitle({ title: "About Us" })}
      ${Paragraph({
        body: `Fundación Niños de Los Andes is a non-profit Colombian organization dedicated to protecting and rehabilitating street children, offering them real solutions to improve their quality of life and foster their overall development. Since its inception by Papá Jaime, over 65,000 children have found a nurturing home, overcome malnutrition, pursued education, and grown into happy, productive community members. Supported by donations, campaigns, and partnerships, the Foundation provides comprehensive care in nutrition, health, psychosocial support, and life skills education, based on Papá Jaime's SER philosophy. Operating in five facilities with a yearly capacity of 1,510 children, it aims to restore rights, achieve social inclusion, and improve family ties, in alignment with Colombia's legal requirements and overseen by Crowe audits to ensure transparency.`,
      })}
      <figure class="mt-2 figure">
        ${Picture({
          className: "about-us__intro--img",
          desktopImgSrc: "./assets/img/about-us-team.jpeg",
          imgAlt: "About Us Team Image",
        })}
      </figure>
    </section>
    <section class="about-us__history section-container">
      ${SectionTitle({ title: "History" })}
      ${Tabs({ tabs, options: { className: "about-us__tabs--height" } })}
    </section>
    <section class="about-us__our-founder section-container">
      ${SectionTitle({ title: "Our Founder" })}
      <div class="about-us__our-founder--grid">
        <div>
          ${Paragraph({
            body: `Our founder, Jaime Eduardo Jaramillo Echeverri, affectionately known as "Papá Jaime," is a renowned Colombian social worker and peace advocate born on January 1, 1956, in Manizales-Caldas, Colombia. A father to Esteban and Alejandra, and grandfather to Agustina and Ignacio, he holds degrees in Geophysical Engineering and a Master's in Geophysical Prospecting and Exploration from the University of Montana, Austria, with specialization in Geochemistry and Mineralogy from Johannes Gutenberg University in Mainz, Germany. His social work began at age 12 in Manizales with a project that eventually provided 77 homes for the needy, laying the foundation for his lifelong commitment to supporting street children through education, health, and social assistance.`,
          })}
          ${Paragraph({
            body: `After furthering his education and specialization in Europe, where he explored rehabilitation programs for World War II victims and community aid for third-world countries, and studied preventive medicine techniques like Acupuncture and Shiatsu, Papá Jaime returned to Colombia. He dedicated his efforts to street children with health issues, personally funding their medical treatments and interventions.`,
          })}
          ${Paragraph({
            body: `His commitment led to the gathering of these abandoned children under one roof, overcoming numerous challenges to establish Fundación Niños de los Andes. He tirelessly visited dumps, marginalized city corners, and underground tunnels to rescue these children, risking his life to earn their trust and offer them a chance for a better life.`,
          })}
        </div>
        <div class="about-us__card-container">
          ${Card({
            imgSrc: "./assets/img/about-us-papa-jaime.jpg",
            imgAlt: "Papá Jaime Image",
            title: "Jaime Eduardo Jaramillo Echeverri",
            html: `Papá Jaime, Founder of Fundación Niños de Los Andes`,
          })}
        </div>
      </div>
    </section>
    <section class="about-us__why-do-we-exists section-container">
      ${SectionTitle({ title: "Why Do We Exist?" })}
      ${Paragraph({
        body: `The increasing urbanization of cities, notably Bogotá, has spurred the migration of rural families to urban areas, exacerbated by displacement due to armed conflict. This migration has led to the creation of impoverished belts lacking state-provided goods and services, with inadequate housing and a complete absence of basic amenities posing a constant threat to life. This situation forces all family members to seek solutions for survival, often leading to the disintegration of once solid family units due to the pressures of urban living. As a result, children are frequently abandoned, left to fend for themselves in conditions of deprivation and uncertainty, which constitutes a violation of their fundamental rights.`,
      })}
      ${Blockquote({
        text: "Violation of the fundamental rights of the child population.",
      })}
      ${Paragraph({
        body: `By the 1980s, these circumstances had significantly contributed to the rise of street children, disconnected from family life. These children learn survival tactics from street culture, adopting behaviors such as prostitution, sexual exploitation, criminal activities, psychoactive substance use, and resorting to illegal means for survival. Additionally, limited access to basic education and inadequate birth control have led to demographic growth, with early sexual relations and unstable partnerships further exacerbating the issue of child abandonment.`,
      })}
      ${Paragraph({
        body: `In this challenging socio-familial and geographical context, Fundación Niños de los Andes steps in to address the plight of street-involved children with a comprehensive care project. Today, with domestic violence rates soaring, child abuse cases continue to rise: Legal Medicine data from the first four months of 2019 reported 7,141 cases of sexual abuse, the most prevalent form of violence against children, with an average of 59 children falling victim to sexual violence daily in Colombia. This situation highlights the severe infringement of children's fundamental rights in the country.`,
      })}
    </section>
    <section class="about-us__mission-vission-philosophy section-container">
      ${SectionTitle({ title: "Mission, Vision, and Philosophy" })}
      ${Accordion({ items: accordions })}
    </section>
  `;

  return Layout({ children });
};
