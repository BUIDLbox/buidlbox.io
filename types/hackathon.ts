export interface Testimonial {
  content: string;
  name: string;
  role: string;
  avatarUrl: string;
  id: number;
}

export interface PublishedHackathon {
  hackathonId: string;
  hackathonName: string;
  hackathonSlug: string;
  hackathonDescription: string;
  hackathonLogoUrl: string;
  orgId: string;
  orgSlug: string;
  orgName: string;
  orgLogoUrl: string;
  scheduleList: ScheduleEvent[];
  rewardAmount: string;
  location: string;
  locationType: string;
  participantCount: number;
  projectCount: string;
}

export interface ScheduleEvent {
  scheduleType: ScheduleType;
  scheduleId: string;
  startDate: string;
  endDate: string;
  title?: string;
  description?: string;
  location?: string;
  addedByOrgId?: string;
  addedBy?: {
    orgId: string;
    orgName: string;
    orgSlug: string;
    orgLogoUrl: string;
  };
  speakers?: {
    name: string;
    twitter: string;
  }[];
  eventType?: EventType;
}

export enum ScheduleType {
  SUBMISSION = "submission",
  EVALUATION = "evaluation",
  MILESTONE = "milestone",
  WORKSHOP_IN_PERSON = "in-person event",
  WORKSHOP_VIRTUAL = "virtual event",
}

export enum EventType {
  MEETUP = "meetup",
  AMA = "ama",
  WORKSHOP = "educational workshop",
  TEAM_FORMATION = "team formation",
  OFFICE_HOURS = "office hours",
  KICKOFF_SESSION = "kickoff session",
  WINNER_ANNOUNCEMENT = "winner announcement",
  PARTICIPANT_DEMOS = "participant demos",
  PARTY = "party",
  OTHER = "other",
}
