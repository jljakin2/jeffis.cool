import { CardProps } from "@/types";

export default function Card({
  title,
  description,
  badge = "",
  link,
}: CardProps) {
  return (
    <a href={link}>
      <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Check it out</button>
          </div> */}
        </div>
        {badge && (
          <div className="badge badge-primary rounded-lg absolute -right-2 top-2">
            {badge.toUpperCase()}
          </div>
        )}
      </div>
    </a>
  );
}
