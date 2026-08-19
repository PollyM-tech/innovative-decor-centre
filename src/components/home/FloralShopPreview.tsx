import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Fresh Flowers",
    subtitle: "Freshly Arranged",
    description:
      "Beautiful fresh bouquets and floral arrangements prepared for birthdays, anniversaries, celebrations and everyday gifting.",
    image: "/images/flowers/redberryrosesfreshflower.png",
    href: "#fresh-flowers",
  },
  {
    title: "Artificial Flowers",
    subtitle: "Timeless Beauty",
    description:
      "Elegant artificial flowers and decorative plants for homes, offices, churches and long-lasting floral displays.",
    image: "/images/flowers/artificialplant.png",
    href: "#artificial-flowers",
  },
  {
    title: "Gift Hampers",
    subtitle: "Thoughtfully Curated",
    description:
      "Beautiful gift hampers for women, men, birthdays, celebrations, appreciation and meaningful surprises.",
    image: "/images/gallery/womengift1.png",
    href: "#gift-hampers",
  },
];

export default function FloralShopPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
              Explore Our Shop
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-zinc-900 sm:text-4xl">
              Flowers and gifts made for
              <span className="block italic text-[#D4145A]">
                every special moment.
              </span>
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-xl text-sm leading-7 text-zinc-500">
              Discover our fresh flowers, elegant artificial arrangements and
              thoughtful gift hampers, all selected to help you celebrate,
              decorate and surprise beautifully.
            </p>
          </div>
        </div>

        {/* Main preview cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {collections.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[440px] overflow-hidden rounded-3xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Number */}
              <span className="absolute right-5 top-4 font-serif text-6xl text-white/15">
                0{index + 1}
              </span>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-pink-200">
                  {item.subtitle}
                </p>

                <h3 className="mt-2 font-serif text-3xl">{item.title}</h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-3 text-xs font-semibold">
                  Explore Collection
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-pink-100 bg-[#FFF8FA] sm:grid-cols-3">
          <div className="border-b border-pink-100 p-6 text-center sm:border-b-0 sm:border-r">
            <p className="font-serif text-xl text-[#D4145A]">Fresh Flowers</p>

            <p className="mt-1 text-xs text-zinc-500">
              Bouquets for every occasion
            </p>
          </div>

          <div className="border-b border-pink-100 p-6 text-center sm:border-b-0 sm:border-r">
            <p className="font-serif text-xl text-[#D4145A]">
              Artificial Flowers
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Elegant and long-lasting
            </p>
          </div>

          <div className="p-6 text-center">
            <p className="font-serif text-xl text-[#D4145A]">Gift Hampers</p>

            <p className="mt-1 text-xs text-zinc-500">
              Thoughtfully curated gifts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
