import ParallaxHero, { type Overlay } from "./ParallaxHero";

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  overlay?: Overlay;
};

export default function PageHeader({
  title,
  subtitle,
  eyebrow,
  image,
  overlay = "dark",
}: Props) {
  // If an image is provided we render the full parallax hero. Otherwise we
  // fall back to the original flat gradient block (keeps things working even
  // for future pages without a photo).
  if (image) {
    return (
      <ParallaxHero
        title={title}
        subtitle={subtitle}
        eyebrow={eyebrow}
        image={image}
        overlay={overlay}
        minHeight="lg"
      />
    );
  }

  return (
    <section
      aria-labelledby="page-header-title"
      className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-light text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1
          id="page-header-title"
          className="font-display text-5xl tracking-tight sm:text-6xl"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg text-white/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
