import { User } from "../shared/types";

export const users: User[] = [
  {
    id: "u1",
    name: "Aiko",
    avatar: "https://example.com/avatar1.png",
    profile: {
      age: 28,
      bio: "猫好きなフロントエンドエンジニア。珈琲が好きです。",
      location: "東京",
      interests: ["コーヒー", "猫", "旅行"],
      photos: ["https://example.com/p1.jpg"]
    }
  },
  {
    id: "u2",
    name: "Kenji",
    avatar: "https://example.com/avatar2.png",
    profile: {
      age: 31,
      bio: "バックエンド好き。週末は登山。",
      location: "神奈川",
      interests: ["登山", "料理"],
      photos: ["https://example.com/p2.jpg"]
    }
  }
];
