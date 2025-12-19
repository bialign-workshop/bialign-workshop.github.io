import { ReactElement } from "react";

export enum PageIds {
  about = "Overview",
  speakers = "Speakers",
  schedule = "Schedule",
  papers = "Accepted Papers",
  cfp = "Call for Papers",
  organizers = "Organizers",
  committee = "Committees",
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
  type: string;
}
export interface CHIPeople extends People {
  type: string;
}


export interface CFP {
  description: string;
  scope: string | ReactElement;
  invitation: string;
  dates: {
    description?: string;
    date: string | ReactElement;
    type: "Submission" | "Notification" | "Camera ready" | "ICLR Workshop" | "CHI SIG" | "CHI Workshop";
  }[];
  submit: {
    platform: {
      name: string;
      url: string;
    };
    format: string | ReactElement;
    type: string | ReactElement;
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
