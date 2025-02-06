"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const data = {
  global: {
    title: "Projects",
    description: "A collection of my work categorized by year.",
  },
  items: [
    {
      year: 2024,
      projects: [
        {
          name: "Project 1 Project 1 Project 1",
          description: "Brief description of Project 1.",
          url: "",
        },
        {
          name: "Project 2",
          description: "Brief description of Project 2.",
          url: "https://nagurudheeraj.github.io/assets/images/socialmedia.png",
        },
        {
          name: "Project 3",
          description: "Brief description of Project 3.",
          url: "https://nagurudheeraj.github.io/assets/images/socialmedia.png",
        },
      ],
    },
    {
      year: 2023,
      projects: [
        {
          name: "Project 1",
          description: "Brief description of Project 1.",
          url: "https://nagurudheeraj.github.io/assets/images/socialmedia.png",
        },
        {
          name: "Project 2",
          description: "Brief description of Project 2.",
          url: "https://nagurudheeraj.github.io/assets/images/socialmedia.png",
        },
        {
          name: "Project 3",
          description: "Brief description of Project 3.",
          url: "https://nagurudheeraj.github.io/assets/images/socialmedia.png",
        },
      ],
    },
    {
      year: 2022,
      projects: [
        {
          name: "Project 1",
          description: "Brief description of Project 1.",
          url: "https://nagurudheeraj.github.io/assets/images/socialmedia.png",
        },
        {
          name: "Project 2",
          description: "Brief description of Project 2.",
          url: "https://nagurudheeraj.github.io/assets/images/socialmedia.png",
        },
        {
          name: "Project 3",
          description: "Brief description of Project 3.",
          url: "https://nagurudheeraj.github.io/assets/images/socialmedia.png",
        },
      ],
    },
  ],
};

const page = () => {
  return (
    <div className="text-white lg:w-2/3 mx-auto py-20 mb-20">
      <header>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#c2e59c] to-[#64b3f4] text-transparent bg-clip-text">
          Projects I&apos;ve Worked On
        </h1>
        <p className="text-slate-500 mt-2">
          I'm obsessed with side projects and building in public. Here you can
          navigate to 73 different websites, apps, and libraries I built. Some
          projects are still active, others have been discontinued.
        </p>

        {data?.items?.map((list, index) => (
          <div key={index}>
            <h2 className="mt-16 text-lg font-bold mb-3">{list?.year}</h2>
            <ul className="list-disc pl-8 space-y-3">
              {list?.projects?.map((project, index) => (
                <li className=" cursor-pointer hover:text-white" key={index}>
                  <div className="text-neutral-500 dark:text-neutral-400">
                    <LinkPreview
                      url="https://tailwindcss.com"
                      className="font-bold border-b border-gray-400 pb-0.5"
                    >
                      Project Name
                    </LinkPreview>{" "}
                    - and are a great way to build modern websites.
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </header>
    </div>
  );
};

export default page;
