import Image from "next/image";
import image from "@/public/oc-on-the-laptop.svg";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center text-center px-8 py-8 lg:py-20">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-8 md:mb-12">
          The internet should have
          <span className="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 whitespace-nowrap leading-relaxed ">
            more cool things.
          </span>
        </h1>
        <Image src={image} alt="Shoes" width={300} height={300} />
      </div>
      <div className="divider">😎 This is my contribution</div>
    </section>
  );
};

export default Hero;
