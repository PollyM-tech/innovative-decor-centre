import Image from "next/image";

const events = [
  {
    title: "Weddings",
    subtitle: "Elegant floral styling",
    description:
      "Romantic floral arrangements and decorative details created to complement your wedding theme beautifully.",
    image: "/images/flowers/churchflowerartificial2.png",
  },
  {
    title: "Birthdays",
    subtitle: "Beautiful celebrations",
    description:
      "Creative floral styling, thoughtful decor and beautiful details for birthdays and memorable celebrations.",
    image: "/images/flowers/redpinkrosefreshflower.png",
  },
  {
    title: "Special Occasions",
    subtitle: "Made for your moment",
    description:
      "From bridal showers and baby showers to intimate celebrations, we help bring your ideas to life.",
    image: "/images/flowers/yellowpinkwhitefreshflower.png",
  },
];

export default function FeaturedEvents() {
  const whatsappUrl =
    "https://wa.me/254714543029?text=Hello%20Innovative%20Decor%20Centre,%20I%20would%20like%20to%20ask%20about%20event%20decor.";

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#21171B] py-20 text-white sm:py-24"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#D4145A]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-300">
              Events & Decor
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              Beautiful floral touches for
              <span className="block italic text-pink-300">
                unforgettable celebrations.
              </span>
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-xl text-sm leading-7 text-zinc-300">
              Beyond the flower shop, Innovative Decor Centre also provides
              floral styling and event decor for weddings, birthdays, showers
              and other special occasions.
            </p>
          </div>
        </div>

        {/* Featured events */}
        <div className="grid gap-5 lg:grid-cols-3">
          {events.map((event, index) => (
            <article
              key={event.title}
              className="group relative min-h-[470px] overflow-hidden rounded-3xl"
            >
              <Image
                src={event.image}
                alt={`${event.title} decor by Innovative Decor Centre`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Number */}
              <span className="absolute right-5 top-4 font-serif text-6xl text-white/15">
                0{index + 1}
              </span>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-pink-300">
                  {event.subtitle}
                </p>

                <h3 className="mt-2 font-serif text-3xl text-white">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {event.description}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 text-xs font-semibold text-white"
                >
                  Plan This Event
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Event types */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-300">
                We Also Style
              </p>

              <h3 className="mt-3 font-serif text-2xl">
                More occasions, your way.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm text-zinc-300 sm:grid-cols-3">
              {[
                "Bridal Showers",
                "Baby Showers",
                "Engagements",
                "Corporate Events",
                "Church Events",
                "Private Celebrations",
              ].map((item) => (
                <div key={item} className="border-b border-white/10 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#D4145A] p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-pink-200">
              Planning Something Special?
            </p>

            <h3 className="mt-2 font-serif text-2xl">
              Tell us your occasion and the look you have in mind.
            </h3>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-[#D4145A]"
          >
            Ask About Event Decor →
          </a>
        </div>
      </div>
    </section>
  );
}
