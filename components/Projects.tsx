import { cards } from "@/data";
import Card from "./Card";

export default function Projects() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-16 px-12 py-8 lg:py-20">
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          isProfitable={card.isProfitable}
        />
      ))}
    </section>
  );
}
