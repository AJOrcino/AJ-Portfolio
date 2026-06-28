import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const contactInfo = [
    {
      title: "Email Address",
      value: "allenjeffersonorcino@gmail.com",
      href: "mailto:allenjeffersonorcino@gmail.com",
      type: "link",
    },
    {
      title: "Contact Number",
      value: "+63 981 173 2889",
      href: "tel:+639811732889",
      type: "link",
    },
    {
      title: "Location",
      value: "Metro Manila, Philippines",
      href: null,
      type: "text",
    },
  ];

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Let’s build something meaningful together
          </h2>

          <p className="mx-auto mb-10 mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            I’m open to opportunities, collaborations, and conversations about
            meaningful software products and user-focused digital experiences.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[180px] flex-col justify-center rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <h3 className="mb-4 text-lg font-semibold uppercase tracking-wider text-cyan-300">
                  {item.title}
                </h3>

                {item.type === "link" ? (
                  <a
                    href={item.href}
                    className="break-all text-sm text-slate-300 transition hover:text-cyan-300 md:text-base"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-slate-300 md:text-base">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
