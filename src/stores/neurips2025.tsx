import { ReactElement } from "react";
import { CHIPeople, Tutorial } from "./Interfaces";

// NeurIPS 2025 Tutorial on Human-AI Alignment.
// Content mirrors https://hai-alignment-course.github.io/tutorial/

const NEURIPS_PAGE = "https://neurips.cc/virtual/2025/loc/san-diego/109592";

// Outline icons (Heroicons) used by the original page.
const heroicon = (...paths: string[]): ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    {paths.map((d) => (
      <path key={d} strokeLinecap="round" strokeLinejoin="round" d={d} />
    ))}
  </svg>
);

const speakers: CHIPeople[] = [
  {
    name: "Hua Shen",
    affliation: "NYU Shanghai, NYU",
    webpage: "https://hua-shen.org/",
    img: "hua_neurips2025.png",
    type: "Speaker",
    description: "",
  },
  {
    name: "Mitchell Gordon",
    affliation: "MIT, OpenAI",
    webpage: "https://mgordon.me/",
    img: "mitchell.png",
    type: "Speaker",
    description: "",
  },
  {
    name: "Adam Kalai",
    affliation: "OpenAI",
    webpage: "https://kal.ai/",
    img: "adam.png",
    type: "Speaker",
    description: "",
  },
  {
    name: "Yoshua Bengio",
    affliation: "Mila & Université de Montréal",
    webpage: "https://yoshuabengio.org/",
    img: "yoshua_neurips2025.png",
    type: "Speaker",
    description: "",
  },
];

const panelists: CHIPeople[] = [
  {
    name: "Yoshua Bengio",
    affliation: "Mila & Université de Montréal",
    webpage: "https://yoshuabengio.org/",
    img: "yoshua_neurips2025.png",
    type: "Panelist",
    description: "",
  },
  {
    name: "Dawn Song",
    affliation: "UC Berkeley",
    webpage: "https://dawnsong.io/",
    img: "dawn.png",
    type: "Panelist",
    description: "",
  },
  {
    name: "Eric Gilbert",
    affliation: "UMich",
    webpage: "http://eegilbert.org/",
    img: "eric.png",
    type: "Panelist",
    description: "",
  },
  {
    name: "Monojit Choudhury",
    affliation: "MBZUAI",
    webpage: "https://mbzuai.ac.ae/study/faculty/monojit-choudhury/",
    img: "monojit.png",
    type: "Panelist",
    description: "",
  },
  {
    name: "Hannah Kirk",
    affliation: "UK AI Security Institute",
    webpage: "https://www.aisi.gov.uk/people/hannah-kirk",
    img: "hannah.png",
    type: "Panelist",
    description: "",
  },
];

export const NeurIPS2025Tutorial: Tutorial = {
  kicker: "NeurIPS 2025 Tutorial",
  kickerUrl: NEURIPS_PAGE,
  heading: "Human-AI Alignment",
  headingUrl: NEURIPS_PAGE,
  subheading: "Foundations, Methods, Practice, and Challenges",
  heroLinks: [
    { label: "Tutorial Video Recordings", url: NEURIPS_PAGE },
    {
      label: "All Slides",
      url: "https://docs.google.com/presentation/d/e/2PACX-1vQUcxfBTt2yTxp7pFP1DjtWaMJ8J9DaBgJB2e9-V-hXka79o41HJWD2cXCIzsZXxDchkYReatD4m0cG/pub?start=false&loop=false&delayms=3000",
    },
  ],
  facts: [
    {
      label: "Date",
      value: "Tuesday, 02 December 2025",
      icon: heroicon(
        "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      ),
    },
    {
      label: "Time",
      value: "09:30 AM – 12:00 PM PST",
      icon: heroicon("M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"),
    },
    {
      label: "Location",
      value: "Exhibit Hall F, San Diego Convention Center",
      icon: heroicon(
        "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
        "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      ),
    },
  ],
  parts: [
    { emoji: "🏛️", title: "Foundations", subtitle: "Preferences, Values, and Morals" },
    { emoji: "⚙️", title: "Methods", subtitle: "Specification & Alignment Methods" },
    { emoji: "🤝", title: "Practice", subtitle: "Sociotechnical Evaluation and Oversight" },
    { emoji: "⛰️", title: "Challenges", subtitle: "AI Safety & Extreme Risks" },
  ],
  sessions: [
    {
      number: "I",
      title: "Introduction",
      speaker: "Hua Shen",
      slides:
        "https://docs.google.com/presentation/d/e/2PACX-1vT3Yipzga3xwGJEvp6yQRHxY3JgghxuA1QWkcjQZUS0jEIsb__9ld-45jK_d9_RqcaiUyB7Xm5A2slg/pub?start=false&loop=false&delayms=3000",
      duration: "5 min",
    },
    {
      number: "II",
      title: "Human-in-the-loop AI and Value Alignment",
      speaker: "Hua Shen",
      slides:
        "https://docs.google.com/presentation/d/e/2PACX-1vT3Yipzga3xwGJEvp6yQRHxY3JgghxuA1QWkcjQZUS0jEIsb__9ld-45jK_d9_RqcaiUyB7Xm5A2slg/pub?start=false&loop=false&delayms=3000",
      duration: "25 min",
    },
    {
      number: "III",
      title: "Pluralistic and Collective Alignment",
      speaker: "Mitchell Gordon",
      slides:
        "https://docs.google.com/presentation/d/e/2PACX-1vSD7qXAb4iF1iDBhhqbQh7ad5CePNmeGeDEPtt923VjdH_-peS7bzpAJ9Bbo1m0GA/pub?start=false&loop=false&delayms=3000",
      duration: "35 min",
    },
    {
      number: "IV",
      title: "Evaluation and Oversight",
      speaker: "Adam Kalai",
      slides:
        "https://docs.google.com/presentation/d/e/2PACX-1vTyg-G_3pwBmB56GWAE48xL1OKXq2MYMjSg_9jV1bARNjDdVna5zNkKRLJ6-MyOOQ/pub?start=false&loop=false&delayms=3000",
      duration: "35 min",
    },
    {
      number: "V",
      title: "A Safety Argument for the Scientist AI",
      speaker: "Yoshua Bengio",
      slides:
        "https://docs.google.com/presentation/d/e/2PACX-1vSUKYdF6buIu7zt4YaxChKKEMR2BjxP4whf9DKK6GwOG9EfSNpmwr79F1eEdwz2Yw/pub?start=false&loop=false&delayms=3000",
      duration: "20 min",
    },
    {
      number: "Panel",
      title: "PANEL: Alignment Challenge & Prospects",
      note: "See Our Panelists Below",
      duration: "30 min",
    },
  ],
  presentersTitle: "Speakers",
  presenters: speakers,
  panelists,
  cta: {
    title: "Check Details & Join Us",
    text: "Don't miss this in-depth tutorial on the future of AI alignment.",
    label: "Learn More & Register",
    url: NEURIPS_PAGE,
  },
};
