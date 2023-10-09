import { ScheduleEvent, ScheduleType } from "~/types/hackathon";

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

export const floorAmount = (amount: string | number) => {
  if (Number(amount) >= 1000000) {
    const mil = (
      (Math.floor(Number(amount) / 10000) * 10000) /
      10000
    ).toString();
    return `${mil[0]}.${mil.slice(1)}M`;
  } else if (Number(amount) >= 100000) {
    return (Math.floor(Number(amount) / 1000) * 1000).toLocaleString("en-US");
  } else {
    return (Math.floor(Number(amount) / 100) * 100).toLocaleString("en-US");
  }
};
