import { ReactElement } from "react";

export enum PageIds {
  about = "Overview",
  speakers = "Speakers",
  schedule = "Schedule",
  papers = "Accepted Papers",
  cfp = "CFP",
  organizers = "Organizers",
  committee = "Committee",
}

export interface People {
  name: string;
  description: string;
  label?: string;
  img: string;
  webpage: string;
  affliation: string;
  twitter?: string;
  bluesky?: string;
  linkedin?: string;
}
export interface Speaker extends People {
  type?: string;
}
export interface CHIPeople extends People {
  type: string;
}


export interface CFP {
  description: string;
  scope: string | ReactElement;
  notes?: string | ReactElement | undefined;
  invitation: string;
  dates: {
    description?: string;
    date: string | ReactElement;
    type: "Submission" | "Notification" | "Camera ready" | "ICLR Workshop" | "CHI SIG" | "CHI Workshop" | "NeurIPS Workshop";
  }[];
  submit: {
    platform: {
      name: string;
      url: string;
    };
    format: string | ReactElement;
    type: string | ReactElement;
    length?: string | ReactElement | undefined;
  };
}

export interface ProgramCommittee {
  name: string;
  affiliation: string;
}

export interface Schedule {
  start: string;
  end: string;
  title: string;
  description?: string | ReactElement;
}

export interface Overview {
  contact: string;
  acronym: string;
  slack: string;
  year: string;
  description: string | ReactElement;
  fullName: string;
  backgroundImg: string;
  confLogoImg: string;
  logoImg: string;
  logoWithWord: string;
  confName: string;
  challenge: string | ReactElement;
  goal: string | ReactElement;
  scope: string | ReactElement;
  location: string;
  date: string;
  committeeApplyLink?: string;
  committeeNote?: string;
  // When set, the Accepted Papers page lists orals and posters with this OpenReview link.
  papersOpenReviewLink?: string;
  sponsorshipContact?: string;
}

export interface Oral {
  title: string;
  authors: string;
  link: string;
}

export interface Poster {
  title: string;
  authors: string;
  link: string;
}

export interface Tiny {
  title: string;
  authors: string;
  link: string;
}

export interface Metadata {
  overview: Overview;
  organizers: People[];
  chiorganizers: CHIPeople[];
  speakers: Speaker[];
  orals: Oral[];
  poster: Poster[];
  tiny: Tiny[];
  cfp: CFP;
  pcs: ProgramCommittee[];
  schedule: Schedule[];

}

// Standalone tutorial pages (e.g. /neurips2025, /aisdm2026). Optional fields let
// each tutorial show only the sections its source material has.
export interface TutorialLink {
  label: string;
  url: string;
}

export interface TutorialFact {
  label: string;
  value: string;
  icon: ReactElement;
  url?: string;
}

export interface TutorialPart {
  title: string;
  emoji?: string;
  subtitle?: string;
  description?: string;
}

export interface TutorialSession {
  number: string;
  title: string;
  speaker?: string;
  note?: string;
  slides?: string;
  duration: string;
}

export interface TutorialSlides {
  viewUrl: string;
  embedUrl: string;
  pdfUrl?: string;
}

export interface TutorialHighlight {
  img: string;
  title: string;
  caption: string;
}

export interface TutorialMilestone {
  date: string;
  title: string;
  detail?: string;
  url?: string;
  current?: boolean;
}

export interface Tutorial {
  kicker: string;
  kickerUrl?: string;
  heading: string;
  headingUrl?: string;
  subheading?: string;
  host?: TutorialLink;
  event?: TutorialLink;
  heroLinks?: TutorialLink[];
  facts: TutorialFact[];
  title?: string;
  abstract?: string[];
  parts?: TutorialPart[];
  objectives?: string[];
  sessions?: TutorialSession[];
  presentersTitle: string;
  presenters: CHIPeople[];
  panelists?: CHIPeople[];
  links?: TutorialLink[];
  cta?: TutorialLink & { title: string; text: string };
  logos?: { img: string; alt: string; url: string }[];
  slides?: TutorialSlides;
  highlights?: TutorialHighlight[];
  groupPhoto?: { img: string; caption: string };
  acknowledgements?: { title: string; intro: string; people: CHIPeople[] };
  journey?: TutorialMilestone[];
  journeyStats?: string[];
}
