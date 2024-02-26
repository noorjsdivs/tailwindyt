import React from "react";
import logoAirbnb from "@/img/logos/airbnb.svg";
import logoFacebook from "@/img/logos/facebook.svg";
import logoPlanetaria from "@/img/logos/planetaria.svg";
import logoStarbucks from "@/img/logos/starbucks.svg";
import Image, { type ImageProps } from "next/image";
import { FaBriefcase } from "react-icons/fa";
import { Button } from "./Button";
import { BsArrowDown } from "react-icons/bs";

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

const Role = ({ role }: { role: Role }) => {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex w-10 h-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-red-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt="roleImage"
          className="h-7 w-7"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">-</span>
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
};

const Resume = () => {
  let resume: Array<Role> = [
    {
      company: "Planetaria",
      title: "CEO",
      logo: logoPlanetaria,
      start: "2019",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Airbnb",
      title: "Product Designer",
      logo: logoAirbnb,
      start: "2014",
      end: "2019",
    },
    {
      company: "Facebook",
      title: "iOS Software Engineer",
      logo: logoFacebook,
      start: "2011",
      end: "2014",
    },
    {
      company: "Starbucks",
      title: "Shift Supervisor",
      logo: logoStarbucks,
      start: "2008",
      end: "2011",
    },
  ];
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FaBriefcase className="text-xl" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <BsArrowDown className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
};

export default Resume;
