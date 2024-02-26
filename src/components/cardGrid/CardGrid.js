import { Card } from "../card/Card.js";

/**
 * Renders a grid layout of card components.
 *
 * This component takes an array of card data objects and uses the `Card` component to render each card within a grid layout. It is useful for displaying a collection of cards in a structured and visually appealing manner.
 *
 * @param {Object} props - The properties object for the CardGrid component.
 * @param {Array} props.cards - An array of objects where each object contains properties for an individual card. These properties are passed to the `Card` component.
 * @returns {string} HTML string representing a grid of card components.
 */
export const CardGrid = ({ cards }) => {
  // Maps over the array of card objects, converting each one into a Card component HTML string
  // Joins all the Card component strings together without any separator to form the grid's HTML
  return `
    <div class="card-grid">
      ${cards.map((card) => Card(card)).join("")}
    </div>
  `;
};
