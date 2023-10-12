import { APIError } from "~/api/apiService";
import { ScheduleEvent, ScheduleType } from "~/types/hackathon";

export const termsLink =
  "https://buidlbox-app-resources.s3.amazonaws.com/buidlbox_ToS.pdf";
export const privacyLink =
  "https://buidlbox-app-resources.s3.amazonaws.com/buidlbox_Privacy_Policy.pdf";

export const sortHackathonByRecent = <
  T extends { scheduleList: ScheduleEvent[] }[]
>(
  arr: T
) => {
  if (!arr?.length) return arr;

  // sort by submission end date
  return arr.sort(function (a, b) {
    const aSubmissionEnd = getHackathonSubmissionEndDate(a.scheduleList);
    const bSubmissionEnd = getHackathonSubmissionEndDate(b.scheduleList);

    return new Date(aSubmissionEnd || new Date()) >
      new Date(bSubmissionEnd || new Date())
      ? -1
      : 1;
  });
};

export const getHackathonSubmissionEndDate = (
  scheduleList: ScheduleEvent[]
) => {
  return scheduleList.find(
    (scheduleEvent) => scheduleEvent.scheduleType == ScheduleType.SUBMISSION
  )?.endDate;
};

export const formatAmount = (amount: string | number) => {
  return Number(amount).toLocaleString("en-US");
};

export const floorAmount = (
  amount: string | number,
  formatToThousands?: boolean
) => {
  if (Number(amount) >= 1000000) {
    const mil = (
      (Math.floor(Number(amount) / 10000) * 10000) /
      10000
    ).toString();
    return `${mil[0]}.${mil.slice(1)}M`;
  } else if (Number(amount) >= 100000) {
    return (Math.floor(Number(amount) / 1000) * 1000).toLocaleString("en-US");
  } else {
    if (formatToThousands)
      return `${Math.floor(Number(amount) / 1000).toLocaleString("en-US")}K`;
    return (Math.floor(Number(amount) / 100) * 100).toLocaleString("en-US");
  }
};

export function throwFormattedError(error: string | APIError) {
  const errorMessage = typeof error === "string" ? error : error.message;
  throw new Error(errorMessage);
}

export const getErrorMessage = (
  err: unknown,
  fallback = "There was a problem"
) => {
  try {
    const parsedError = typeof err === "string" ? JSON.parse(err) : err;

    // If parsedError.message exists, use it, otherwise use the original error or fallback
    const message = JSON.parse(parsedError?.message).message ?? err ?? fallback;

    if (parsedError instanceof APIError) {
      return message;
    } else {
      return message;
    }
  } catch {
    // If JSON parsing fails, use the original error or fallback
    return `${err}` ?? fallback;
  }
};
