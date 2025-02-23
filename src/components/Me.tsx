import Image from "next/image";
import Cat from "../app/assets/cat1.png";

const Me = () => {
  return (
    <section className="hi-screen flex-1 p-4">
      <div className="flex flex-row justify-evenly">
        <Image src={Cat} width={600} height={400} alt="holding image for hero section" priority/>
        <div>
        <h2 className="text-3xl font-bold">Shaun Halliday</h2>
        <p className="text-purple-500">Hi this is text about me</p>
        </div>
      </div>
    </section>
  );
};

export default Me;
