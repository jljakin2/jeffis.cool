import { cards } from "@/data";
import Card from "./Card";

export default function Projects() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-16 py-12 px-4 lg:px-16 lg:py-20">
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          badge={card.badge}
          link={card.link}
        />
      ))}
    </section>
  );
}
