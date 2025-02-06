"use client";

import { Command as Cmd, MoveRight } from "lucide-react";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";

import { bio } from "@/data/bio";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-start flex-grow h-full -mt-20">
      <h1 className="text-6xl font-extrabold tracking-wide font-neuzeit bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
        {"DHEERAJ NAGURU"}
      </h1>
      <div className="mt-5 text-white">
        {bio?.currentPosition} at{" "}
        <LinkPreview
          href={bio?.currentCompany || ""}
          url={bio?.currentCompanyImage || ""}
          target="_blank"
          rel="noopener noreferrer"
          className="pb-0.5 border-b-2 border-slate-600 font-bold"
        >
          {bio?.currentCompany}
        </LinkPreview>
      </div>
      <p className="my-5 text-slate-500">{bio?.tagLine}</p>
      <div
        className="mt-5 font-bold flex items-center gap-4 cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      >
        <p className="flex items-center gap-2">
          Press
          <Cmd
            size={16}
            className="w-6 h-6 bg-slate-400 p-1 rounded flex items-center justify-center stroke-black"
          />
          <span className="w-6 h-6 bg-slate-400 text-slate-800 rounded flex items-center justify-center pt-0.5">
            K
          </span>
          to start
        </p>
        <MoveRight />
      </div>
    </div>
  );
};

export default Home;
