const testimonials = [
  {
    name: "Grace W.",
    occasion: "Birthday Flowers",
    quote:
      "The flowers were beautifully arranged and looked even better in person. The whole order felt thoughtful and special.",
  },
  {
    name: "Brian K.",
    occasion: "Gift Hamper",
    quote:
      "I needed a gift hamper on short notice and the final presentation was excellent. Everything looked premium and well put together.",
  },
  {
    name: "Mercy A.",
    occasion: "Wedding Decor",
    quote:
      "The floral styling added such a beautiful touch to our celebration. The team understood the look we wanted and delivered it very well.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4145A]">
            Customer Love
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Beautiful moments, shared by our customers.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            From flowers and gift hampers to event decor, we love helping our
            customers make meaningful moments feel even more special.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative flex min-h-[300px] flex-col rounded-2xl border border-pink-100 bg-[#FFF9FB] p-7"
            >
              {/* Quote mark */}
              <div className="font-serif text-5xl leading-none text-[#D4145A]/20">
                “
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {testimonial.quote}
              </p>

              <div className="mt-auto pt-8">
                <div className="mb-4 h-px w-full bg-pink-100" />

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-lg text-zinc-900">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#D4145A]">
                      {testimonial.occasion}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 text-sm text-[#D4145A]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#FFF4F7] px-6 py-7 sm:flex-row sm:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4145A]">
              Made With Care
            </p>

            <p className="mt-2 font-serif text-2xl text-zinc-900">
              Every order is created for someone&apos;s special moment.
            </p>
          </div>

          <a
            href="https://wa.me/254714543029?text=Hello%20Innovative%20Decor%20Centre,%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-[#D4145A] px-6 text-sm font-semibold text-white transition hover:bg-[#B5104D]"
          >
            Order With Us →
          </a>
        </div>
      </div>
    </section>
  );
}
