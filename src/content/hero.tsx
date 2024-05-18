"use client";
import Image from "next/image";
import { AnimatedText } from "../components/ui/AnimatedText";
import avatar from "../icons/avatar.jpg";

export default function Heroes() {
  <section className="flex gap-10 justify-between">
    <div>
      <AnimatedText
        text={["Vu Nguyen Duc Thang"]}
        className="dark:text-zinc-200 text-zinc-900 text-[44px] md:text-[52px] lg:text-[44px] m-0 font-extrabold"
        repeatDelay={5000}
        animation={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
      />
      <p className="dark:text-zinc-400 text-zinc-700 text-sm  m-0">
        {/* Write some text about an economist */}
        Economist
      </p>
    </div>
    <div className="min-w-fit">
      <Image
        src={avatar}
        alt="avatar"
        className="rounded-full shadow-xl min-w-32 h-[180px] m-0 hidden md:block"
        width={180}
        height={180}
      />
    </div>
  </section>;
}
