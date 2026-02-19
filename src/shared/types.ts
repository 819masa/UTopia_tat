export type ID = string;

export type Profile = {
  age: number;
  bio: string;
  location?: string;
  interests: string[];
  photos: string[]; // URLs (mock)
};

export type User = {
  id: ID;
  name: string;
  avatar?: string;
  profile: Profile;
};

export type Match = {
  userId: ID;
  candidateId: ID;
  score: number; // 0-100
};
