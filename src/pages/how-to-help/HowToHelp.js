import { Accordion } from "../../components/accordion/Accordion.js";
import { Blockquote } from "../../components/blockquote/Blockquote.js";
import { Hero } from "../../components/hero/Hero.js";
import { Layout } from "../../components/layout/Layout.js";
import { List } from "../../components/list/List.js";
import { Paragraph } from "../../components/paragraph/Paragraph.js";
import { Picture } from "../../components/picture/Picture.js";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle.js";

/**
 * Generates the "How to Help" page content including various sections like sponsorship, volunteering,
 * campaigns, and more, using other components for structured content presentation.
 * @returns {string} The HTML content for the "How to Help" page.
 */
export const HowToHelp = () => {
  // Define the content for the accordion sections
  const accordions = [
    {
      label: "Foreign Volunteers",
      html: `
      ${Paragraph({
        body: `No matter where you are, we are united by a common purpose: to work for a better world and help those who need us. We want our children to have multicultural experiences that broaden their view of the world.`,
      })}
      ${Paragraph({
        body: `We require some minimum requirements to ensure the success of your work:`,
      })}
      <div>
        ${List({
          items: [
            "General knowledge of Colombia, the issues we address, and children's rights.",
            "Age: Between 20 and 50 years old.",
            "Minimum time required: Between 1 and 3 months for volunteering or internships, respectively.",
            "Basic Spanish language skills that allow proper communication with the children and staff.",
            "Required completion or current enrollment in professional or technical training relevant to our needs, such as Health, Education, Social Work, and other related fields.",
            "Group management and some experience working with children.",
            "University certification if the internship is part of the curriculum.",
            "Formal request for the internship space at least six (6) months in advance.",
            "Due to limited resources available for this purpose, expenses for accommodation, maintenance, and transport in Colombia will be the responsibility of the applicant.",
            "Accommodation during the service period cannot be provided at the Foundation's facilities.",
            "The Foundation provides meals during workdays at the facility.",
            "Signing of our Agreement of Wills for the donation of time.",
            "Finally, the applicant must be responsible for their safety outside our facilities.",
          ],
        })}
      </div>
      `,
    },
    {
      label: "Corporate Volunteers",
      html: `
      ${Paragraph({
        body: `Connect your company's values with our goals, and you'll see that together we can make a difference.`,
      })}
      ${Paragraph({
        body: `You and your company can create a greater social impact by actively participating in solving the social issues faced by hundreds of children at risk and in extreme poverty. You'll help them break the cycle of poverty and achieve a better quality of life.`,
      })}
      ${Paragraph({
        body: `We plan participation very much in line with your company's philosophy on social responsibility. We start by having a meeting to present our needs, and in it, we agree on the activity depending on the chosen theme. Companies can get involved in the development of a specific project or organize a participatory activity proposed by the company.`,
      })}
      `,
    },
  ];

  const children = `
    ${Hero({
      title: "How to Help",
      body: "You can make a difference! Find out how you can help us help children and adolescents in need.",
      imgSrc: "./assets/img/how-to-help-hero.jpg",
      imgAlt: "How to Help Hero Image",
    })}
    <section class="how-to-help__sponsorship-plan section-container">
      ${SectionTitle({ title: "Become a Sponsor" })}
      ${Blockquote({
        text: "You can make a significant impact on a child's life by accompanying them on their journey!",
      })}
      ${Paragraph({
        body: `Some of the children and adolescents we welcome into our programs lack a family support network or have one that does not guarantee their rights. They must remain under our protection until they reach the age of majority and are studying.`,
      })}
      ${Paragraph({
        body: `You can become their Sponsor, covering all or part of the cost of their comprehensive care and supporting them to successfully complete their process.`,
      })}
      <figure class="mt-2 figure">
        ${Picture({
          className: "",
          desktopImgSrc: "./assets/img/how-to-help-sponsorship-plan.jpg",
          imgAlt: "About Us Team Image",
        })}
      </figure>
    </section>
    <section class="how-to-help__reusing-campaign section-container">
      ${SectionTitle({ title: "The Power of Reusing Campaign" })}
      ${Blockquote({
        text: "Do not consider yours anything that you have not used in a year, give it to someone who needs it",
      })}
      ${Paragraph({
        body: `If your closet can't fit another sock, if you're storing things under your bed that you no longer use, if your office drawers are overflowing, and if your home's storage won't close, allow us to put them to better use. We repurpose these items for the benefit of the children, adolescents, and families we serve, both within and outside of our programs.`,
      })}
      ${Paragraph({
        body: `We make use of everything:`,
      })}
      ${Paragraph({
        body: `Archive paper, cardboard, office furniture, computer equipment, scrap metal, newspapers, and household items from your home, office, club, or residential complex.`,
      })}
      ${Paragraph({
        body: `Pack it up, call us at 60 (1) 6780 655, and we will pick everything up right from your doorstep. We do not recycle plastic or glass. There are other foundations that have been doing that for some time.`,
      })}
    </section>
    <section class="how-to-help__christmas-cards section-container">
      ${SectionTitle({ title: "Christmas Cards" })}
      ${Paragraph({
        body: `The Joy of Sharing! Every year, the Foundation offers Christmas cards with beautiful seasonal motifs designed from drawings and crafts made by the children at our facilities and selected through a competition.`,
      })}
      ${Paragraph({
        body: `They are the perfect way to express deep gratitude and affection to the people we care about, through a supportive message of love for the most vulnerable children.`,
      })}
      <figure class="mt-2 mb-2 figure">
        ${Picture({
          className: "about-us__intro--img",
          desktopImgSrc: "./assets/img/how-to-help-christmas-cards.jpg",
          imgAlt: "About Us Team Image",
        })}
      </figure>
      ${Paragraph({
        body: `The funds raised from their sale have been an important support in sustaining our programs. We maintain a very competitive price of $1,200 each, allowing everyone, especially company executives, to send their clients, family, and friends a timely message of peace.`,
      })}
      ${Paragraph({
        body: `At the end of October, we send out the virtual catalog so you can place your orders by phone, fax, or email. To place your orders, please call PBX: 6780655 where we will be happy to assist you.`,
      })}
    </section>
    <section class="how-to-help__volunteer section-container">
      ${SectionTitle({ title: "Volunteer" })}
      ${Paragraph({
        body: ` Papá Jaime says, "I have always thought that to the entire world we are simply strangers, but to that human being whom we offer our support and love, we are the most important, we are their entire world." For us, volunteering is a workforce that adds to the efforts of professionals caring for children and youth at each of our facilities. Your involvement will be based on the requirements of different programs, and your talents, competencies, and skills will be utilized after appropriate induction by our team. We expect from you a commitment to carry out a specific activity, assigned and supervised by the responsible area manager. There are two basic forms of voluntary participation: Activities WITH the children and youth, referring to direct participation activities with them.`,
      })}
      <div class="mb-2">
        ${List({
          items: [
            "Street work with Rescue Patrols",
            "Support for professionals and trainers in health areas (medicine, dentistry, nutrition), psychology, occupational therapy, social work.",
            "Academic reinforcement.",
            "Training in areas of interest.",
            "Recreation, sports, and leisure activities.",
            "Seminars, talks, or educational workshops on various topics.",
          ],
        })}
      </div>
      ${Paragraph({
        body: `These activities are carried out at the facilities and must be conducted under the strict guidance and supervision of the Program Coordinator. They are scheduled according to established timetables, following the approval of a work plan. Activities FOR the benefit of the children and youth are related to support activities in the administrative area and Community Outreach.`,
      })}
      <div class="mb-2">
        ${List({
          items: [
            "Office tasks such as filing, database updates, etc.",
            "Designing communication materials for social media, print, press, etc.",
            "Professional guidance or consulting in areas of Logistics, Systems, Managerial and Operational Processes.",
            "Participation in our institutional campaigns.",
            "Inter-institutional contacts or affiliation with other Organizations.",
            "Organizing and supporting events.",
          ],
        })}
      </div>
      ${Paragraph({
        body: `In general, it refers to technical and professional support that the Foundation can hardly access due to budget constraints. What should you do?`,
      })}
      <div class="mb-2">
        ${List({
          items: [
            "Review our entire website to get a clear overview of our work.",
            "Contact us and wait for a response with more details about the available options.",
            "Informational Conferences are scheduled periodically and held at the San Cristóbal facility for those interested. You will be duly invited.",
          ],
        })}
      </div>
      ${Accordion({ items: accordions })}
    </section>
  `;

  return Layout({ children });
};
