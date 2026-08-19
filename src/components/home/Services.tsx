import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Fresh Flowers",
    description:
      "Beautiful fresh bouquets and floral arrangements prepared for birthdays, anniversaries, celebrations and everyday gifting.",
    href: "#fresh-flowers",
  },
  {
    number: "02",
    title: "Artificial Flowers",
    description:
      "Elegant artificial flowers and decorative plants for homes, offices, churches, receptions and long-lasting displays.",
    href: "#artificial-flowers",
  },
  {
    number: "03",
    title: "Gift Hampers",
    description:
      "Thoughtfully curated hampers for women, men, birthdays, appreciation, romance and memorable surprises.",
    href: "#gift-hampers",
  },
  {
    number: "04",
    title: "Floral Arrangements",
    description:
      "Custom floral styling for churches, offices, tables, entrances, special spaces and meaningful occasions.",
    href: "#fresh-flowers",
  },
  {
    number: "05",
    title: "Event Decor",
    description:
      "Creative floral and decorative styling for weddings, birthdays, bridal showers, baby showers and special celebrations.",
    href: "#events",
  },
  {
    number: "06",
    title: "Custom Orders",
    description:
      "Tell us what you have in mind and we can help create a personalized flower arrangement or gift hamper for your occasion.",
    href: "https://wa.me/254714543029?text=Hello%20Innovative%20Decor%20Centre,%20I%20would%20like%20to%20make%20a%20custom%20order.",
    external: true,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
              What We Do
            </p>

            <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
              Flowers, gifts and decor for every moment.
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-xl text-sm leading-7 text-zinc-500">
              From fresh bouquets and timeless artificial flowers to thoughtful
              gifts and event styling, Innovative Decor Centre helps make every
              occasion feel beautifully considered.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const cardClasses =
              "group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-pink-100 bg-[#FFF9FB] p-7 transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl";

            const content = (
              <>
                <span className="absolute right-6 top-3 font-serif text-6xl text-[#D4145A]/[0.06]">
                  {service.number}
                </span>

                <div className="relative z-10">
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#D4145A]/10 text-[#D4145A]">
                    <span className="text-lg">✿</span>
                  </div>

                  <h3 className="font-serif text-2xl text-zinc-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <span className="inline-flex items-center gap-3 text-xs font-semibold text-[#D4145A]">
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </>
            );

            if (service.external) {
              return (
                <a
                  key={service.title}
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClasses}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={service.title}
                href={service.href}
                className={cardClasses}
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#D4145A] px-6 py-8 text-white sm:flex-row sm:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-200">
              Need Something Special?
            </p>

            <h3 className="mt-2 font-serif text-2xl">
              We can create a custom order for your occasion.
            </h3>
          </div>

          <a
            href="https://wa.me/254714543029?text=Hello%20Innovative%20Decor%20Centre,%20I%20would%20like%20to%20make%20a%20custom%20order."
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-[#D4145A]"
          >
            Talk to Us →
          </a>
        </div>
      </div>
    </section>
  );
}
