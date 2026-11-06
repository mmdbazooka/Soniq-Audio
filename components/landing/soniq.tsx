"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Plus,
  Headphones,
  Volume2,
} from "lucide-react";
import {
  SiteHeader,
  ScrollEffects,
  ContactModal,
  Footer,
  SignupForm,
  BrandMark,
  Arrow,
} from "@/components/ui/shared";
import { eqPresets, materials, audioSpecs, anatomy } from "@/data/audio";
const wave = [
  8, 17, 11, 25, 19, 34, 28, 44, 33, 55, 42, 65, 52, 73, 60, 83, 60, 73, 52, 65,
  42, 55, 33, 44, 28, 34, 19, 25, 11, 17, 8,
];
function Waveform({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`
        audio-waveform flex items-center justify-center gap-[4px] w-[190px] h-[48px] [&>i]:w-[2px] [&>i]:min-h-[2px]
        [&>i]:bg-[#d490672e] [&>i]:origin-[center] [&>i]:[animation:audio-wave_4s_ease-in-out_infinite_alternate]
        [&>i:nth-child(3n)]:bg-[#d4906777] [@media(max-width:_1100px)]:w-[150px] [@media(max-width:_1100px)]:gap-[3px]
      ${
        large
          ? `
        waveform-large w-[340px] max-w-[80%] h-[100px] mt-[35px] mx-auto mb-0 gap-[6px] [&>i]:w-[2px]
        [&&>i]:bg-[#a2c3cf33] [&&>i:nth-child(3n)]:bg-[#d8a17577] [@media(max-width:_760px)]:h-[80px]
        [@media(max-width:_760px)]:mt-[25px] [@media(max-width:_760px)]:w-[280px] [@media(max-width:_760px)]:gap-[5px]
      `
          : ""
      }`}
      aria-hidden="true"
    >
      {wave.map((h, i) => (
        <i
          key={i}
          style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
        />
      ))}
    </div>
  );
}
export default function SoniqLanding() {
  const [modal, setModal] = useState(false);
  const [preset, setPreset] = useState(0);
  const [material, setMaterial] = useState(1);
  const [waveExpanded, setWaveExpanded] = useState(false);
  const reduced = useReducedMotion();
  const profile = eqPresets[preset];
  return (
    <>
      <ScrollEffects />
      <SiteHeader
        brand="soniq"
        links={[
          { label: "THE H1", href: "#product" },
          { label: "TECHNOLOGY", href: "#anatomy" },
          { label: "SOUND", href: "#sound" },
          { label: "CRAFT", href: "#craft" },
        ]}
        action="EXPLORE H1"
        onAction={() => setModal(true)}
      />
      <main id="main">
        <section
          id="product"
          className={`
          soniq-hero relative min-h-[900px] h-[100svh] max-h-[1200px] overflow-hidden isolate [&::after]:content-['']
          [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:h-[20%]
          [&::after]:z-[-1] [&::after]:bg-[image:linear-gradient(0deg,_#06080b,_transparent)]
          [&_h1]:text-[length:clamp(100px,_10.6vw,_165px)] [&_h1]:font-medium [&_h1]:leading-[0.86]
          [&_h1]:tracking-[-0.075em] [&_h1>span]:text-[#e9e4df] [@media(max-width:_1100px)]:[&_h1]:text-[length:12.5vw]
          [@media(max-width:_760px)]:h-auto [@media(max-width:_760px)]:min-h-[1000px]
          [@media(max-width:_760px)]:max-h-none [@media(max-width:_760px)]:[&_h1]:text-[length:23vw]
          [@media(max-width:_760px)]:[&_h1]:leading-[0.88] [@media(max-width:_760px)]:[&_h1]:tracking-[-0.07em]
        `}
        >
          <span
            className={`
            soniq-hero-outline absolute right-[-3%] top-[140px] text-[transparent] [-webkit-text-stroke:1px_#b1c1d411]
            font-[family-name:var(--font-display)] text-[length:46vw] leading-[0.8] tracking-[-0.12em] z-[-3]
            [@media(max-width:_760px)]:text-[length:100vw] [@media(max-width:_760px)]:top-[450px]
            [@media(max-width:_760px)]:right-[2%]
          `}
            aria-hidden="true"
          >
            H1
          </span>
          <div
            className={`
            soniq-hero-product absolute right-0 top-[120px] w-[66%] h-[76%] z-[-2]
            [mask-image:linear-gradient(_0deg,_transparent,_#000_8%,_#000_90%,_transparent_)] [&>img]:object-contain
            [&>img]:[mix-blend-mode:lighten] [@media(max-width:_1100px)]:right-[-13%]
            [@media(max-width:_1100px)]:top-[170px] [@media(max-width:_1100px)]:w-[85%] [@media(max-width:_1100px)]:h-[65%]
            [@media(max-width:_760px)]:top-[390px] [@media(max-width:_760px)]:right-[-5%]
            [@media(max-width:_760px)]:w-[110%] [@media(max-width:_760px)]:h-[450px]
            [@media(max-width:_760px)]:[mask-image:linear-gradient(_0deg,_transparent,_#000_12%,_#000_92%,_transparent_)]
            [@media(min-width:_1101px)]:[width:min(63%,_750px)] [@media(min-width:_1101px)]:h-auto
            [@media(min-width:_1101px)]:aspect-[1] [@media(min-width:_1101px)]:top-[105px]
            [@media(min-width:_1101px)]:right-[3%]
            [@media(min-width:_1101px)]:[mask-image:linear-gradient(90deg,_transparent,_#000_9%,_#000_91%,_transparent),_linear-gradient(0deg,_transparent,_#000_7%,_#000_93%,_transparent)]
            [@media(min-width:_1101px)]:[mask-composite:intersect]
          `}
          >
            <Image
              src="/assets/soniq/h1.webp"
              alt="SONIQ H1 concept headphones with graphite aluminum earcups, copper hinges and soft leather cushions"
              fill
              priority
              sizes="(max-width:760px) 100vw, 65vw"
              className={`parallax-image [@media(prefers-reduced-motion:_reduce)]:[transform:none]!`}
            />
          </div>
          <div
            className={`
            soniq-hero-copy relative max-w-[1680px] m-auto pt-[180px] px-[var(--gutter)] pb-[160px] z-[2]
            pointer-events-none [&_a]:pointer-events-auto [&>.eyebrow]:font-[family-name:monospace] [&>.eyebrow]:text-[8px]
            [&>.eyebrow]:tracking-[0.14em] [&>.eyebrow]:text-[#ad9f92] [&>.eyebrow]:mb-[30px] [&>.eyebrow>span]:w-[20px]
            [&>.eyebrow>span]:h-[1px] [&>.eyebrow>span]:bg-[#ed965e] [&>p:not(.eyebrow)]:text-[12px]
            [&>p:not(.eyebrow)]:text-[#a2aab4] [&>p:not(.eyebrow)]:leading-[1.8] [&>p:not(.eyebrow)]:mt-[30px]
            [&>p:not(.eyebrow)]:mx-0 [&>p:not(.eyebrow)]:mb-[27px] [&>.button-row]:gap-[25px]
            [@media(max-width:_1100px)]:pt-[190px] [@media(max-width:_1100px)]:[&>.button-row]:gap-[20px]
            [@media(max-width:_1100px)]:[&_.button]:text-[8px] [@media(max-width:_1100px)]:[&_.button]:py-[13px]
            [@media(max-width:_1100px)]:[&_.button]:px-[16px] [@media(max-width:_1100px)]:[&_.button]:gap-[18px]
            [@media(max-width:_760px)]:pt-[132px] [@media(max-width:_760px)]:pb-0
            [@media(max-width:_760px)]:[&>.eyebrow]:text-[6px] [@media(max-width:_760px)]:[&>.eyebrow]:tracking-[0.12em]
            [@media(max-width:_760px)]:[&>.eyebrow]:mb-[28px] [@media(max-width:_760px)]:[&>.eyebrow]:gap-[8px]
            [@media(max-width:_760px)]:[&>.eyebrow>span]:w-[16px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:text-[11px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:my-[24px] [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mx-0
            [@media(max-width:_760px)]:[&>.button-row]:gap-[18px] [@media(max-width:_760px)]:[&_.button]:text-[7px]
            [@media(max-width:_760px)]:[&_.button]:py-[12px] [@media(max-width:_760px)]:[&_.button]:px-[14px]
            [@media(max-width:_760px)]:[&_.button]:gap-[15px] [@media(max-width:_760px)]:[&_.button]:min-h-[42px]
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              <span />
              H1 / WIRELESS STUDIO HEADPHONES
            </p>
            <h1>
              HEAR
              <br />
              EVERY
              <br />
              <span>DETAIL.</span>
            </h1>
            <p>
              Less noise. More feeling.
              <br />A little closer to the music.
            </p>
            <div
              className={`button-row flex gap-[15px] items-center flex-wrap`}
            >
              <a
                href="#sound"
                className={`
                button min-h-[49px] inline-flex items-center justify-center gap-[25px] font-semibold
                [border:1px_solid_var(--line)] bg-[transparent] [transition:background_0.2s,_transform_0.2s,_border-color_0.2s]
                whitespace-nowrap text-[9px] tracking-[0.09em] py-[15px] px-[20px] [&:hover]:[transform:translateY(-2px)]
                [&:hover]:[border-color:var(--text)] [&.primary]:bg-[#ed9a6c] [&.primary]:text-[#21140d]
                [&.primary]:[border-color:#ed9a6c] [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
                [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
                [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:gap-[20px] primary
              `}
              >
                DISCOVER THE SOUND
                <Arrow />
              </a>
              <a
                href="#anatomy"
                className={`
                hero-feature-link flex items-center gap-[13px] text-[8px] tracking-[0.08em] [&>svg]:text-[#e39467]
                [@media(max-width:_1100px)]:text-[7px] [@media(max-width:_1100px)]:gap-[10px]
                [@media(max-width:_760px)]:text-[7px] [@media(max-width:_760px)]:gap-[8px]
              `}
              >
                VIEW FEATURES
                <Plus size={15} />
              </a>
            </div>
          </div>
          <span
            className={`
            soniq-side-label absolute right-[24px] top-[33%] [writing-mode:vertical-rl] font-[family-name:monospace]
            text-[7px] text-[#778998] tracking-[0.13em] [@media(max-width:_760px)]:right-[12px]
            [@media(max-width:_760px)]:top-[570px] [@media(max-width:_760px)]:text-[6px] micro font-medium uppercase
            leading-[1.6]
          `}
          >
            H1 STUDIO / COPPER CONCEPT / 2026
          </span>
          <div
            className={`
            soniq-hero-bottom absolute bottom-0 left-[var(--gutter)] right-[var(--gutter)] h-[95px]
            [border-top:1px_solid_var(--line)] flex items-center justify-between gap-[40px] [&>a]:flex [&>a]:items-center
            [&>a]:gap-[14px] [&>a]:font-[family-name:monospace] [&>a]:text-[7px] [&>a]:tracking-[0.09em]
            [&>a]:text-[#afb7c1] [&>a>svg]:text-[#dd986c] [&>div:last-child]:flex [&>div:last-child]:items-center
            [&>div:last-child]:gap-[25px] [&>div:last-child]:relative [&>div:last-child]:pb-[16px]
            [&>div:last-child>span]:font-[family-name:monospace] [&>div:last-child>span]:text-[11px]
            [&>div:last-child>span]:text-[#d1dae3] [&>div:last-child>span]:tracking-[0.05em] [&_small]:absolute
            [&_small]:bottom-0 [&_small]:right-0 [&_small]:font-[family-name:monospace] [&_small]:text-[5px]
            [&_small]:tracking-[0.15em] [&_small]:text-[#596775] [@media(max-width:_1100px)]:gap-[25px]
            [@media(max-width:_1100px)]:[&>div:last-child]:gap-[20px] [@media(max-width:_760px)]:h-[115px]
            [@media(max-width:_760px)]:gap-[20px] [@media(max-width:_760px)]:flex-wrap
            [@media(max-width:_760px)]:[align-content:center] [@media(max-width:_760px)]:justify-between
            [@media(max-width:_760px)]:[&>a]:text-[6px] [@media(max-width:_760px)]:[&>a]:gap-[9px]
            [@media(max-width:_760px)]:[&>a>svg]:w-[12px] [@media(max-width:_760px)]:[&_.audio-waveform]:w-[110px]
            [@media(max-width:_760px)]:[&_.audio-waveform]:h-[35px]
            [@media(max-width:_760px)]:[&_.audio-waveform]:gap-[2px]
            [@media(max-width:_760px)]:[&_.audio-waveform>i]:w-[1px] [@media(max-width:_760px)]:[&>div:last-child]:pt-0
            [@media(max-width:_760px)]:[&>div:last-child]:px-0 [@media(max-width:_760px)]:[&>div:last-child]:pb-[15px]
            [@media(max-width:_760px)]:[&>div:last-child]:w-full
            [@media(max-width:_760px)]:[&>div:last-child]:justify-between
            [@media(max-width:_760px)]:[&>div:last-child]:gap-[20px]
            [@media(max-width:_760px)]:[&>div:last-child>span]:text-[9px] [@media(max-width:_760px)]:[&_small]:text-[4px]
          `}
          >
            <a href="#story">
              <ArrowDown size={15} />
              <span>SCROLL INTO THE SOUND</span>
            </a>
            <Waveform />
            <div>
              <span>40 MM</span>
              <span>40 HOURS</span>
              <span>285 G</span>
              <small>CONCEPT SPECIFICATIONS</small>
            </div>
          </div>
        </section>
        <section
          id="story"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto soniq-story pt-[110px] pb-[100px]
          [&>h2]:text-[length:clamp(40px,_6.4vw,_96px)] [&>h2]:leading-[1.06] [&>h2]:font-medium
          [&>h2]:tracking-[-0.06em] [&_h2>span]:text-[#6b7684] [@media(max-width:_760px)]:pt-[70px]
          [@media(max-width:_760px)]:pb-[65px] [@media(max-width:_760px)]:[&>h2]:text-[length:9.4vw]
          [@media(max-width:_760px)]:[&>h2]:leading-[1.14]
        `}
        >
          <div
            className={`
            story-top flex justify-between items-start mb-[55px] [&>.eyebrow]:font-[family-name:monospace]
            [&>.eyebrow]:text-[8px] [&>p:not(.eyebrow)]:text-[12px] [&>p:not(.eyebrow)]:text-[#9ba5b3]
            [&>p:not(.eyebrow)]:mr-[4%] [&>p:not(.eyebrow)]:leading-[1.9] [@media(max-width:_760px)]:block
            [@media(max-width:_760px)]:mb-[35px] [@media(max-width:_760px)]:[&>.eyebrow]:text-[7px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:text-[11px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mt-[25px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:max-w-[300px]
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              01 / A DIFFERENT KIND OF LISTENING
            </p>
            <p>
              For the note you never noticed.
              <br />
              The lyric that stays with you.
              <br />
              The feeling that says everything.
            </p>
          </div>
          <h2 className="reveal-block">
            A LITTLE LESS NOISE.
            <br />
            <span>A LOT MORE FEELING.</span>
          </h2>
          <div
            className={`
            sound-story-bottom grid [grid-template-columns:1fr_1fr] items-center gap-[120px] mt-[45px]
            [@media(max-width:_1100px)]:gap-[65px] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:gap-[40px] [@media(max-width:_760px)]:mt-[20px]
          `}
          >
            <div
              className={`
                frequency-art relative text-center [&>svg]:w-full [&>svg]:max-w-[420px] [&>svg]:m-auto [&>svg]:block
                [&_path]:[transition:d_0.5s] [&>button]:inline-flex [&>button]:items-center [&>button]:gap-[16px]
                [&>button]:font-[family-name:monospace] [&>button]:text-[7px] [&>button]:text-[#bfa58e]
                [&>button]:tracking-[0.09em] [&>button]:[border-bottom:1px_solid_#d6976c55] [&>button]:py-[5px] [&>button]:px-0
                [&>button]:bg-[transparent] [&>button]:mt-[3px] [&>span]:block [&>span]:font-[family-name:monospace]
                [&>span]:text-[5px] [&>span]:tracking-[0.1em] [&>span]:mt-[15px] [&>span]:text-[#7b92a6]
                [@media(max-width:_760px)]:max-w-[330px] [@media(max-width:_760px)]:m-auto [@media(max-width:_760px)]:w-full
                [@media(max-width:_760px)]:[&>button]:text-[6px] [@media(max-width:_760px)]:[&>span]:text-[5px]
              ${waveExpanded ? "frequency-expanded" : ""}`}
            >
              <svg viewBox="0 0 380 300" fill="none" aria-hidden="true">
                {[35, 55, 75, 95, 115, 135].map((r, i) => (
                  <ellipse
                    key={r}
                    cx="190"
                    cy="150"
                    rx={r}
                    ry={r * 0.8}
                    stroke={i % 2 ? "#fe7a4244" : "#8fbdcc22"}
                    transform={`rotate(${i * 15} 190 150)`}
                  />
                ))}
                <path
                  d={
                    waveExpanded
                      ? "M30 150Q70 30 110 150T190 150T270 150T350 150"
                      : "M30 150Q70 100 110 150T190 150T270 150T350 150"
                  }
                  stroke="#ef905e"
                  strokeWidth="1.5"
                />
                <path
                  d="M190 5v290M10 150h360"
                  stroke="#ffffff0b"
                  strokeDasharray="3 5"
                />
                <circle cx="190" cy="150" r="4" fill="#f0b28c" />
              </svg>
              <button
                onClick={() => setWaveExpanded(!waveExpanded)}
                aria-pressed={waveExpanded}
              >
                {waveExpanded ? "SOFTEN THE WAVE" : "FEEL THE DEPTH"}
                <Plus size={12} />
              </button>
              <span>VISUAL WAVEFORM STUDY / NO AUDIO PLAYBACK</span>
            </div>
            <div
              className={`
              sound-principles [&>article]:flex [&>article]:gap-[22px] [&>article]:[border-top:1px_solid_var(--line)]
              [&>article]:py-[27px] [&>article]:px-0 [&>article]:items-start [&>article>span]:font-[family-name:monospace]
              [&>article>span]:text-[8px] [&>article>span]:text-[#c38b63] [&>article>span]:mt-[5px] [&_h3]:text-[28px]
              [&_h3]:tracking-[-0.045em] [&_p]:text-[11px] [&_p]:text-[#8593a3] [&_p]:mt-[8px] [&_p]:max-w-[300px]
              [&>article>svg]:ml-auto [&>article>svg]:text-[#6c7b8c] [&>article>svg]:mt-[7px]
              [@media(max-width:_760px)]:[&>article]:py-[22px] [@media(max-width:_760px)]:[&>article]:px-0
              [@media(max-width:_760px)]:[&>article]:gap-[18px] [@media(max-width:_760px)]:[&_h3]:text-[26px]
              [@media(max-width:_760px)]:[&_p]:text-[11px] [@media(max-width:_760px)]:[&>article>span]:text-[7px]
            `}
            >
              {[
                {
                  n: "01",
                  title: "Pure precision.",
                  text: "Find the quiet details hiding in your favorite sound.",
                },
                {
                  n: "02",
                  title: "Feel the depth.",
                  text: "Space, texture and the warmth of being there.",
                },
                {
                  n: "03",
                  title: "Built to disappear.",
                  text: "A considered fit. A quieter world. Just you and the music.",
                },
              ].map((p) => (
                <article key={p.n}>
                  <span>{p.n}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                  <ArrowUpRight size={16} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="anatomy"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto soniq-anatomy pt-[50px] pb-[95px]
          [@media(max-width:_760px)]:pt-[25px] [@media(max-width:_760px)]:pb-[70px]
        `}
        >
          <div
            className={`
            section-head flex items-end justify-between gap-[35px] mb-[50px] [&_h2]:text-[length:clamp(40px,_4.6vw,_70px)]
            [&_h2]:leading-[1.03] [&_h2]:font-medium [&_h2]:tracking-[-0.05em] [&>p]:max-w-[340px] [&>p]:text-[12px]
            [&>p]:text-[#8796a6] [&_.eyebrow]:mb-[18px] [&_.eyebrow]:font-[family-name:monospace] [&_.eyebrow]:text-[8px]
            [@media(max-width:_1000px)]:gap-[25px] [@media(max-width:_1000px)]:[&>p]:max-w-[270px]
            [@media(max-width:_760px)]:block [@media(max-width:_760px)]:mb-[35px]
            [@media(max-width:_760px)]:[&>p]:mt-[22px] [@media(max-width:_760px)]:[&>p]:max-w-[400px]
            [@media(max-width:_760px)]:[&>p]:text-[11px] [&_h2>span]:text-[#707e8d]
            [@media(max-width:_760px)]:[&_h2]:text-[length:9.3vw] [@media(max-width:_760px)]:[&_.eyebrow]:text-[7px]
          `}
          >
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                02 / EVERY ELEMENT, CONSIDERED
              </p>
              <h2>
                FEEL THE DIFFERENCE.
                <br />
                <span>IN EVERY DETAIL.</span>
              </h2>
            </div>
            <p>
              A study in sound.
              <br />
              An exercise in restraint.
            </p>
          </div>
          <div
            className={`
            anatomy-layout grid [grid-template-columns:1.2fr_1fr] gap-[80px] items-center
            [@media(max-width:_1100px)]:gap-[45px] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:gap-[35px]
          `}
          >
            <div
              className={`
              anatomy-stage relative aspect-[1] isolate bg-[image:radial-gradient(ellipse,_#17243433,_transparent_70%)]
              [&>img]:object-contain [&>img]:[mix-blend-mode:lighten]
              [&>img]:[mask-image:linear-gradient(_0deg,_transparent,_#000_10%,_#000_90%,_transparent_)] [&>svg]:absolute
              [&>svg]:inset-0 [&>svg]:w-full [&>svg]:h-full [@media(max-width:_760px)]:max-w-[440px]
              [@media(max-width:_760px)]:m-auto [@media(max-width:_760px)]:w-full
            `}
            >
              <Image
                src="/assets/soniq/h1.webp"
                alt="H1 headphone anatomy showing padded headband, copper hinges and large memory-foam cushions"
                fill
                sizes="(max-width:760px) 100vw, 55vw"
              />
              <svg viewBox="0 0 600 600" fill="none" aria-hidden="true">
                <path
                  d="M358 400 480 350h80M220 420 100 440H45M305 100 400 60h160M450 450 500 510h60"
                  stroke="#e1cdb444"
                />
                {[
                  { x: 358, y: 400, n: "01" },
                  { x: 220, y: 420, n: "02" },
                  { x: 305, y: 100, n: "03" },
                  { x: 450, y: 450, n: "04" },
                ].map((p) => (
                  <g key={p.n}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="15"
                      stroke="#e8a07188"
                      fill="#0a101acc"
                    />
                    <text
                      x={p.x}
                      y={p.y + 3}
                      textAnchor="middle"
                      fill="#e6b494"
                      fontSize="9"
                      fontFamily="monospace"
                    >
                      {p.n}
                    </text>
                  </g>
                ))}
              </svg>
              <span
                className={`
                anatomy-stage-label absolute bottom-0 left-0 font-[family-name:monospace] text-[6px] tracking-[0.12em]
                text-[#6d7f90] [@media(max-width:_760px)]:text-[6px] [@media(max-width:_760px)]:bottom-[-5px]
              `}
              >
                H1 / ENGINEERING STUDY 001
              </span>
            </div>
            <div
              className={`
              anatomy-notes [&>article]:flex [&>article]:gap-[23px] [&>article]:[border-top:1px_solid_var(--line)]
              [&>article]:py-[24px] [&>article]:px-0 [&>article>span]:font-[family-name:monospace]
              [&>article>span]:text-[#c58b63] [&>article>span]:text-[8px] [&>article>span]:mt-[3px]
              [&_.micro]:font-[family-name:monospace] [&_.micro]:text-[6px] [&_.micro]:text-[#78889a]
              [&_.micro]:tracking-[0.09em] [&_h3]:text-[24px] [&_h3]:tracking-[-0.04em] [&_h3]:my-[10px] [&_h3]:mx-0
              [&>article>div>p:last-child]:text-[11px] [&>article>div>p:last-child]:text-[#8594a6]
              [&>article>div>p:last-child]:max-w-[330px] [@media(max-width:_760px)]:[&>article]:py-[23px]
              [@media(max-width:_760px)]:[&>article]:px-0 [@media(max-width:_760px)]:[&>article]:gap-[18px]
              [@media(max-width:_760px)]:[&_h3]:text-[24px]
              [@media(max-width:_760px)]:[&>article>div>p:last-child]:text-[11px]
              [@media(max-width:_760px)]:[&_.micro]:text-[6px]
            `}
            >
              {anatomy.map((a) => (
                <article key={a.n}>
                  <span>{a.n}</span>
                  <div>
                    <p
                      className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
                    >
                      {a.label}
                    </p>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="sound"
          className={`
          soniq-sound-section bg-[image:linear-gradient(150deg,_#101821,_#0a1018)] [border-top:1px_solid_var(--line)]
          [border-bottom:1px_solid_var(--line)]
        `}
        >
          <div
            className={`
            section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto eq-layout grid [grid-template-columns:1fr_1.2fr]
            gap-[100px] items-center pt-[100px] pb-[100px] [@media(max-width:_1100px)]:gap-[55px]
            [@media(max-width:_1100px)]:[grid-template-columns:1fr_1.1fr] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:gap-[35px] [@media(max-width:_760px)]:pt-[65px] [@media(max-width:_760px)]:pb-[65px]
          `}
          >
            <div
              className={`
              eq-copy [&>.eyebrow]:font-[family-name:monospace] [&>.eyebrow]:text-[8px]
              [&>h2]:text-[length:clamp(48px,_5.5vw,_80px)] [&>h2]:leading-[1] [&>h2]:tracking-[-0.06em]
              [&_h2>span]:text-[#758190] [&>p:not(.eyebrow)]:text-[12px] [&>p:not(.eyebrow)]:text-[#8fa0b3]
              [&>p:not(.eyebrow)]:leading-[2] [&>p:not(.eyebrow)]:my-[28px] [&>p:not(.eyebrow)]:mx-0
              [@media(max-width:_760px)]:[&>h2]:text-[length:14vw] [@media(max-width:_760px)]:[&>h2]:leading-[0.98]
              [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:text-[12px]
              [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:my-[23px] [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mx-0
              [@media(max-width:_760px)]:[&>.eyebrow]:text-[7px]
            `}
            >
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                03 / FIND YOUR FREQUENCY
              </p>
              <h2>
                YOUR SOUND.
                <br />
                <span>YOUR WAY.</span>
              </h2>
              <p>
                Some days call for a little more depth.
                <br />
                Others, a little more space.
                <br />
                Explore four perspectives on the same feeling.
              </p>
              <span
                className={`visual-eq-note flex items-center gap-[9px] text-[9px] text-[#b18c6f] [@media(max-width:_760px)]:text-[8px]`}
              >
                <Volume2 size={13} />
                Visual EQ preview · No audio playback
              </span>
            </div>
            <div
              className={`
              eq-panel p-[28px] bg-[image:linear-gradient(130deg,_#17222d,_#0d1621)] [border:1px_solid_#91aecb2a]
              rounded-[9px] [box-shadow:0_20px_70px_#0003] [@media(max-width:_1100px)]:p-[23px]
              [@media(max-width:_760px)]:py-[22px] [@media(max-width:_760px)]:px-[17px]
            `}
            >
              <div
                className={`
                eq-panel-top flex items-center justify-between gap-[20px] text-[#acb8c5] [&>span:first-child]:flex
                [&>span:first-child]:items-center [&>span:first-child]:gap-[9px]
                [&>span:first-child]:font-[family-name:monospace] [&>span:first-child]:text-[8px]
                [&>span:first-child]:tracking-[0.1em] [&>span:first-child>svg]:text-[#cd9b79]
                [&>span:last-child]:font-[family-name:monospace] [&>span:last-child]:text-[5px]
                [&>span:last-child]:tracking-[0.1em] [&>span:last-child]:text-[#657c91]
                [&>span:last-child]:[border:1px_solid_#7e9bb033] [&>span:last-child]:py-[4px] [&>span:last-child]:px-[7px]
                [&>span:last-child]:rounded-[3px] [@media(max-width:_1100px)]:[&>span:first-child]:text-[7px]
                [@media(max-width:_1100px)]:[&>span:last-child]:text-[4px]
                [@media(max-width:_1100px)]:[&>span:last-child]:p-[4px]
                [@media(max-width:_760px)]:[&>span:first-child]:text-[6px]
                [@media(max-width:_760px)]:[&>span:first-child]:gap-[7px]
                [@media(max-width:_760px)]:[&>span:last-child]:text-[4px]
              `}
              >
                <span>
                  <Headphones size={15} />
                  H1 SOUND STUDIO
                </span>
                <span>VISUAL PREVIEW</span>
              </div>
              <div
                className={`
                  eq-visual h-[190px] flex items-center justify-between gap-[13px] relative mt-[25px] py-0 px-[10px]
                  [@media(max-width:_1100px)]:gap-[9px] [@media(max-width:_1100px)]:h-[180px] [@media(max-width:_1100px)]:py-0
                  [@media(max-width:_1100px)]:px-[5px] [@media(max-width:_760px)]:h-[170px] [@media(max-width:_760px)]:gap-[9px]
                  [@media(max-width:_760px)]:py-0 [@media(max-width:_760px)]:px-[4px]
                `}
                role="img"
                aria-label={`${profile.name} equalizer profile: ${profile.values.join(", ")} percent relative band level`}
              >
                <div
                  className={`
                  eq-grid-lines absolute inset-0 flex flex-col [justify-content:space-around] pointer-events-none [&>i]:w-full
                  [&>i]:h-[1px] [&>i]:bg-[#829bb419]
                `}
                >
                  <i />
                  <i />
                  <i />
                </div>
                {profile.values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={{ height: `${v}%` }}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { duration: 0.5, delay: i * 0.015 }
                    }
                    className={`
                      eq-band relative w-full max-w-[17px] min-h-[3px] bg-[image:linear-gradient(0deg,_#b26a3b88,_#e8b083)]
                      [border:1px_solid_#d9976855] rounded-[2px] [box-shadow:0_0_15px_#dc9d6d0c]
                      [&:nth-of-type(2n)]:bg-[image:linear-gradient(0deg,_#577e9688,_#a9c3cf)]
                      [&:nth-of-type(2n)]:[border-color:#8cbbc644] [&>span]:absolute [&>span]:w-[7px] [&>span]:h-[7px]
                      [&>span]:left-[50%] [&>span]:top-[50%] [&>span]:[transform:translate(-50%,_-50%)] [&>span]:rounded-full
                      [&>span]:bg-[#ffdfc555] [&>span]:[box-shadow:0_0_10px_#ffdfc544] [@media(max-width:_760px)]:max-w-[13px]
                    `}
                  >
                    <span />
                  </motion.div>
                ))}
              </div>
              <div
                className={`
                eq-frequencies flex justify-between py-0 px-[2px] mt-[18px] mx-0 mb-[23px]
                [&>span]:font-[family-name:monospace] [&>span]:text-[6px] [&>span]:text-[#7d93a7] [&>span]:text-center
                [&_small]:block [&_small]:text-[6px] [&_small]:text-[#556f88] [&_small]:mt-[5px]
                [@media(max-width:_760px)]:[&>span]:text-[5px] [@media(max-width:_760px)]:[&_small]:text-[5px]
              `}
              >
                {["32 Hz", "125 Hz", "500 Hz", "2 kHz", "8 kHz", "16 kHz"].map(
                  (f, i) => (
                    <span key={f}>
                      {f}
                      <small>{profile.bands[i]} dB</small>
                    </span>
                  ),
                )}
              </div>
              <div
                className={`
                eq-presets grid [grid-template-columns:repeat(4,_1fr)] gap-[5px] p-[4px] bg-[#050c1588]
                [border:1px_solid_#8ba7c218] rounded-[5px] [&>button]:text-[9px] [&>button]:bg-[transparent]
                [&>button]:py-[10px] [&>button]:px-[5px] [&>button]:rounded-[3px] [&>button]:text-[#738ca3]
                [&>button]:[transition:background_0.2s,_color_0.2s] [&>button[aria-pressed="true"]]:bg-[#bb80592b]
                [&>button[aria-pressed="true"]]:text-[#e2b796]
                [&>button[aria-pressed="true"]]:[box-shadow:inset_0_0_0_1px_#ddaa7e33]
                [@media(max-width:_760px)]:[&>button]:text-[8px] [@media(max-width:_760px)]:[&>button]:py-[9px]
                [@media(max-width:_760px)]:[&>button]:px-[3px]
              `}
                aria-label="EQ preset"
              >
                {eqPresets.map((p, i) => (
                  <button
                    key={p.name}
                    aria-pressed={preset === i}
                    onClick={() => setPreset(i)}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              <div
                className={`
                eq-description [border-top:1px_solid_#91aecb1c] mt-[23px] pt-[20px] min-h-[95px]
                [&>.micro]:font-[family-name:monospace] [&>.micro]:text-[7px] [&>.micro]:text-[#c89973]
                [&>.micro]:tracking-[0.08em] [&>p:last-child]:text-[11px] [&>p:last-child]:text-[#8297ac]
                [&>p:last-child]:mt-[9px] [&>p:last-child]:leading-[1.8] [@media(max-width:_760px)]:[&>.micro]:text-[6px]
                [@media(max-width:_760px)]:[&>p:last-child]:text-[10px] [@media(max-width:_760px)]:min-h-[100px]
              `}
                aria-live="polite"
              >
                <p
                  className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
                >
                  {profile.tag}
                </p>
                <p>{profile.description}</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="materials"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto [@media(max-width:_1000px)]:pb-[85px]
          [@media(max-width:_760px)]:pb-[70px] soniq-materials pt-[110px] [@media(max-width:_760px)]:pt-[70px]
        `}
        >
          <div
            className={`
            section-head flex items-end justify-between gap-[35px] mb-[50px] [&_h2]:text-[length:clamp(40px,_4.6vw,_70px)]
            [&_h2]:leading-[1.03] [&_h2]:font-medium [&_h2]:tracking-[-0.05em] [&>p]:max-w-[340px] [&>p]:text-[12px]
            [&>p]:text-[#8796a6] [&_.eyebrow]:mb-[18px] [&_.eyebrow]:font-[family-name:monospace] [&_.eyebrow]:text-[8px]
            [@media(max-width:_1000px)]:gap-[25px] [@media(max-width:_1000px)]:[&>p]:max-w-[270px]
            [@media(max-width:_760px)]:block [@media(max-width:_760px)]:mb-[35px]
            [@media(max-width:_760px)]:[&>p]:mt-[22px] [@media(max-width:_760px)]:[&>p]:max-w-[400px]
            [@media(max-width:_760px)]:[&>p]:text-[11px] [&_h2>span]:text-[#707e8d]
            [@media(max-width:_760px)]:[&_h2]:text-[length:9.3vw] [@media(max-width:_760px)]:[&_.eyebrow]:text-[7px]
          `}
          >
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                04 / A MATERIAL POINT OF VIEW
              </p>
              <h2>
                A FEELING.
                <br />
                <span>A FINISH.</span>
              </h2>
            </div>
            <p>
              Three original surface studies.
              <br />A different kind of expression.
            </p>
          </div>
          <div
            className={`
            material-layout grid [grid-template-columns:1.2fr_1fr] gap-[100px] items-center
            [@media(max-width:_1100px)]:gap-[45px] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:gap-[40px]
          `}
          >
            <div
              className={`
              material-product relative aspect-[1] [&>img]:object-contain [&>img]:[mix-blend-mode:lighten]
              [&>img]:[mask-image:linear-gradient(_0deg,_transparent,_#000_10%,_#000_90%,_transparent_)] [&>span]:absolute
              [&>span]:bottom-[-5px] [&>span]:left-0 [&>span]:font-[family-name:monospace] [&>span]:text-[6px]
              [&>span]:text-[#677e91] [&>span]:tracking-[0.1em] [@media(max-width:_760px)]:w-full
              [@media(max-width:_760px)]:max-w-[440px] [@media(max-width:_760px)]:m-auto
              [@media(max-width:_760px)]:[&>span]:text-[5px] [@media(max-width:_760px)]:[&>span]:bottom-[-8px]
            `}
            >
              <Image
                src="/assets/soniq/h1.webp"
                alt="Original H1 graphite and copper headphone concept photograph"
                fill
                sizes="(max-width:760px) 100vw, 50vw"
              />
              <span>H1 / ORIGINAL COPPER CONCEPT RENDER</span>
            </div>
            <div
              className={`
              material-selection max-w-[400px] [@media(max-width:_760px)]:max-w-[400px] [@media(max-width:_760px)]:w-full
              [@media(max-width:_760px)]:m-auto
            `}
            >
              <div
                className={`
                  material-sample relative w-full h-[160px] overflow-hidden [border:1px_solid_#e2aa7c55] rounded-[8px]
                  bg-[image:linear-gradient(_125deg,_#b17f61,_#785342_35%,_#b6876e_70%,_#835540_)]
                  [box-shadow:inset_0_1px_1px_#ffffff44,_0_20px_50px_#0004] text-[#f1d1bc]
                  [transition:background_0.4s,_color_0.4s,_border-color_0.4s] [&::after]:content-[''] [&::after]:absolute
                  [&::after]:inset-0 [&::after]:opacity-[0.15]
                  [&::after]:[background:repeating-linear-gradient(_0deg,_transparent_0_1px,_#ffffff22_1px_2px_)]
                  [&:where(.sample-obsidian)]:bg-[image:linear-gradient(_130deg,_#424751,_#20262e_40%,_#373d46_70%,_#1c222b_)]
                  [&:where(.sample-obsidian)]:text-[#a4b1bf] [&:where(.sample-obsidian)]:[border-color:#96a7bd44]
                  [&:where(.sample-frost)]:bg-[image:linear-gradient(_130deg,_#ccd3db,_#a2b1bf_45%,_#e0e7eb_70%,_#adbac6_)]
                  [&:where(.sample-frost)]:text-[#445f74] [&:where(.sample-frost)]:[border-color:#e4f0fa88]
                  [&>.brand-mark]:absolute [&>.brand-mark]:left-[25px] [&>.brand-mark]:top-[25px] [&>.brand-mark]:w-[25px]
                  [&>.brand-mark]:h-[25px] [&>.brand-mark]:opacity-[0.75] [&>.micro]:absolute [&>.micro]:bottom-[25px]
                  [&>.micro]:left-[25px] [&>.micro]:text-[8px] [&>.micro]:tracking-[0.12em] [@media(max-width:_1100px)]:h-[150px]
                  [@media(max-width:_760px)]:h-[150px] sample-${materials[material].className}`}
                role="img"
                aria-label={`${materials[material].name} material finish study`}
              >
                <span
                  className={`
                  material-reflection absolute left-[50%] top-[-10%] w-[25%] h-[150%] [transform:skew(-30deg)]
                  bg-[image:linear-gradient(90deg,_transparent,_#ffffff14,_transparent)]
                `}
                />
                <BrandMark brand="soniq" />
                <span
                  className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
                >
                  {materials[material].name} / 0{material + 1}
                </span>
                <span
                  className={`
                  sample-code absolute right-[22px] bottom-[25px] font-[family-name:monospace] text-[5px] tracking-[0.08em]
                  opacity-[0.7] [@media(max-width:_760px)]:text-[4px]
                `}
                >
                  MATERIAL / FINISH STUDY
                </span>
              </div>
              <div
                className={`
                material-swatches flex gap-[30px] mt-[30px] [&>button]:flex [&>button]:items-center [&>button]:gap-[9px]
                [&>button]:text-[9px] [&>button]:py-[5px] [&>button]:px-0 [&>button]:bg-[transparent] [&>button]:text-[#75899c]
                [&_i]:w-[20px] [&_i]:h-[20px] [&_i]:rounded-full [&_i]:[border:3px_solid_#06080b]
                [&_i]:[outline:1px_solid_#ffffff26] [&>button[aria-pressed="true"]]:text-[#dbd4cd]
                [&>button[aria-pressed="true"]>i]:[outline-color:#dca578] [@media(max-width:_1100px)]:gap-[23px]
                [@media(max-width:_1100px)]:[&>button]:text-[8px] [@media(max-width:_760px)]:gap-[30px]
                [@media(max-width:_760px)]:justify-center [@media(max-width:_760px)]:[&>button]:text-[9px]
              `}
                aria-label="Material finish"
              >
                {materials.map((m, i) => (
                  <button
                    key={m.name}
                    aria-pressed={material === i}
                    onClick={() => setMaterial(i)}
                  >
                    <i style={{ background: m.color }} />
                    {m.name}
                  </button>
                ))}
              </div>
              <div
                className={`
                material-copy mt-[24px] min-h-[105px] [&_h3]:text-[26px] [&_p]:text-[11px] [&_p]:text-[#92a0b0] [&_p]:mt-[8px]
                [&_p]:max-w-[350px] [&>span]:font-[family-name:monospace] [&>span]:block [&>span]:text-[6px]
                [&>span]:text-[#a88b72] [&>span]:tracking-[0.07em] [&>span]:uppercase [&>span]:mt-[12px]
                [@media(max-width:_760px)]:mt-[25px] [@media(max-width:_760px)]:min-h-[105px]
                [@media(max-width:_760px)]:[&>h3]:text-[26px] [@media(max-width:_760px)]:[&_p]:text-[11px]
              `}
                aria-live="polite"
              >
                <h3>{materials[material].name}</h3>
                <p>{materials[material].description}</p>
                <span>{materials[material].detail}</span>
              </div>
              <p
                className={`
                material-disclosure text-[8px] [border-top:1px_solid_var(--line)] pt-[18px] mt-[17px] leading-[1.9]
                text-[#7b92a6] [@media(max-width:_760px)]:text-[8px]
              `}
              >
                Material swatches are original finish studies. The product
                photograph remains the original copper concept; these are not
                photographic color variants.
              </p>
            </div>
          </div>
        </section>
        <section
          id="craft"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto soniq-craft pt-[50px] pb-[30px]
          [@media(max-width:_760px)]:pt-[20px] [@media(max-width:_760px)]:pb-0
        `}
        >
          <article
            className={`
            craft-feature grid [grid-template-columns:1.5fr_1fr] gap-[8%] items-center mb-[100px]
            [&>.craft-image+div>.eyebrow]:font-[family-name:monospace] [&>.craft-image+div>.eyebrow]:text-[7px]
            [&_h2]:text-[length:clamp(34px,_3.3vw,_50px)] [&_h2]:leading-[1.08] [&_h2]:tracking-[-0.04em]
            [&_h2>span]:text-[#738494] [&>.craft-image+div>p:not(.eyebrow)]:text-[12px]
            [&>.craft-image+div>p:not(.eyebrow)]:text-[#8496a8] [&>.craft-image+div>p:not(.eyebrow)]:leading-[1.9]
            [&>.craft-image+div>p:not(.eyebrow)]:mt-[25px] [&>.craft-image+div>p:not(.eyebrow)]:max-w-[340px]
            [@media(max-width:_1100px)]:gap-[6%] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:gap-[28px] [@media(max-width:_760px)]:mb-[60px]
            [@media(max-width:_760px)]:[&>.craft-image+div>.eyebrow]:text-[7px]
            [@media(max-width:_760px)]:[&_h2]:text-[length:10.3vw]
            [@media(max-width:_760px)]:[&>.craft-image+div>p:not(.eyebrow)]:text-[12px]
            [@media(max-width:_760px)]:[&>.craft-image+div>p:not(.eyebrow)]:mt-[22px] craft-metal
            [&_.craft-image>img]:[filter:brightness(0.8)] [&_.craft-image>img]:w-full [&_.craft-image>img]:h-full
            [&_.craft-image>img]:left-0! [&_.craft-image>img]:top-0! [&_.craft-image>img]:object-cover
            [&_.craft-image>img]:[object-position:30%_60%] [&_.craft-image>img]:[transform:scale(1.7)]
            [&_.craft-image>img]:[transform-origin:30%_55%] reveal-block
          `}
          >
            <div
              className={`
              craft-image relative aspect-[1.2] overflow-hidden bg-[#101722] [&>img]:object-cover [&>img]:max-w-none
              [@media(max-width:_760px)]:aspect-[1.1]
            `}
            >
              <Image
                src="/assets/soniq/h1.webp"
                alt="Close-up of the brushed graphite earcup and copper hinge"
                fill
                sizes="(max-width:760px) 100vw, 60vw"
                className="craft-detail-photo"
              />
            </div>
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                01 / THE MATERIAL
              </p>
              <h2>
                NOTHING EXTRA.
                <br />
                <span>EVERYTHING RIGHT.</span>
              </h2>
              <p>
                A soft sheen of aluminum. The quiet warmth of copper. Materials
                imagined for the way they age, the way they feel, the way they
                become yours.
              </p>
            </div>
          </article>
          <article
            className={`
            craft-feature grid gap-[8%] items-center mb-[100px] [&>.craft-image+div>.eyebrow]:font-[family-name:monospace]
            [&>.craft-image+div>.eyebrow]:text-[7px] [&_h2]:text-[length:clamp(34px,_3.3vw,_50px)] [&_h2]:leading-[1.08]
            [&_h2]:tracking-[-0.04em] [&_h2>span]:text-[#738494] [&>.craft-image+div>p:not(.eyebrow)]:text-[12px]
            [&>.craft-image+div>p:not(.eyebrow)]:text-[#8496a8] [&>.craft-image+div>p:not(.eyebrow)]:leading-[1.9]
            [&>.craft-image+div>p:not(.eyebrow)]:mt-[25px] [&>.craft-image+div>p:not(.eyebrow)]:max-w-[340px]
            [@media(max-width:_1100px)]:gap-[6%] [@media(max-width:_760px)]:[&>.craft-image+div>.eyebrow]:text-[7px]
            [@media(max-width:_760px)]:[&_h2]:text-[length:10.3vw]
            [@media(max-width:_760px)]:[&>.craft-image+div>p:not(.eyebrow)]:text-[12px]
            [@media(max-width:_760px)]:[&>.craft-image+div>p:not(.eyebrow)]:mt-[22px] craft-comfort
            [&_.craft-image>img]:[filter:brightness(0.8)] [&_.craft-image>img]:w-full [&_.craft-image>img]:h-full
            [&_.craft-image>img]:left-0! [&_.craft-image>img]:top-0! [&_.craft-image>img]:object-cover
            [&_.craft-image>img]:[object-position:80%_75%] [&_.craft-image>img]:[transform:scale(2)]
            [&_.craft-image>img]:[transform-origin:85%_75%] [grid-template-columns:1fr_1.5fr] [&_.craft-image]:order-[2]
            [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[28px]
            [@media(max-width:_760px)]:mb-[60px] [@media(max-width:_760px)]:[&_.craft-image]:order-0 reveal-block
          `}
          >
            <div
              className={`
              craft-image relative aspect-[1.2] overflow-hidden bg-[#101722] [&>img]:object-cover [&>img]:max-w-none
              [@media(max-width:_760px)]:aspect-[1.1]
            `}
            >
              <Image
                src="/assets/soniq/h1.webp"
                alt="Detail of the supple black leather and deep memory-foam ear cushion"
                fill
                sizes="(max-width:760px) 100vw, 60vw"
                className="craft-detail-photo"
              />
            </div>
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                02 / THE FEELING
              </p>
              <h2>
                STAY A LITTLE
                <br />
                <span>LONGER.</span>
              </h2>
              <p>
                A favorite album deserves your full attention. Deep cushions,
                considered weight and a gently padded headband — imagined to
                leave only the music.
              </p>
            </div>
          </article>
        </section>
        <section
          className={`
          craft-statement relative pt-[20px] px-[var(--gutter)] pb-[90px] text-center max-w-[1440px] m-auto
          overflow-hidden [&>.eyebrow]:justify-center [&>.eyebrow]:font-[family-name:monospace] [&>.eyebrow]:text-[7px]
          [&>h2]:text-[length:clamp(28px,_4.1vw,_60px)] [&>h2]:tracking-[-0.035em] [&>h2]:leading-[1.3]
          [&>h2]:text-[#b7c0ca] [&>.micro]:font-[family-name:monospace] [&>.micro]:block [&>.micro]:text-[6px]
          [&>.micro]:tracking-[0.1em] [&>.micro]:text-[#6b8398] [&>.micro]:mt-[28px] [@media(max-width:_760px)]:pt-[20px]
          [@media(max-width:_760px)]:pb-[65px] [@media(max-width:_760px)]:[&>h2]:text-[length:7.5vw]
          [@media(max-width:_760px)]:[&>h2]:leading-[1.35] [@media(max-width:_760px)]:[&>.micro]:text-[5px]
          [@media(max-width:_760px)]:[&>.micro]:leading-[1.8] [@media(max-width:_760px)]:[&>.micro]:mt-[20px]
        `}
        >
          <p
            className={`
            eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
            text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
            [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
            [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
          `}
          >
            03 / THE INTENTION
          </p>
          <h2>
            “Good sound brings you closer.
            <br />
            Good design gets out of the way.”
          </h2>
          <span
            className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
          >
            THE SONIQ DESIGN PHILOSOPHY / NO INVENTED REVIEWS.
          </span>
          <Waveform large />
        </section>
        <section
          id="specs"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto soniq-specs grid [grid-template-columns:1fr_1.15fr]
          gap-[100px] [border-top:1px_solid_var(--line)] pt-[95px] pb-[95px] [&_.eyebrow]:font-[family-name:monospace]
          [&_.eyebrow]:text-[8px] [&_h2]:text-[length:clamp(40px,_4.2vw,_65px)] [&_h2]:leading-[1.05]
          [&_h2]:tracking-[-0.05em] [&_h2>span]:text-[#778898] [&>div>p:not(.eyebrow)]:text-[10px]
          [&>div>p:not(.eyebrow)]:text-[#657e94] [&>div>p:not(.eyebrow)]:leading-[1.9] [&>div>p:not(.eyebrow)]:mt-[27px]
          [&_dl]:m-0 [&_dl>div]:flex [&_dl>div]:justify-between [&_dl>div]:gap-[20px]
          [&_dl>div]:[border-bottom:1px_solid_var(--line)] [&_dl>div]:py-[19px] [&_dl>div]:px-0
          [&_dl>div:first-child]:[border-top:1px_solid_var(--line)] [&_dt]:text-[10px] [&_dt]:text-[#8197aa]
          [&_dd]:text-[10px] [&_dd]:text-[#b3c2d0] [&_dd]:text-right [&_dd]:m-0 [@media(max-width:_1100px)]:gap-[55px]
          [@media(max-width:_1100px)]:[&_dd]:text-[9px] [@media(max-width:_1100px)]:[&_dt]:text-[9px]
          [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[35px]
          [@media(max-width:_760px)]:pt-[65px] [@media(max-width:_760px)]:pb-[65px]
          [@media(max-width:_760px)]:[&_h2]:text-[length:11.5vw]
          [@media(max-width:_760px)]:[&>div>p:not(.eyebrow)]:text-[10px]
          [@media(max-width:_760px)]:[&>div>p:not(.eyebrow)]:mt-[22px] [@media(max-width:_760px)]:[&_dt]:text-[9px]
          [@media(max-width:_760px)]:[&_dd]:text-[9px] [@media(max-width:_760px)]:[&_dd]:max-w-[175px]
          [@media(max-width:_760px)]:[&_dd]:leading-[1.6] [@media(max-width:_760px)]:[&_dl>div]:py-[17px]
          [@media(max-width:_760px)]:[&_dl>div]:px-0
        `}
        >
          <div>
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              THE ESSENTIALS
            </p>
            <h2>
              THE DETAILS.
              <br />
              <span>PURE & SIMPLE.</span>
            </h2>
            <p>
              Concept specifications.
              <br />
              Illustrative targets, not lab-tested claims.
            </p>
          </div>
          <dl>
            {audioSpecs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section
          id="launch"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto soniq-finale relative pt-[110px] pb-[90px] isolate
          overflow-hidden [border-top:1px_solid_var(--line)] [&>.eyebrow]:font-[family-name:monospace]
          [&>.eyebrow]:text-[8px] [&>.eyebrow]:tracking-[0.1em] [&>h2]:text-[length:clamp(64px,_8.4vw,_130px)]
          [&>h2]:leading-[0.97] [&>h2]:tracking-[-0.06em] [&>h2>span]:text-[#b87e59] [&_.signup-form]:max-w-[430px]
          [&_.signup-form]:w-full [&_.signup-form]:[grid-template-columns:1fr_auto] [&_.signup-form>input]:text-[10px]
          [&_.signup-form>input]:bg-[#0e1722cc] [&_.signup-form>input]:[border-color:#8dabc32b]
          [&_.signup-form_.button]:text-[8px] [&_.signup-form_.button]:gap-[15px] [&_.form-note]:text-[7px]
          [&_.form-note]:text-[#6e8499] [&_.form-success]:max-w-[450px] [&_.form-success]:bg-[#0d151dcc]
          [@media(max-width:_760px)]:pt-[65px] [@media(max-width:_760px)]:pb-[70px]
          [@media(max-width:_760px)]:[&>.eyebrow]:text-[6px] [@media(max-width:_760px)]:[&>.eyebrow]:tracking-[0.07em]
          [@media(max-width:_760px)]:[&>h2]:text-[length:13vw] [@media(max-width:_760px)]:[&>h2]:leading-[1.03]
          [@media(max-width:_760px)]:[&_.signup-form]:grid-cols-[1fr]
          [@media(max-width:_760px)]:[&_.signup-form]:mt-[25px] [@media(max-width:_760px)]:[&_.signup-form]:max-w-[350px]
          [@media(max-width:_760px)]:[&_.signup-form]:gap-[9px]
          [@media(max-width:_760px)]:[&_.signup-form>.input]:text-[11px]
          [@media(max-width:_760px)]:[&_.signup-form_.button]:text-[10px]
          [@media(max-width:_760px)]:[&_.signup-form_.button]:min-h-[47px]
          [@media(max-width:_760px)]:[&_.form-note]:text-[6px]
        `}
        >
          <div
            className={`
            finale-product absolute right-[-5%] top-[-60px] w-[65%] h-[115%] z-[-2] opacity-[0.38]
            [mask-image:linear-gradient(90deg,_transparent,_#000_35%),_linear-gradient(0deg,_transparent,_#000_15%,_#000_90%,_transparent)]
            [mask-composite:intersect] [&>img]:object-contain [&>img]:[mix-blend-mode:lighten]
            [&>img]:[filter:brightness(0.7)] [@media(max-width:_760px)]:w-[110%] [@media(max-width:_760px)]:h-full
            [@media(max-width:_760px)]:top-[-40px] [@media(max-width:_760px)]:right-[-30%]
            [@media(max-width:_760px)]:opacity-[0.25]
          `}
          >
            <Image
              src="/assets/soniq/h1.webp"
              alt="The softly illuminated H1 silhouette"
              fill
              sizes="60vw"
            />
          </div>
          <p
            className={`
            eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
            text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
            [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
            [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
          `}
          >
            <span className="dot" />
            THE NEXT CHAPTER IN LISTENING.
          </p>
          <h2>
            MAKE EVERY
            <br />
            NOTE <span>MATTER.</span>
          </h2>
          <div
            className={`
            soniq-finale-bottom flex items-start justify-between mt-[45px] gap-[40px] [&>p]:text-[#8c9aac]
            [&>p]:text-[12px] [@media(max-width:_760px)]:block [@media(max-width:_760px)]:mt-[30px]
            [@media(max-width:_760px)]:[&>p]:text-[11px]
          `}
          >
            <p>
              A little less noise.
              <br />A whole new perspective.
            </p>
            <SignupForm button="Get launch updates" />
          </div>
        </section>
      </main>
      <Footer
        brand="soniq"
        links={[
          { label: "The H1", href: "#product" },
          { label: "Sound studio", href: "#sound" },
          { label: "Specifications", href: "#specs" },
        ]}
      />
      <ContactModal
        open={modal}
        onClose={() => setModal(false)}
        title="Be part of the next frequency."
      />
    </>
  );
}
