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
      className={`audio-waveform ${large ? "waveform-large" : ""}`}
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
        <section id="product" className="soniq-hero">
          <span className="soniq-hero-outline" aria-hidden="true">
            H1
          </span>
          <div className="soniq-hero-product">
            <Image
              src="/assets/soniq/h1.webp"
              alt="SONIQ H1 concept headphones with graphite aluminum earcups, copper hinges and soft leather cushions"
              fill
              priority
              sizes="(max-width:760px) 100vw, 65vw"
              className="parallax-image"
            />
          </div>
          <div className="soniq-hero-copy">
            <p className="eyebrow">
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
            <div className="button-row">
              <a href="#sound" className="button primary">
                DISCOVER THE SOUND
                <Arrow />
              </a>
              <a href="#anatomy" className="hero-feature-link">
                VIEW FEATURES
                <Plus size={15} />
              </a>
            </div>
          </div>
          <span className="soniq-side-label micro">
            H1 STUDIO / COPPER CONCEPT / 2026
          </span>
          <div className="soniq-hero-bottom">
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
        <section id="story" className="section soniq-story">
          <div className="story-top">
            <p className="eyebrow">01 / A DIFFERENT KIND OF LISTENING</p>
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
          <div className="sound-story-bottom">
            <div
              className={`frequency-art ${waveExpanded ? "frequency-expanded" : ""}`}
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
            <div className="sound-principles">
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
        <section id="anatomy" className="section soniq-anatomy">
          <div className="section-head">
            <div>
              <p className="eyebrow">02 / EVERY ELEMENT, CONSIDERED</p>
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
          <div className="anatomy-layout">
            <div className="anatomy-stage">
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
              <span className="anatomy-stage-label">
                H1 / ENGINEERING STUDY 001
              </span>
            </div>
            <div className="anatomy-notes">
              {anatomy.map((a) => (
                <article key={a.n}>
                  <span>{a.n}</span>
                  <div>
                    <p className="micro">{a.label}</p>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="sound" className="soniq-sound-section">
          <div className="section eq-layout">
            <div className="eq-copy">
              <p className="eyebrow">03 / FIND YOUR FREQUENCY</p>
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
              <span className="visual-eq-note">
                <Volume2 size={13} />
                Visual EQ preview · No audio playback
              </span>
            </div>
            <div className="eq-panel">
              <div className="eq-panel-top">
                <span>
                  <Headphones size={15} />
                  H1 SOUND STUDIO
                </span>
                <span>VISUAL PREVIEW</span>
              </div>
              <div
                className="eq-visual"
                role="img"
                aria-label={`${profile.name} equalizer profile: ${profile.values.join(", ")} percent relative band level`}
              >
                <div className="eq-grid-lines">
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
                    className="eq-band"
                  >
                    <span />
                  </motion.div>
                ))}
              </div>
              <div className="eq-frequencies">
                {["32 Hz", "125 Hz", "500 Hz", "2 kHz", "8 kHz", "16 kHz"].map(
                  (f, i) => (
                    <span key={f}>
                      {f}
                      <small>{profile.bands[i]} dB</small>
                    </span>
                  ),
                )}
              </div>
              <div className="eq-presets" aria-label="EQ preset">
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
              <div className="eq-description" aria-live="polite">
                <p className="micro">{profile.tag}</p>
                <p>{profile.description}</p>
              </div>
            </div>
          </div>
        </section>
        <section id="materials" className="section soniq-materials">
          <div className="section-head">
            <div>
              <p className="eyebrow">04 / A MATERIAL POINT OF VIEW</p>
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
          <div className="material-layout">
            <div className="material-product">
              <Image
                src="/assets/soniq/h1.webp"
                alt="Original H1 graphite and copper headphone concept photograph"
                fill
                sizes="(max-width:760px) 100vw, 50vw"
              />
              <span>H1 / ORIGINAL COPPER CONCEPT RENDER</span>
            </div>
            <div className="material-selection">
              <div
                className={`material-sample sample-${materials[material].className}`}
                role="img"
                aria-label={`${materials[material].name} material finish study`}
              >
                <span className="material-reflection" />
                <BrandMark brand="soniq" />
                <span className="micro">
                  {materials[material].name} / 0{material + 1}
                </span>
                <span className="sample-code">MATERIAL / FINISH STUDY</span>
              </div>
              <div className="material-swatches" aria-label="Material finish">
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
              <div className="material-copy" aria-live="polite">
                <h3>{materials[material].name}</h3>
                <p>{materials[material].description}</p>
                <span>{materials[material].detail}</span>
              </div>
              <p className="material-disclosure">
                Material swatches are original finish studies. The product
                photograph remains the original copper concept; these are not
                photographic color variants.
              </p>
            </div>
          </div>
        </section>
        <section id="craft" className="section soniq-craft">
          <article className="craft-feature craft-metal reveal-block">
            <div className="craft-image">
              <Image
                src="/assets/soniq/h1.webp"
                alt="Close-up of the brushed graphite earcup and copper hinge"
                fill
                sizes="(max-width:760px) 100vw, 60vw"
                className="craft-detail-photo"
              />
            </div>
            <div>
              <p className="eyebrow">01 / THE MATERIAL</p>
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
          <article className="craft-feature craft-comfort reveal-block">
            <div className="craft-image">
              <Image
                src="/assets/soniq/h1.webp"
                alt="Detail of the supple black leather and deep memory-foam ear cushion"
                fill
                sizes="(max-width:760px) 100vw, 60vw"
                className="craft-detail-photo"
              />
            </div>
            <div>
              <p className="eyebrow">02 / THE FEELING</p>
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
        <section className="craft-statement">
          <p className="eyebrow">03 / THE INTENTION</p>
          <h2>
            “Good sound brings you closer.
            <br />
            Good design gets out of the way.”
          </h2>
          <span className="micro">
            THE SONIQ DESIGN PHILOSOPHY / NO INVENTED REVIEWS.
          </span>
          <Waveform large />
        </section>
        <section id="specs" className="section soniq-specs">
          <div>
            <p className="eyebrow">THE ESSENTIALS</p>
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
        <section id="launch" className="section soniq-finale">
          <div className="finale-product">
            <Image
              src="/assets/soniq/h1.webp"
              alt="The softly illuminated H1 silhouette"
              fill
              sizes="60vw"
            />
          </div>
          <p className="eyebrow">
            <span className="dot" />
            THE NEXT CHAPTER IN LISTENING.
          </p>
          <h2>
            MAKE EVERY
            <br />
            NOTE <span>MATTER.</span>
          </h2>
          <div className="soniq-finale-bottom">
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
