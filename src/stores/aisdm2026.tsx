import { Event, LocationOn, Schedule } from "@material-ui/icons";
import { CHIPeople, Tutorial } from "./Interfaces";

// BiAlign tutorial at the 2026 Human-AI Complementarity Workshop (Dynamic Alignment),
// hosted by the NSF AI Institute for Societal Decision Making (AI-SDM) at CMU.
// Abstract and objectives follow the official programming page:
// https://www.cmu.edu/ai-sdm/research/human-ai-workshop/2026_workshop/2026-programming/index.html
// Agenda, highlights, and timeline follow the tutorial slides (published at SLIDES_PUB below).

const PYRAMID_PAPER = "https://hua-shen.org/assets/files/bialign-design-space.pdf";

const SLIDES_PUB =
  "https://docs.google.com/presentation/d/e/2PACX-1vQbkBFn1-whWFJc-wMf34kafPc48-H1tpoWhDi90e54KfD-pww-Q1LN4C3raOtqvCHaDbxEuML7zFoS";

const presenters: CHIPeople[] = [
  {
    name: "Hua Shen",
    affliation: "NYU Shanghai / New York University",
    webpage: "https://hua-shen.org/",
    img: "hua.png",
    twitter: "https://x.com/huashen218",
    type: "Presenter",
    description:
      "Hua Shen is an Assistant Professor of Computer Science at NYU Shanghai and New York University. " +
      "She is leading the bidirectional human-AI alignment projects and workshops with collaborators. " +
      "Her research is rooted in HCI and intersects with various AI fields, such as NLP, Speech and Computer Vision. " +
      "She empowers humans to interactively explain, evaluate, and collaborate with AI, and incorporates human feedback into improving AI.",
  },
  {
    name: "Tiffany Knearem",
    affliation: "TK Research",
    webpage: "https://tknearem.wixsite.com/tknearem",
    img: "tiffany.png",
    twitter: "https://x.com/tknearem",
    type: "Presenter",
    description:
      "Tiffany Knearem is a User Experience Researcher whose work focuses on product designer-developer collaboration, " +
      "creativity support tooling, and opportunities for AI in the user interface (UI) design space. " +
      "She holds a PhD in Information Sciences and Technologies with emphasis on Human-Computer Interaction from Pennsylvania State University. " +
      "She co-organized the CHI 2024 workshop on Computational UI and the BiAlign workshops at ICLR and CHI.",
  },
  {
    name: "Jenny T. Liang",
    affliation: "Carnegie Mellon University",
    webpage: "https://jennyliang.me/",
    img: "jenny.png",
    twitter: "https://x.com/jennytliang",
    type: "Presenter",
    description:
      "Jenny T. Liang is a PhD student in Software Engineering at Carnegie Mellon University, advised by Brad A. Myers. " +
      "Her research sits at the intersection of software engineering, HCI, and applied machine learning, focusing on how developers " +
      "interact with AI-powered tools and how to design more usable systems. She has published in venues such as ICSE, FSE, and CHI, " +
      "receiving awards including the ACM SIGSOFT Distinguished Paper Award.",
  },
];

export const AISDM2026: Tutorial = {
  kicker: "BiAlign Tutorial · NSF AI-SDM 2026",
  heading:
    "Tutorial on Bidirectional Human-AI Alignment: From Static Preferences to Dynamic Human-AI Complementarity",
  host: {
    label: "NSF AI Institute for Societal Decision Making",
    url: "https://www.cmu.edu/ai-sdm/",
  },
  event: {
    label: "Human-AI Complementarity Workshop: Dynamic Alignment",
    url: "https://www.cmu.edu/ai-sdm/research/human-ai-workshop/index.html",
  },
  facts: [
    { label: "Date", value: "Thursday, September 24, 2026", icon: <Event /> },
    { label: "Location", value: "Rivers Club, Pittsburgh, PA", icon: <LocationOn /> },
    { label: "Format", value: "2-hour interactive tutorial", icon: <Schedule /> },
  ],
  abstract: [
    "Current alignment paradigms largely optimize AI systems for static human preferences and single-turn evaluations. " +
      "Yet real deployments involve humans and AI co-adapting over trajectories of interaction: human values shift, " +
      "model behavior drifts, and complementarity emerges (or fails) longitudinally.",
    "This 2-hour, hands-on tutorial introduces Bidirectional Human-AI Alignment, a framework that treats alignment as a " +
      "dynamic, mutual process: aligning AI with humans (integrating human values and feedback into training and evaluation) " +
      "and aligning humans with AI (enabling people to explain, audit, and effectively collaborate with AI systems). " +
      "The tutorial builds on our NeurIPS 2025 tutorial on Human-AI Alignment and the ICLR/CHI BiAlign workshop series.",
  ],
  objectives: [
    "Understand the limits of static, single-turn alignment for achieving human-AI complementarity.",
    "Acquire a taxonomy of current alignment methods spanning ML and HCI.",
    "Gain practical experience evaluating the alignment of deployed LLMs.",
    "Leave with concrete research directions on dynamic, bidirectional alignment for human-AI decision making.",
  ],
  logos: [
    { img: "aisdm2026/ai-sdm-logo.png", alt: "NSF AI-SDM", url: "https://www.cmu.edu/ai-sdm/" },
    { img: "aisdm2026/nsf-logo.png", alt: "U.S. National Science Foundation", url: "https://www.nsf.gov/" },
  ],
  heroLinks: [
    { label: "BiAlign Position Paper", url: "https://arxiv.org/abs/2406.09264" },
    { label: "BiAlign Pyramid Design Space", url: PYRAMID_PAPER },
  ],
  slides: {
    viewUrl: `${SLIDES_PUB}/pub?start=false&loop=false&delayms=3000`,
    embedUrl: `${SLIDES_PUB}/embed?start=false&loop=false&delayms=3000`,
  },
  sessions: [
    { number: "I", title: "Introduction & BiAlign Motivation", speaker: "Hua Shen", duration: "12 min" },
    { number: "II", title: "BiAlign Design Space Overview", speaker: "Hua Shen", duration: "15 min" },
    { number: "III", title: "Individual Alignment", speaker: "Jenny Liang", duration: "15 min" },
    { number: "IV", title: "Collective Alignment", speaker: "Tiffany Knearem", duration: "15 min" },
    { number: "V", title: "Scenarios to Ground Design Space", speaker: "Jenny + Tiffany", duration: "8 min" },
    { number: "★", title: "Activity: Discussion and Share Out", speaker: "Everyone", duration: "45 min" },
    { number: "VI", title: "Next Steps and Wrap-up", speaker: "Hua Shen", duration: "10 min" },
  ],
  highlights: [
    {
      img: "aisdm2026/slide-12.jpg",
      title: "Static Preferences → Dynamic Complementarity",
      caption: "What static alignment assumes, and what dynamic alignment requires.",
    },
    {
      img: "aisdm2026/slide-14.jpg",
      title: "Four Core Research Questions",
      caption: "Align AI with humans (RQ1–2) and align humans with AI (RQ3–4).",
    },
    {
      img: "aisdm2026/slide-23.jpg",
      title: "The BiAlign Pyramid",
      caption: "A design space across scales, built bottom-up from 318 papers.",
    },
    {
      img: "aisdm2026/slide-24.jpg",
      title: "Two Axes, Four Configurations",
      caption: "Individual or societal humans × single- or multi-agent AI.",
    },
    {
      img: "aisdm2026/slide-27.jpg",
      title: "Represent → Measure → Steer",
      caption: "The universal core every alignment mechanism answers.",
    },
    {
      img: "aisdm2026/slide-33.jpg",
      title: "Four Gaps → Where to Design Next",
      caption: "Open problems surfaced by the corpus.",
    },
    {
      img: "aisdm2026/slide-72.jpg",
      title: "Scenario: AI Tutoring System",
      caption: "Individual × single-agent: tracking skills and reliance over time.",
    },
    {
      img: "aisdm2026/slide-73.jpg",
      title: "Scenario: Healthcare System",
      caption: "Society × multi-agent: aligning care across patients, clinicians, and agents.",
    },
  ],
  groupPhoto: {
    img: "aisdm2026/group-photo.jpg",
    caption:
      "BiAlign tutorial participants at the NSF AI-SDM Human-AI Complementarity Workshop, Pittsburgh, September 24, 2026.",
  },
  acknowledgements: {
    title: "Special Thanks",
    intro: "Thank you to our key tutorial coordinators, and to everyone who joined us in Pittsburgh!",
    people: [
      {
        name: "Norman Gottron",
        affliation: "NSF AI-SDM Managing Director",
        webpage: "https://www.linkedin.com/in/norman-gottron-18813617",
        img: "aisdm2026/norman-gottron.png",
        type: "Coordinator",
        description: "",
      },
      {
        name: "Coty Gonzalez",
        affliation: "NSF AI-SDM Co-Director",
        webpage: "https://www.cmu.edu/dietrich/sds/people/faculty/cleotilde-gonzalez.html",
        img: "aisdm2026/coty-gonzalez.png",
        type: "Coordinator",
        description: "",
      },
    ],
  },
  presentersTitle: "Presenters",
  presenters,
  journey: [
    {
      date: "Jun 2024",
      title: "BiAlign Position Paper",
      detail: "400+ papers; NeurIPS '25",
      url: "https://arxiv.org/abs/2406.09264",
    },
    {
      date: "Apr 2025",
      title: "ICLR & CHI '25 Workshop + SIG",
      detail: "Bridging two communities",
      url: "https://bialign-workshop.github.io/2025",
    },
    {
      date: "Fall 2025",
      title: "First BiAlign Course",
      detail: "Full open course at NYU Shanghai",
      url: "https://hua-shen.org/src/course_bialign.html",
    },
    {
      date: "Dec 2025",
      title: "NeurIPS '25 Tutorial",
      detail: "With MIT, OpenAI, and Yoshua Bengio",
      url: "https://bialign-workshop.github.io/neurips2025",
    },
    {
      date: "Apr 2026",
      title: "CHI '26 Workshop",
      detail: "Interactive alignment",
      url: "https://bialign-workshop.github.io/2026",
    },
    {
      date: "Sep 2026",
      title: "BiAlign Pyramid Design Space",
      detail: "318 papers · 31 researchers",
      url: PYRAMID_PAPER,
    },
    {
      date: "Sep 2026",
      title: "NSF AI-SDM Tutorial",
      detail: "This tutorial",
      current: true,
    },
    {
      date: "Dec 2026",
      title: "NeurIPS '26 Workshop",
      detail: "December 11, 2026",
      url: "https://bialign-workshop.github.io/neurips2026",
    },
  ],
  journeyStats: [
    "5 workshops / tutorials / SIG",
    "~300 submissions",
    "~1,000 authors",
    "400+ Slack members",
    "1,000+ attendees",
  ],
  links: [
    {
      label: "Workshop programming (AI-SDM)",
      url: "https://www.cmu.edu/ai-sdm/research/human-ai-workshop/2026_workshop/2026-programming/index.html",
    },
    { label: "Bidirectional Human-AI Alignment (paper)", url: "https://arxiv.org/abs/2406.09264" },
    { label: "BiAlign Pyramid: A Design Space (paper)", url: PYRAMID_PAPER },
    { label: "NeurIPS 2025 Tutorial", url: "https://bialign-workshop.github.io/neurips2025" },
    { label: "BiAlign @ NeurIPS 2026", url: "https://bialign-workshop.github.io/neurips2026" },
    { label: "BiAlign @ CHI 2026", url: "https://bialign-workshop.github.io/2026" },
    { label: "BiAlign @ ICLR & CHI 2025", url: "https://bialign-workshop.github.io/2025" },
  ],
};
