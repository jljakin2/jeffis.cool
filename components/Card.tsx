import { CardProps } from "@/types";
import Image from "next/image";

export default function Card({
  title,
  description,
  badge = "",
  link,
  image,
}: CardProps) {
  return (
    <a
      href={link}
      className="transition duration-300 ease-in-out transform hover:-translate-y-2"
    >
      {/* <div className="card w-[500px] bg-base-100  shadow-xl rounded-lg">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {badge && (
          <div className="badge badge-primary rounded-lg absolute -right-2 top-2">
            {badge.toUpperCase()}
          </div>
        )}
      </div> */}

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-t-lg"
          src={image}
          alt={`screenshot for ${title} app}`}
          width={400}
          height={200}
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
