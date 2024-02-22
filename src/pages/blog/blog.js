import { BlogManager } from "../../components/blogManager/BlogManager.js";
import { Hero } from "../../components/hero/Hero.js";
import { Layout } from "../../components/layout/Layout.js";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle.js";
import { blogData } from "../../data/blog.js";

export const Blog = () => {
  const hero = Hero({
    title: "Blog",
    body: "Welcome to our blog! Here you'll find all of our latest news and updates.",
    backgroundImage: "blog-hero.jpg",
  });

  const children = `
    ${hero}
    <section class="section-container">
      ${SectionTitle({ title: "News and Blog" })}
      ${BlogManager({ data: blogData })}
    </section>
  `;

  return Layout({ children });
};
