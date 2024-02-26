import SimpleLayout from "@/components/SimpleLayout";
import React from "react";
import logoAnimaginary from "@/img/logos/animaginary.svg";
import logoCosmos from "@/img/logos/cosmos.svg";
import logoHelioStream from "@/img/logos/helio-stream.svg";
import logoOpenShuttle from "@/img/logos/open-shuttle.svg";
import logoPlanetaria from "@/img/logos/planetaria.svg";
import { type Metadata } from "next";
import { Card } from "@/components/Card";
import Image from "next/image";
import { GoLink } from "react-icons/go";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I’ve made trying to put my dent in the universe.",
};

const ProjectPage = () => {
  const projects = [
    {
      name: "Planetaria",
      description:
        "Creating technology to empower civilians to explore space on their own terms.",
      link: { href: "http://planetaria.tech", label: "planetaria.tech" },
      logo: logoPlanetaria,
    },
    {
      name: "Animaginary",
      description:
        "High performance web animation library, hand-written in optimized WASM.",
      link: { href: "#", label: "github.com" },
      logo: logoAnimaginary,
    },
    {
      name: "HelioStream",
      description:
        "Real-time video streaming library, optimized for interstellar transmission.",
      link: { href: "#", label: "github.com" },
      logo: logoHelioStream,
    },
    {
      name: "cosmOS",
      description:
        "The operating system that powers our Planetaria space shuttles.",
      link: { href: "#", label: "github.com" },
      logo: logoCosmos,
    },
    {
      name: "OpenShuttle",
      description:
        "The schematics for the first rocket I designed that successfully made it to orbit.",
      link: { href: "#", label: "github.com" },
      logo: logoOpenShuttle,
    },
  ];
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt="logo"
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-100">
              <GoLink className="text-lg flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
};

export default ProjectPage;
