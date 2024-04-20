"use client"
import { FiExternalLink } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Stats() {
  const diffCalc = () => {
    const now = new Date().getTime();
    const past = new Date("December 21, 2001").getTime();
    const diffTime = Math.abs(now - past);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let years = Math.floor(diffDays / 365);
    let months = Math.floor((diffDays % 365) / 30);
    let days = diffDays - (years * 365 + months * 30);

    let hour = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    let minute = Math.floor((diffTime / (1000 * 60)) % 60);
    let second = Math.floor((diffTime / 1000) % 60).toString().padStart(2, "0");

    const date = `${years}y ${months}m ${days}d`;
    const time = `${hour}:${minute}:${second}`;

    return `${date}\n${time}`;
  };

  const [mounted, setMounted] = useState(false);
  const [age, setAge] = useState(diffCalc());

  setInterval(() => {
    setAge(diffCalc());
  }, 1000);

  useEffect(() => {
    setMounted(true);
  }, []);

  const statCards = [
    {
      title: "My Age",
      value: age,
      link: "/about",
    },
    {
      title: "My Achievement",
      value: "I'm still alive",
      link: "/about",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
      {mounted &&
        statCards.map((card, index) => {
          return (
            <div
              className="flex flex-col justify-between gap-2 rounded-lg bg-gradient-to-r from-neutral-200 to-zinc-200 p-4 shadow-xl dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800"
              key={index}
            >
              <a
                className="m-0 flex gap-4 text-zinc-700 dark:text-zinc-400"
                href={card.link}
                target="_blank"
                rel="noreferrer"
              >
                {card.title} <FiExternalLink />
              </a>
              <h3 className="m-0 text-zinc-900 dark:text-zinc-200">
                {card.value || "-"}
              </h3>
            </div>
          );
        })}
    </div>
  );
}
