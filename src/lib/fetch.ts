import { MicroCMSDate, MicroCMSImage, MicroCMSQueries, createClient } from "microcms-js-sdk";

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
  category: string;
} & Schema;

export async function fetchSkills(queries?: MicroCMSQueries) {
  const response = client.getAllContents<Skill>({ endpoint: "skills", queries: queries });
  return response;
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
