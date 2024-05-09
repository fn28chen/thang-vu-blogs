"use client";
import {
  FiHome,
  FiClock,
  FiPaperclip,
  FiUser,
  FiBookOpen,
  FiSun,
  FiMoon,
  FiZap,
  FiCommand,
} from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const NavbarItems = [
  {
    name: "Home",
    slug: "/",
    icon: FiHome,
  },
  {
    name: "About",
    slug: "/about",
    icon: FiUser,
  },
  {
    name: "Now",
    slug: "/now",
    icon: FiClock,
  },
  {
    name: "Links",
    slug: "/links",
    icon: FiPaperclip,
  },
  {
    name: "Dashboard",
    slug: "/dashboard",
    icon: FiZap,
  },
  {
    name: "Blogs",
    slug: "/blogs",
    icon: FiBookOpen,
  },
];

export default function MobileNavBar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const path = usePathname();
  const [mounted, setMounted] = useState(false);
  const [tooltipVisibility, setTooltipVisibility] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="min-h-full h-full flex dark:bg-zinc-800 bg-zinc-500 justify-center items-center py-1 rounded-lg shadow-xl gap-4 ">
      <div className="flex justify-evenly gap-4">
        {NavbarItems.map((item, index) => {
          return (
            <button
              key={index}
              className="w-full h-12 flex justify-center items-center"
            >
              {path === item.slug ? (
                <item.icon
                  size="2rem"
                  className="text-zinc-100 rounded dark:bg-zinc-700 bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-800 py-2 cursor-pointer hover:scale-110 duration-300 ease-in-out shadow hover:shadow-xl"
                  onClick={() => router.push(item.slug)}
                />
              ) : (
                <item.icon
                  size="2rem"
                  className="text-zinc-100 rounded dark:bg-zinc-800 bg-zinc-700 dark:hover:bg-zinc-700 hover:bg-zinc-800 py-2 cursor-pointer hover:scale-110 duration-300 ease-in-out shadow hover:shadow-xl"
                  onClick={() => router.push(item.slug)}
                />
              )}
            </button>
          );
        })}
      </div>
      <div className="flex gap-4 pr-4">
        {mounted && (
          <button
            className="w-full flex justify-center items-center dark:bg-zinc-800 bg-zinc-700 dark:hover:bg-zinc-700 hover:bg-zinc-800 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="p-2 text-zinc-100">
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </div>
          </button>
        )}
        <button
          className="w-full flex justify-center items-center dark:bg-zinc-800 bg-zinc-700 dark:hover:bg-zinc-700 hover:bg-zinc-800 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
          //   onClick={() => router.push(item.slug)}
          // onClick={query.toggle}
        >
          <div className="p-2">
            <FiCommand size="1rem" className="text-zinc-100" />
          </div>
        </button>
      </div>
    </nav>
  );
}
