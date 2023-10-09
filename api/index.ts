import { PublishedHackathon } from "~/types/hackathon";
import { apiService } from "./apiService";

const ROUTE = "hackathons";

const getPublishedHackathonsAPI = async (options?: {
  fetchOld?: boolean;
  page?: number;
  size?: number;
}) => {
  const apiUrl = import.meta.env.VITE_BUIDL_API;

  const url = new URL(`${apiUrl}/${ROUTE}`);

  const newOptions = options || {};
  if (!newOptions.size) newOptions.size = 100;

  for (const [key, value] of Object.entries(newOptions ?? {})) {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        const val = value.toString();
        url.searchParams.append(key, `${val}`);
      } else url.searchParams.append(key, `${value}`);
    }
  }

  const endpoint = url.toString();
  return await apiService<{ hackathons: PublishedHackathon[] }>({
    method: "GET",
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
    },
    hasResponse: true,
  });
};

export interface Metrics {
  property: "hackathons" | "projects" | "buidlers" | "prizes";
  value: number;
}

export const getMetricsAPI = async () => {
  const apiUrl = import.meta.env.VITE_BUIDL_API;
  const url = `${apiUrl}/landing-page/metrics`;

  return await apiService<{ data: Metrics[] }>({
    method: "GET",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    hasResponse: true,
  });
};

export interface TrialRequest {
  entityName: string;
  industry: string;
  teamMembers: number;
  contactEmail: string;
  link: string;
  comments: string;
}

export async function requestTrialAPI(payload: TrialRequest) {
  const apiUrl = import.meta.env.VITE_BUIDL_API;
  const url = `${apiUrl}/orgs/trial-request`;

  return await apiService({
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });
}

export async function newsletterSubscribeAPI(email: string) {
  const apiUrl = import.meta.env.VITE_BUIDL_API;
  const url = `${apiUrl}/landing-page/newsletter`;

  return await apiService({
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    body: { email },
  });
}
