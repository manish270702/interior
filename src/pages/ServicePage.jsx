import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import QuoteForm from "../components/QuoteForm";

const content = {
  kitchen: {
    title: "Modular Kitchens",
    intro:
      "Beautifully planned kitchens that balance style, storage and everyday functionality.",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1800&q=90",
    options: [
      {
        title: "Straight Kitchen",
        image: "https://ik.imagekit.io/x8rvzz4ku/uploads/straight.jpeg",
      },
      {
        title: "L-Shaped Kitchen",
        image: "https://ik.imagekit.io/x8rvzz4ku/uploads/L3.jpeg",
      },
      {
        title: "U-Shaped Kitchen",
        image: "https://ik.imagekit.io/x8rvzz4ku/uploads/mansarovar_site.png",
      },
      {
        title: "Parallel Kitchen",
        image: "https://ik.imagekit.io/x8rvzz4ku/uploads/olive.png",
      },

    ],
  },

  wardrobe: {
    title: "Modular Wardrobes",
    intro:
      "Smart storage solutions with finishes and configurations designed for your bedroom.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1800&q=90",
    options: [
      {
        title: "Sliding Wardrobe",
        image: ""
      },
      {
        title: "Hinged Wardrobe",
        image: ""
      },
      {
        title: "Walk-in Wardrobe",
        image: ""
      },
      {
        title: "Loft Storage",
        image: ""
      },
    ],
  },

  interior: {
    title: "Complete Home Interiors",
    intro:
      "A cohesive interior for every room, from the living room to the bedroom and beyond.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
    options: [
      "Living Room",
      "Bedroom",
      "Dining Room",
      "TV Unit",
      "Study Room",
      "Pooja Room",
    ],
  },
};

export default function ServicePage({ type }) {
  const c = content[type];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={c.image}
          className="absolute inset-0 h-full w-full object-cover"
          alt={c.title}
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="section relative flex h-full items-end pb-16 text-white">
          <div>
            <p className="text-sm uppercase tracking-[.3em] text-white/70">
              TJ Interio
            </p>

            <h1 className="display mt-3 text-5xl sm:text-6xl">
              {c.title}
            </h1>

            <p className="mt-4 max-w-xl text-white/80">
              {c.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Explore Options */}
      <section className="section py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
            Explore
          </p>

          <h2 className="display mt-3 text-4xl">
            Choose the right solution for your space.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.options.map((option) => (
            <div
              className="card group"
              key={option.title}
            >
              <img
                className="aspect-[4/3] w-full object-cover"
                src={option.image}
                alt={option.title}
              />

              <div className="flex items-center justify-between p-5">
                <h3 className="font-semibold">
                  {option.title}
                </h3>

                <ArrowRight
                  size={18}
                  className="text-sand"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-white py-20">
        <div className="section grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
              Our promise
            </p>

            <h2 className="display mt-3 text-4xl">
              Designed around your life.
            </h2>

            <div className="mt-7 grid gap-4">
              {[
                "Personalized design consultation",
                "Detailed space planning",
                "Premium materials and finishes",
                "Professional installation",
                "Transparent quotation",
              ].map((item) => (
                <div
                  className="flex items-center gap-3 text-sm"
                  key={item}
                >
                  <Check
                    size={18}
                    className="text-sand"
                  />

                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="btn-primary mt-8"
            >
              Start Your Project
            </Link>
          </div>

          {/* Quote Form */}
          <QuoteForm />
        </div>
      </section>
    </>
  );
}