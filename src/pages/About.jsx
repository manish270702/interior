import { Check } from "lucide-react";

export default function About() {
  const approach = [
    {
      title: "Listen",
      description:
        "We begin with your lifestyle, taste, space and budget.",
    },
    {
      title: "Design",
      description:
        "We turn your requirements into a considered design and plan.",
    },
    {
      title: "Deliver",
      description:
        "Our team coordinates execution and installation with care.",
    },
  ];

  return (
    <>
      {/* About Hero Section */}
      <section className="section py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.25em] text-sand">
              About TJ Interio
            </p>

            <h1 className="display mt-3 text-5xl">
              Interiors made personal.
            </h1>

            <p className="mt-6 leading-8 text-ink/60">
              We create kitchens, wardrobes and complete home interiors that
              combine timeless aesthetics with practical everyday living.
            </p>
          </div>

          <img
            className="aspect-[4/3] rounded-3xl object-cover"
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=90"
            alt="Interior design"
          />
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20">
        <div className="section">
          <h2 className="display text-4xl">
            Our approach
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-5"
              >
                <Check className="text-sand" />

                <h3 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}