import Image from "next/image";

const Home = (props: {}) => {
  return (
    <div className="w-full h-full p-8 flex flex-col justify-center items-center relative">
      <section
        className="
        flex flex-col-reverse 
        lg:flex-row md:flex-row 
        w-full min-h-screen z-50 justify-between items-start 
        mb-20 mt-8
        lg:pl-24 lg:pr-8 gap-4
        "
      >
        <div className="leading-none">
          <h2 className="dark:text-zinc-200 text-zinc-900 text-[2.5rem] m-0 font-extrabold">
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
      </section>
    </div>
  );
};

export default Home;
