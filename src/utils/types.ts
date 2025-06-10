export interface FamilyMemberType {
  name: string;
  attending: boolean;
}

export interface FamilyType {
  name: string;
  members: string[];
}

export interface GuestsType {
  [key: string]: FamilyType;
}

export interface FamilyDB {
  id: string;
  name: string;
  members: string[];
}

export type RsvpStatus = 'assists' | 'pending' | 'no assist';