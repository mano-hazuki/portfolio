import { MicroCMSDate, MicroCMSImage, MicroCMSQueries, createClient } from "microcms-js-sdk";
import { getRandomInts } from "./random";

/* MicroCMS Client */
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
});

/* Base Schema */
export type Schema = {
  id: string;
} & MicroCMSDate;

/* Skill */
export type Skill = {
  name: string;
  icon: MicroCMSImage;
  experience: number;
  categories: string[];
} & Schema;

export async function fetchSkills(queries?: MicroCMSQueries) {
  const response = client.getAllContents<Skill>({ endpoint: "skills", queries: queries });
  return response;
}

export async function fetchRandomSkills() {
  const all = await fetchSkills();
  const indexes = getRandomInts(4, all.length);
  const skills: Skill[] = [];
  for (const i of indexes) {
    skills.push(all[i]);
  }
  return skills;
}

/* Work */
export type Work = {
  id: string;
} & Schema;

export async function fetchWorks(queries?: MicroCMSQueries) {
  const response = client.getAllContents<Work>({ endpoint: "works", queries: queries });
  return response;
}

/* Certification */
export type Certification = {
  name: string;
  status: string;
  certificatedAt: string;
};

export async function fetchCertifications(queries?: MicroCMSQueries) {
  const response = client.getAllContents<Certification>({ endpoint: "certifications", queries: queries });
  return response;
}
