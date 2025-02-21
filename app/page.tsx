import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
      <div className="w-full max-w-[550px] space-y-6">
        <div className="space-y-4">
          <Image
            src="/sarke_logo.svg"
            alt="Sarke Logo"
            width={100}
            height={100}
            className="relative top-[1px] mx-auto pb-5"
          />
          <p className="text-black/70 text-lg tracking-tight font-serif mx-auto max-w-[500px]">
            Your personal news companion that cuts through the noise
          </p>
        </div>

        <article className="font-serif space-y-6 text-base leading-relaxed">
          <p className="text-black/80">
            Time is our most valuable asset, yet we spend countless hours
            filtering through endless news feeds and social media to stay
            informed about what truly matters to us.
            <br />
            <br />
            We&apos;re introducing Sarke, a fundamentally different approach
            to news consumption. Our mission is clear: deliver precisely
            curated news based on your specific interests, eliminating the
            noise that consumes your valuable time.
            Sarke isn&apos;t another news aggregator. It&apos;s a paradigm
            shift in how we consume information.
            <br />
            <br />
            Our approach is ruthlessly minimal: you define your interests
            once, and we handle the rest. No algorithms manipulating your
            attention, no endless scrolling, no distractions. Just pure,
            focused information delivery.
            <br />
            <br />
            We&apos;ve stripped away everything that doesn&apos;t serve our
            core purpose. The result is a platform that respects both your
            time and your attention.
            Sarke represents our commitment to a single goal: transforming how
            people access and consume news in the digital age. Our design
            philosophy, technology stack, and user experience are all aligned
            to achieve this mission.
          </p>

          <p className="text-black/90 font-medium">
            This is Sarke. Your personal news companion that cuts through the
            noise.
          </p>
        </article>

        <footer className="mt-12 space-y-4 text-sm text-black/60 text-center">
          <div className="flex justify-center">
            <a
              href="https://github.com/sarke-org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/80 transition-colors block"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-center gap-1">
            <a
              href="https://x.com/theiskaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/80 transition-colors"
            >
              @theiskaa
            </a>
            {"•"}
            <span>2025-01-01</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
