export default function ProjectCard({project}) {
  return <article className="group overflow-hidden rounded-2xl bg-white">
    <div className="aspect-[4/3] overflow-hidden">
      <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
    </div>
    <div className="p-5">
      <div className="flex justify-between gap-4">
        <div><h3 className="font-semibold">{project.title}</h3><p className="mt-1 text-sm text-ink/50">{project.location}</p></div>
        <span className="text-xs uppercase tracking-wider text-sand">{project.category}</span>
      </div>
    </div>
  </article>
}