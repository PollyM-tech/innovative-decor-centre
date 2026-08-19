import {
  Flower2,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: Flower2,
    title: "Beautiful Floral Selection",
    description:
      "Choose from fresh flowers, artificial arrangements and decorative floral pieces for different spaces and occasions.",
  },
  {
    icon: Gift,
    title: "Thoughtful Gift Hampers",
    description:
      "We create carefully presented gift hampers for men, women, birthdays, appreciation, romance and special celebrations.",
  },
  {
    icon: Sparkles,
    title: "Custom Orders",
    description:
      "Have something specific in mind? We can help create a personalized floral arrangement or gift hamper around your idea.",
  },
  {
    icon: Heart,
    title: "Made for Every Occasion",
    description:
      "From birthdays and anniversaries to weddings, congratulations and simple surprises, we help make moments feel more special.",
  },
  {
    icon: MapPin,
    title: "Convenient Nairobi Location",
    description:
      "Visit us at Aga Khan Walk, Re-insurance Plaza, Ground Floor, and explore our flowers and gift selections in person.",
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp Ordering",
    description:
      "Send us a message, tell us what you need and get help choosing flowers, hampers or decor for your occasion.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#FFF8FA] py-20 sm:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-pink-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
              Why Choose Us
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-zinc-900 sm:text-4xl">
              Thoughtful details for
              <span className="block italic text-[#D4145A]">
                meaningful moments.
              </span>
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-xl text-sm leading-7 text-zinc-600">
              Innovative Decor Centre brings flowers, gifting and creative
              presentation together in one place, making it easier to find
              something beautiful for the people and occasions that matter.
            </p>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group rounded-2xl border border-pink-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4145A]/10 text-[#D4145A] transition duration-300 group-hover:bg-[#D4145A] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 font-serif text-xl text-zinc-900">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-pink-100 bg-white sm:grid-cols-3">
          <div className="border-b border-pink-100 p-6 text-center sm:border-b-0 sm:border-r">
            <p className="font-serif text-2xl text-[#D4145A]">Fresh</p>
            <p className="mt-1 text-xs text-zinc-500">
              Beautiful flower selections
            </p>
          </div>

          <div className="border-b border-pink-100 p-6 text-center sm:border-b-0 sm:border-r">
            <p className="font-serif text-2xl text-[#D4145A]">Personal</p>
            <p className="mt-1 text-xs text-zinc-500">Custom gifting options</p>
          </div>

          <div className="p-6 text-center">
            <p className="font-serif text-2xl text-[#D4145A]">Convenient</p>
            <p className="mt-1 text-xs text-zinc-500">
              Shop or order on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
