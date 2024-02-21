import { Card } from "../card/Card.js";

export const CardGrid = ({ cards }) => {
  return `
    <div class="card-grid">
      ${cards.map((card) => Card(card)).join("")}
    </div>
  `;
};
