import { ReactElement } from "react";

export enum PageIds {
  about = "Overview",
  cfp = "Call for Papers",
  schedule = "Schedule",
  speakers = "Speakers",
  organizers = "Organizers",
  // committee = "Committee"
}
export interface People {
  name: string;
  description: string;
  img: string;
  webpage: string;
  affliation: string;
  twitter?: string;
}
export interface Speaker extends People {
  type: string;
}

export interface CFP {
  description: string;
  scope: string | ReactElement;
  invitation: string;
  dates: {
    description?: string;
    date: string | ReactElement;
    type: "Submission" | "Notification" | "Camera ready" | "Workshop";
  }[];
  submit: {
    platform: {
      name: string;
      url: string;
    };
    format: string | ReactElement;
    type: string;
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

export interface Metadata {
  overview: Overview;
  organizers: People[];
  speakers: Speaker[];
  cfp: CFP;
  pcs: ProgramCommittee[];
  schedule: Schedule[];
}
