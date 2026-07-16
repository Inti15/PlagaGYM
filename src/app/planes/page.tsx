import Link from "next/link";
import { PLANS, PLAN_FEATURES } from "@/data/plans";
import PageHeader from "@/components/PageHeader";
import { HERO_IMAGES } from "@/components/ParallaxHero";
import Layout from "@/components/Layout";

const formatUYU = (n: number) =>
  new Intl.NumberFormat("es-UY", {
    style: "currency",
    currency: "UYU",
    maximumFractionDigits: 0,
  }).format(n);

export default function PlanesPage() {
  return (
    <Layout>
      <PageHeader
        title="Planes"
        subtitle="Elegí el plan que se adapta a tu objetivo."
        eyebrow="Membresías"
        image={HERO_IMAGES.planes}
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {PLANS.map((plan) => {
              const isHighlight = plan.highlight;
              return (
                <article
                  key={plan.id}
                  className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:p-8 hover-lift ${
                    isHighlight
                      ? "border-brand-light bg-gradient-to-br from-brand to-brand-light text-white glow-on-hover"
                      : "border-brand/10 bg-white"
                  }`}
                >
                  {isHighlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-950 shadow">
                      Más elegido
                    </span>
                  )}

                  <h3
                    className={`font-display text-3xl ${
                      isHighlight ? "text-white" : "text-ink"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-3 font-display text-5xl ${
                      isHighlight ? "text-white" : "text-brand-light"
                    }`}
                  >
                    {formatUYU(plan.price)}
                    <span
                      className={`ml-1 text-base font-semibold ${
                        isHighlight ? "text-white/80" : "text-ink/60"
                      }`}
                    >
                      /mes
                    </span>
                  </p>

                  <ul
                    className={`mt-6 flex-1 space-y-3 text-sm ${
                      isHighlight ? "text-white/90" : "text-ink/80"
                    }`}
                  >
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          className={`mt-0.5 h-5 w-5 shrink-0 ${
                            isHighlight ? "text-amber-300" : "text-brand-light"
                          }`}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/login"
                    className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 hover-lift ${
                      isHighlight
                        ? "bg-white text-brand hover:bg-brand-softer focus:ring-white"
                        : "bg-brand-light text-white hover:bg-brand focus:ring-brand-light"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="bg-brand-softer py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Compará los planes
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-2xl bg-white shadow-sm">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider">
                    Característica
                  </th>
                  {PLANS.map((p) => (
                    <th
                      key={p.id}
                      className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider"
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand/10">
                {PLAN_FEATURES.map((feature, idx) => (
                  <tr
                    key={feature.id}
                    className={`transition hover:bg-brand-softer/60 ${
                      idx % 2 ? "bg-brand-softer/30" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-sm font-semibold text-ink">
                      {feature.label}
                    </td>
                    {PLANS.map((p) => {
                      const included = feature.includedIn.includes(
                        p.id as (typeof PLAN_FEATURES)[number]["includedIn"][number]
                      );
                      return (
                        <td key={p.id} className="px-4 py-3 text-sm">
                          {included ? (
                            <span
                              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
                              aria-label="Incluido"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={3}
                                className="h-4 w-4"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-700"
                              aria-label="No incluido"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={3}
                                className="h-4 w-4"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
