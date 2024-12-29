import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-[650px] px-4 py-8">
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-xl font-medium tracking-tight">Sarke</h1>
            <Image
              src="/sarke_logo.svg"
              alt="Sarke Logo"
              width={24}
              height={24}
              className="relative top-[1px]"
            />
          </div>
          <p className="text-black/80 opacity-70 text-sm tracking-tight whitespace-pre-wrap font-serif">
            Your personal news companion that cuts through the noise
          </p>
        </div>

        <article className="font-serif">
          <div className="space-y-6 text-base leading-relaxed">
            <p className="text-black/80">
              Time is our most valuable asset, yet we spend countless hours
              filtering through endless news feeds and social media to stay
              informed about what truly matters to us.
            </p>

            <p className="text-black/90">
              We&apos;re introducing Sarke, a fundamentally different approach
              to news consumption. Our mission is clear: deliver precisely
              curated news based on your specific interests, eliminating the
              noise that consumes your valuable time.
            </p>

            <p className="text-black/90 font-medium">
              Sarke isn&apos;t another news aggregator. It&apos;s a paradigm
              shift in how we consume information.
            </p>

            <p className="text-black/80">
              Our approach is ruthlessly minimal: you define your interests
              once, and we handle the rest. No algorithms manipulating your
              attention, no endless scrolling, no distractions. Just pure,
              focused information delivery.
            </p>

            <p className="text-black/80">
              We&apos;ve stripped away everything that doesn&apos;t serve our
              core purpose. The result is a platform that respects both your
              time and your attention.
            </p>

            <p className="text-black/90">
              Sarke represents our commitment to a single goal: transforming how
              people access and consume news in the digital age. Our design
              philosophy, technology stack, and user experience are all aligned
              to achieve this mission.
            </p>

            <p className="text-black/90 font-medium">
              This is Sarke. Your personal news companion that cuts through the
              noise.
            </p>
          </div>
        </article>

        <footer className="mt-12 space-y-2 text-sm text-black/60">
          <p>
            <a
              href="https://x.com/theiskaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/80 transition-colors"
            >
              @theiskaa
            </a>
          </p>
          <p>2025-01-01</p>
        </footer>
      </div>
    </main>
  );
}
