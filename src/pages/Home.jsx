import { ArrowRight, Check, Compass, Ruler, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { services, projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import QuoteForm from "../components/QuoteForm";

import { Helmet } from "react-helmet-async";

export default function Home() {
  const features = [
    {
      title: "Design expertise",
      icon: Compass,
    },
    {
      title: "Smart planning",
      icon: Ruler,
    },
    {
      title: "Premium execution",
      icon: Sparkles,
    },
    {
      title: "Made for you",
      icon: Check,
    },
  ];

  return (
    <>

      <Helmet>
        <title>TJ Interio | Interior Designers in Jaipur</title>

        <meta
          name="description"
          content="TJ Interio offers modern home interiors, modular kitchens, wardrobes and office interior design services in Jaipur."
        />

        <meta
          name="keywords"
          content="interior designers in Jaipur, home interior Jaipur, modular kitchen Jaipur, wardrobe design Jaipur"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[680px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Luxury home interior"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="section relative flex min-h-[680px] items-center">
          <div className="max-w-2xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[.3em] text-white/75">
              Interiors that feel like you
            </p>

            <h1 className="display text-5xl font-semibold leading-[1.05] sm:text-7xl">
              Design your dream home.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Premium modular kitchens, wardrobes and complete interiors
              crafted around your lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-light"
              >
                Get Free Quote
                <ArrowRight
                  size={17}
                  className="ml-2"
                />
              </Link>

              <Link
                to="/projects"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
            What we design
          </p>

          <h2 className="display mt-3 text-4xl sm:text-5xl">
            Spaces made for living beautifully.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Link
              to={service.href}
              key={service.key}
              className="group card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink/60">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center text-sm font-semibold text-sand">
                  Explore
                  <ArrowRight
                    size={15}
                    className="ml-2"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Modular Kitchen Section */}
      <section className="bg-white py-20">
        <div className="section grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
              Modular kitchen
            </p>

            <h2 className="display mt-3 text-4xl sm:text-5xl">
              The heart of your home, designed your way.
            </h2>

            <p className="mt-5 leading-7 text-ink/60">
              From compact straight kitchens to spacious islands, we create
              practical layouts with beautiful finishes and intelligent
              storage.
            </p>

            <Link
              to="/modular-kitchen"
              className="btn-primary mt-7"
            >
              Explore Kitchens
            </Link>
          </div>

          <img
            className="aspect-[4/3] w-full rounded-3xl object-cover"
            src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1400&q=90"
            alt="Modular kitchen"
          />
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
              Our work
            </p>

            <h2 className="display mt-3 text-4xl">
              Recent projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="text-sm font-semibold"
          >
            View all
            <ArrowRight
              className="inline"
              size={15}
            />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              project={project}
              key={project.title}
            />
          ))}
        </div>
      </section>

      {/* Why TJ Interio */}
      <section className="bg-ink py-20 text-white">
        <div className="section">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
              Why TJ Interio
            </p>

            <h2 className="display mt-3 text-4xl sm:text-5xl">
              From first sketch to final installation.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="border-t border-white/15 pt-5"
              >
                <Icon className="text-sand" />

                <h3 className="mt-5 font-semibold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Thoughtful solutions, transparent communication and
                  attention to every detail.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation Section */}
      <section className="section py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
              Let's build it
            </p>

            <h2 className="display mt-3 text-4xl sm:text-5xl">
              Get your free quotation.
            </h2>

            <p className="mt-5 leading-7 text-ink/60">
              Tell us what you're planning. Our design consultant will get in
              touch to understand your space and requirements.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}