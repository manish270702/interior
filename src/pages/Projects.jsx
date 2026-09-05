import { useState } from "react";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Kitchen",
    "Wardrobe",
    "Living",
    "Bedroom",
    "Full Home",
  ];

  const list =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="section py-20">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
          Portfolio
        </p>

        <h1 className="display mt-3 text-5xl">
          Spaces we've brought to life.
        </h1>

        <p className="mt-5 leading-7 text-ink/60">
          Explore kitchens, wardrobes and complete homes designed with a focus
          on beauty and function.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-full px-5 py-2 text-sm ${
              filter === category
                ? "bg-ink text-white"
                : "bg-white hover:bg-black/5"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}