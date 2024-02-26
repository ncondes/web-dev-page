import { BlogManager } from "../../components/blogManager/BlogManager.js";
import { Hero } from "../../components/hero/Hero.js";
import { Layout } from "../../components/layout/Layout.js";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle.js";

export const Blog = () => {
  const blogData = [
    {
      title: "Children, adolescents, feeding, and nutrition",
      label: "New",
      date: "2022-10-19",
      content:
        "In Colombia, severe acute malnutrition affects 15,600 children under five, with obesity present in 17% of adolescents. Rapid urbanization and globalized food systems increase access to calorie-rich but nutrient-poor foods, contributing to malnutrition issues, as noted by UNICEF. Addressing malnutrition requires a collective effort from health professionals, families, schools, and the state to prioritize children's nutritional needs. Elisa María Cadena of Minsalud emphasizes the importance of daily consumption of eggs, milk, dairy, whole fruits, raw vegetables, and legumes for children's health. At Fundación Niños de los Andes, we ensure our residents receive five balanced meals daily. To support our mission, visit our website or donation page.",
      imgSrc: "./assets/img/blog-children-adolescents.jpeg",
    },
    {
      title: "Quality education",
      label: "Editor's Choice",
      date: "2022-09-13",
      content:
        "Quality education should be a fundamental right. In Colombia, for every 100 children who start primary school, only 44 graduate high school on time, and of those, only 39 proceed to higher education. The 2018 PISA results showed Colombian students lagging by approximately 2.5 school years compared to OECD averages, highlighting a significant quality gap in education. This issue stems from various factors, including the absence of a standard curriculum and a disparity in school quality, with 97 of the top 100 schools being private. At Fundación Niños de los Andes, we ensure our boarders receive necessary educational support, though accessing university scholarships remains challenging. We advocate for improving public basic education quality to ensure our children can achieve their dreams. To learn more or support our cause, visit our website or donate through our Love Kit program for education.",
      imgSrc: "./assets/img/blog-quality-education.jpeg",
    },
    {
      title: "The power of reusing",
      label: "Must Read",
      date: "2021-11-09",
      content: `This article discusses recycling and its connection to our foundation's work. Climate change, biodiversity loss, land degradation, and water scarcity, compounded by the pandemic and overconsumption, have heightened the urgency to protect Earth. Our homes have transformed; spaces once empty are now filled with consumed goods. The solution lies in recycling, a simple and rewarding daily activity for environmental conservation. Recycling at home is straightforward, focusing on organizing waste into categories for proper disposal. By adopting the three Rs (Reduce, Recycle, Reuse), we can learn to classify waste, clean public spaces, and donate unused items, all of which can mitigate the harm to our planet. At Fundación Niños de los Andes, we've long aimed to be part of the change Earth needs, promoting the "Power of Reusing" campaign to assist the planet and those in need. Let's use our time at home to declutter and donate items that can continue to serve others, including migrant families seeking support from our Foundation. To learn more or support our cause led by Papá Jaime, visit our website or join our campaign by donating items you no longer use. Together, we can transform lives!`,
      imgSrc: "./assets/img/blog-the-power-of-reusing.png",
    },
    {
      title: "Tips for handling a temper tantrum",
      label: "Must Read",
      date: "2021-10-22",
      content: `To handle tantrums effectively: maintain calm, as reacting can fulfill a child's negative goal; allow children to express emotions without giving in to their demands, explaining firmly but kindly why certain requests can't be met; communicate with tranquility, ensuring your voice conveys peace and understanding; and remember, saying "NO" can also be an act of love, preparing them for life's frustrations. Managing tantrums patiently avoids the adverse outcomes of lost temper, contributing to a child’s healthy emotional development.`,
      imgSrc: "./assets/img/blog-tips-for-handling-a-temper.jpg",
    },
    {
      title: "The importance of activating the entrepreneurship chip",
      label: "Popular",
      date: "2021-10-12",
      content:
        "Empowering children and youth with an entrepreneurial mindset extends beyond just starting businesses; it's about helping them discover their talents and interests, enhancing their abilities to thrive in a competitive world. This early encouragement fosters creativity, learning, conflict resolution, and decision-making skills, boosting assertiveness, confidence, and critical thinking. For adolescents in our programs, especially those from economically challenged backgrounds, entrepreneurship represents a dream to achieve financial independence. A significant hurdle is their unfamiliarity with starting from scratch, risking the loss of many innovative ideas. Thanks to a donated T-shirt printing machine, we're introducing them to creative design, allowing them to explore their skills through experiential learning in managing a business project. This initiative aligns with our foundation's philosophy to inspire our youth to pursue their passions, ensuring they remain motivated and can apply their knowledge across various fields. To learn more about our efforts or support our cause, visit our website. Together, we can make a difference in their lives.",
      imgSrc: "./assets/img/blog-the-importance-of-activating.jpeg",
    },
    {
      title: "How can I help my child with homework?",
      label: "Popular",
      date: "2021-10-04",
      content:
        "During and beyond the pandemic, helping children with homework can be challenging for many parents, sometimes due to distractions or not understanding the assignments, leading to frustration. To prevent this frustration from turning into mistreatment, Fundación Niños de los Andes offers essential tips for assisting your child with schoolwork. Establish a set homework schedule to teach discipline and goal achievement, choose a conducive study environment with appropriate lighting and minimal distractions, and turn off nearby televisions. Research homework topics using online search engines to better support your child, provide necessary materials like paint and clay within easy reach, and lead by example by engaging in responsible activities alongside them. These strategies can make homework time more effective and enjoyable. For more information on supporting vulnerable children or to contribute to our cause, visit our website. Together, we can make a difference in their lives.",
      imgSrc: "./assets/img/blog-how-can-i-help-my-child.jpg",
    },
    {
      title: "Fulfilling dreams",
      label: "Must Read",
      date: "2021-08-30",
      content:
        "Our children have much to share about overcoming adversity and realizing dreams. The Casas brothers, Wilson, César, and Joaquín, exemplify this journey. Growing up facing hardship and abandonment, they turned to the streets for survival, engaging in activities like singing on buses and playing arcade games. Their lives took a transformative turn upon joining the Fundación Niños de los Andes. Here, they found a new family, education, and learned about respect and coexistence. Their time at the foundation radically changed their lives, allowing them to leave behind the streets' vices and bitterness. Today, they reflect on their past with a mix of nostalgia and gratitude, determined to assist others facing similar challenges. Wilson's journey from street life to becoming a successful entrepreneur, alongside his brothers' successes, underscores the profound impact of support and transformation. These stories highlight the importance of continuing our mission to transform lives, a testament to the enduring spirit of resilience and hope. To learn more about our work or support our cause, visit our website. Together, we can make a difference.",
      imgSrc: "./assets/img/blog-fulfilling-dreams.jpg",
    },
    {
      title: "Philosophy BEING a path from the mind to the heart",
      label: "Popular",
      date: "2018-07-20",
      content: `The "Being Philosophy" at Fundación Niños de los Andes, inspired by Papá Jaime, teaches acting from love and giving without expecting anything in return, focusing on spreading faith, passion, and love to combat abuse, neglect, and indifference. It has transformed participants by inspiring them to dream and pursue their aspirations, encouraging them to find love in simplicity and to rediscover the joy of living. This philosophy aids in overcoming fears, breaking free from the past, and making decisions based on love, thereby enhancing interpersonal relationships and managing negative emotions. It's a journey from mind to heart, promoting inner peace, unconditional love, and joy, teaching us to let go of harmful beliefs and emotions, leading to a happier, more fulfilling life.`,
      imgSrc: "./assets/img/blog-philosophy-being-a-path.jpg",
    },
    {
      title: "Difficult things for children's hearts",
      label: "Featured",
      date: "2018-07-20",
      content:
        "To understand the pandemic's difficulty, consider the children's perspective, especially those separated from their families due to parental issues or care challenges, placed in institutions like ours for safekeeping. The law, while strict, overlooks the unique perspectives and emotional needs of these children, whose understanding does not align with legal proceedings. Their inability to grasp the reasons behind their separation and the law's indifference to their tears raises questions about recognizing and valuing each child's individuality in decision-making. This situation presents an opportunity to reconsider state institutions' decisions based on children's specific needs, aiming to alleviate their distress and consider their heartfelt expressions in finding solutions. To learn more about our efforts or support our cause, visit our website. Together, we can make a difference in their lives.",
      imgSrc: "./assets/img/blog-difficult-things.jpg",
    },
    {
      title: "A purpose without action is just an illusion",
      label: "Must Read",
      date: "2018-07-20",
      content:
        "Over 40 years ago, I was introduced to the grim world of the sewers and its inhabitants by a young girl guiding me with her candle. This encounter profoundly changed my life, focusing my attention and energy on the severe and inhumane conditions I witnessed—human waste, rats, and unbearable smells. Despite previous efforts to assist street children, the sheer neglect and societal indifference towards these individuals shocked me the most. Despite lacking support, even from close friends, I was driven by a philosophy not just to give aid but to teach self-reliance. Criticism didn't deter me; my goal was to offer hope and light to even one individual, making a significant difference in their life. This mission was affirmed years later during a surprise celebration of my 50th birthday at Fundación Niños de los Andes, surrounded by generations of those I had helped, now happy parents and grandparents. This moment validated my belief that heaven exists on Earth, in the love and hope shared among us. My advice to anyone looking to make a difference: start now, without expectations of return, and remember, what you give to others remains in your heart forever. To learn more about our work or to support our cause, visit our website. Together, we can continue transforming lives.",
      imgSrc: "./assets/img/blog-a-purpose-without-action.jpg",
    },
  ];

  const children = `
    ${Hero({
      title: "Blog",
      body: "Welcome to our blog! Here you'll find all of our latest news and updates.",
      imgSrc: "./assets/img/blog-hero.jpg",
      imgAlt: "Blog Hero Image",
    })}
    <section class="section-container">
      ${SectionTitle({ title: "News and Blog" })}
      ${BlogManager({ data: blogData })}
    </section>
  `;

  return Layout({ children });
};
