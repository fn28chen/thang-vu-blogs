import Footer from "@/components/layout/footer";
import Image from "next/image";

const Home = (props: {}) => {
  return (
    <div className="w-full min-h-screen pt-4 px-8 flex flex-col justify-center items-center relative">
      <section
        className="
        flex flex-row justify-between
        fixed top-0 w-full h-full z-50 px-8 pt-12 pb-12 xl:w-[50%] lg:pl-8 lg:pr-8 lg:w-[calc(50% + 20vw)] md:pl-8 md:pr-8 md:w-[60%] sm:w-[60%]
        min-h-screen p-8 relative
        "
      >
        <div className="leading-none">
          <h2 className="dark:text-zinc-200 text-zinc-900 text-[48px] m-0 font-extrabold">
            Vu Nguyen Duc Thang
          </h2>
          <p className="dark:text-zinc-300 text-zinc-800 mb-4 m-0"></p>
          <p className="dark:text-zinc-400 text-zinc-700 text-sm m-0">
            Learning about web and trying to help out other devs in the process.
            I love open source and writing about tech occasionally.
          </p>
        </div>
        <div className="min-w-fit">
          <Image
            src="https://avatars.githubusercontent.com/u/68690233?v=4"
            alt="avatar"
            className="rounded-full shadow-xl min-w-32 h-32 grayscale m-0"
            width={128}
            height={128}
          />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
