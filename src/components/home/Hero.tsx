import Image from "next/image";
import Link from "next/link";

const freshFlowers = [
  {
    title: "Pink & Red Rose Bouquet",
    image: "/images/flowers/pinkredrosefreshflower.png",
  },
  {
    title: "Red Berry Rose Bouquet",
    image: "/images/flowers/redberryrosefreshflower.png",
  },
  {
    title: "Red Berry Roses",
    image: "/images/flowers/redberryrosesfreshflower.png",
  },
  {
    title: "Red & Pink Rose Bouquet",
    image: "/images/flowers/redpinkrosefreshflower.png",
  },
  {
    title: "Classic Red Roses",
    image: "/images/flowers/redrsoefreshflower.png",
  },
  {
    title: "Yellow Pink & White Arrangement",
    image: "/images/flowers/yellowpinkwhitefreshflower.png",
  },
];

const artificialFlowers = [
  {
    title: "Artificial Plant Arrangement",
    image: "/images/flowers/artificialplant.png",
  },
  {
    title: "Artificial Plant Collection",
    image: "/images/flowers/artificialplant2.png",
  },
  {
    title: "Decorative Artificial Plant",
    image: "/images/flowers/artificialplant3.png",
  },
  {
    title: "Artificial Floral Plant",
    image: "/images/flowers/artificialplant4.png",
  },
  {
    title: "Church Artificial Flowers",
    image: "/images/flowers/churchflowerartificial.png",
  },
  {
    title: "Church Floral Arrangement",
    image: "/images/flowers/churchflowerartificial2.png",
  },
];

const giftHampers = [
  {
    title: "Women's Gift Hamper",
    type: "For Her",
    image: "/images/gallery/womengift1.png",
  },
  {
    title: "Beauty & Wellness Hamper",
    type: "For Her",
    image: "/images/gallery/womengift3.png",
  },
  {
    title: "Premium Women's Hamper",
    type: "For Her",
    image: "/images/gallery/womengift5.png",
  },
  {
    title: "Men's Grooming Hamper",
    type: "For Him",
    image: "/images/gallery/mengift1.png",
  },
  {
    title: "Men's Classic Gift Hamper",
    type: "For Him",
    image: "/images/gallery/mengift2.png",
  },
  {
    title: "Gentleman's Gift Set",
    type: "For Him",
    image: "/images/gallery/mengift3.png",
  },
  {
    title: "Premium Men's Hamper",
    type: "For Him",
    image: "/images/gallery/mengift4.png",
  },
];

const occasions = [
  "Birthday",
  "Anniversary",
  "Love & Romance",
  "Congratulations",
  "Thank You",
  "Get Well Soon",
  "Mother's Day",
  "Father's Day",
];

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/254714543029?text=Hello%20Innovative%20Decor%20Centre,%20I%20would%20like%20to%20make%20an%20order.";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#FFF5F8]">
        <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-pink-100/50 blur-3xl" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          {/* Left content */}
          <div className="z-10 py-16 text-center lg:py-20 lg:text-left">
            <p className="font-serif text-xl font-semibold tracking-[0.06em] text-[#D4145A] sm:text-2xl">
              Innovative Decor Centre
            </p>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Fresh Flowers • Artificial Flowers • Gift Hampers
            </p>

            {/* Animated hero heading */}
            <div className="mt-7 overflow-hidden">
              <h1 className="mx-auto max-w-2xl font-serif text-4xl leading-[1] tracking-[-0.04em] sm:text-5xl lg:mx-0 lg:text-6xl xl:text-[64px]">
                <span
                  className="block translate-y-0 opacity-100 transition-all duration-700 ease-out"
                  style={{ transitionDelay: "100ms" }}
                >
                  Flowers made for
                </span>

                <span
                  className="mt-2 block translate-y-0 italic text-[#D4145A] opacity-100 transition-all duration-700 ease-out"
                  style={{ transitionDelay: "350ms" }}
                >
                  life&apos;s beautiful moments.
                </span>
              </h1>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base lg:mx-0">
              Discover beautiful fresh flowers, elegant artificial arrangements,
              thoughtful gift hampers and floral decor for every meaningful
              occasion.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="#fresh-flowers"
                className="inline-flex min-h-12 items-center justify-center gap-4 rounded-md bg-[#D4145A] px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#B5104D]"
              >
                Explore Flowers
                <span>→</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-pink-300 bg-white px-7 text-sm font-semibold text-[#D4145A] transition hover:-translate-y-0.5 hover:border-[#D4145A]"
              >
                Order on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                ["Fresh", "Quality flowers"],
                ["Thoughtful", "Curated gifts"],
                ["Personal", "Custom orders"],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="border-l-2 border-pink-200 pl-3 text-left sm:pl-4"
                >
                  <p className="font-serif text-sm sm:text-base">{title}</p>
                  <p className="mt-1 text-[10px] text-zinc-500 sm:text-xs">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-[480px] lg:min-h-[680px]">
            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE8EF] sm:h-[470px] sm:w-[470px]" />

            <div className="absolute bottom-[-20px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 sm:h-[580px] sm:w-[580px] lg:bottom-[-30px] lg:left-auto lg:right-[-70px] lg:h-[680px] lg:w-[680px] lg:translate-x-0">
              <Image
                src="/images/flowers/homeprofile.png"
                alt="Luxury rose bouquet from Innovative Decor Centre"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                className="object-contain object-bottom"
              />
            </div>

            <div className="absolute right-3 top-36 hidden rounded-xl border border-pink-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:block">
              <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                Beautifully
              </p>
              <p className="mt-1 font-serif text-base">Handcrafted</p>
            </div>

            <div className="absolute bottom-24 left-3 hidden rounded-xl border border-pink-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:block lg:left-8">
              <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                Available For
              </p>
              <p className="mt-1 font-serif text-base">Custom Orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CATEGORIES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
              Our Collections
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Find something beautiful
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Explore flowers, long-lasting decorative arrangements and
              thoughtful gifts for every occasion.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Link
              href="#fresh-flowers"
              className="group relative min-h-[380px] overflow-hidden rounded-3xl"
            >
              <Image
                src="/images/flowers/redberryrosesfreshflower.png"
                alt="Fresh flowers"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-pink-200">
                  Freshly Arranged
                </p>
                <h3 className="mt-2 font-serif text-3xl">Fresh Flowers</h3>
              </div>
            </Link>

            <Link
              href="#artificial-flowers"
              className="group relative min-h-[380px] overflow-hidden rounded-3xl"
            >
              <Image
                src="/images/flowers/artificialplant.png"
                alt="Artificial flowers"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-pink-200">
                  Timeless Beauty
                </p>
                <h3 className="mt-2 font-serif text-3xl">Artificial Flowers</h3>
              </div>
            </Link>

            <Link
              href="#gift-hampers"
              className="group relative min-h-[380px] overflow-hidden rounded-3xl"
            >
              <Image
                src="/images/gallery/womengift1.png"
                alt="Gift hamper"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-pink-200">
                  Thoughtfully Curated
                </p>
                <h3 className="mt-2 font-serif text-3xl">Gift Hampers</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FRESH FLOWERS */}
      <section id="fresh-flowers" className="bg-[#FFF8FA] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
                Fresh Flowers
              </p>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Freshly made for your moment.
              </h2>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[#D4145A]"
            >
              Ask what&apos;s available today →
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {freshFlowers.map((flower) => (
              <article
                key={flower.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="relative h-[360px] overflow-hidden">
                  <Image
                    src={flower.image}
                    alt={flower.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#D4145A]">
                    Fresh Flowers
                  </p>

                  <h3 className="mt-2 font-serif text-lg">{flower.title}</h3>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-xs font-semibold text-[#D4145A]"
                  >
                    Order on WhatsApp →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Fresh flower video */}
          <div className="mt-14 grid overflow-hidden rounded-[2rem] bg-zinc-950 lg:grid-cols-[1.2fr_0.8fr]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video h-full w-full object-cover"
            >
              <source src="/videos/fresh-flowers.mp4" type="video/mp4" />
            </video>

            <div className="flex flex-col justify-center p-8 text-white sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-300">
                Fresh From Our Shop
              </p>

              <h3 className="mt-3 font-serif text-3xl">
                See today&apos;s flowers in motion.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-300">
                A closer look at our fresh arrangements, colors and styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLOWER + WINE FEATURE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/flowers/freshflowerwine.png"
              alt="Fresh flowers and wine gift"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:pl-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
              Flowers & Gifting
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Flowers can say a lot.
              <span className="block italic text-[#D4145A]">
                A thoughtful gift says even more.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-600">
              Pair flowers with selected gifts for birthdays, anniversaries,
              congratulations and unforgettable surprises.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center rounded-md bg-[#D4145A] px-6 text-sm font-semibold text-white"
            >
              Create a Custom Gift →
            </a>
          </div>
        </div>
      </section>

      {/* ARTIFICIAL FLOWERS */}
      <section
        id="artificial-flowers"
        className="bg-zinc-950 py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-300">
              Artificial Collection
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Beautiful. Elegant. Long-lasting.
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Artificial flowers and plants for homes, offices, churches and
              decorative spaces.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artificialFlowers.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-zinc-900"
              >
                <div className="relative h-[360px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-pink-300">
                    Artificial Collection
                  </p>

                  <h3 className="mt-2 font-serif text-lg">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {/* Artificial flower video */}
          <div className="mt-14 overflow-hidden rounded-[2rem]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full object-cover"
            >
              <source src="/videos/artificial-flowers.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section id="occasions" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
              Shop By Occasion
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Something beautiful for every occasion.
            </h2>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-pink-100 sm:grid-cols-4">
            {occasions.map((occasion) => (
              <a
                key={occasion}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-32 flex-col items-center justify-center gap-3 border-b border-r border-pink-100 px-4 text-center transition duration-300 hover:bg-[#D4145A] hover:text-white"
              >
                <span className="text-xl text-[#D4145A] transition group-hover:text-white">
                  ✿
                </span>

                <span className="font-serif text-sm">{occasion}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GIFT HAMPERS */}
      <section id="gift-hampers" className="bg-[#FFF4F7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
              Gift Hampers
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Thoughtful gifts for everyone.
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Browse gifts for women, men, birthdays, love, appreciation and
              special celebrations.
            </p>
          </div>

          {/* Uniform gift cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {giftHampers.map((gift) => (
              <article
                key={gift.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src={gift.image}
                    alt={gift.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-h-[150px] flex-col p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#D4145A]">
                    {gift.type}
                  </p>

                  <h3 className="mt-2 font-serif text-lg">{gift.title}</h3>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto pt-5 text-xs font-semibold text-[#D4145A]"
                  >
                    Customize This Hamper →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT SHOP */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/flowers/shopimage.png"
              alt="Innovative Decor Centre shop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:pl-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
              Visit Our Shop
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Come and see our collections in person.
            </h2>

            <div className="mt-7 space-y-2 text-sm leading-7 text-zinc-600">
              <p className="font-semibold text-zinc-900">
                Innovative Decor Centre
              </p>

              <p>Aga Khan Walk</p>
              <p>Re-insurance Plaza, Ground Floor</p>
              <p>Nairobi, Kenya</p>

              <a
                href="tel:+254714543029"
                className="mt-4 inline-block font-semibold text-[#D4145A]"
              >
                +254 714 543 029
              </a>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center rounded-md bg-[#D4145A] px-7 text-sm font-semibold text-white"
            >
              WhatsApp Us →
            </a>
          </div>
        </div>
      </section>

      {/* OPENING HOURS VIDEO */}
      <section className="bg-[#FFF7FA] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-zinc-950">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="aspect-video h-full w-full object-cover"
              >
                <source src="/videos/opening-hours.mp4" type="video/mp4" />
              </video>

              <div className="flex flex-col justify-center bg-[#D4145A] p-8 text-white sm:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-200">
                  Come Visit Us
                </p>

                <h2 className="mt-3 font-serif text-3xl">Opening Hours</h2>

                <p className="mt-5 text-sm leading-7 text-pink-50">
                  Visit our shop for fresh flowers, artificial flowers, gift
                  hampers and personalized recommendations.
                </p>

                <p className="mt-6 text-sm font-semibold">
                  Aga Khan Walk
                  <br />
                  Re-insurance Plaza, Ground Floor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#D4145A] py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-pink-200">
            Flowers • Gifts • Decor
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">
            Tell us what you&apos;re celebrating.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-pink-50">
            We&apos;ll help you choose the right flowers, gift hamper or
            decorative arrangement for the occasion.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center rounded-md bg-white px-8 text-sm font-semibold text-[#D4145A]"
          >
            Order on WhatsApp →
          </a>
        </div>
      </section>
    </main>
  );
}
