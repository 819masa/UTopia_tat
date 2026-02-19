import React from "react";
import { User } from "../../shared/types";

export default function ProfileCard({ user }: { user: User }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, width: 240 }}>
      <img
        src={user.avatar}
        alt={user.name}
        style={{ width: "100%", height: 140, objectFit: "cover" }}
      />
      <h3>{user.name}</h3>
      <p>{user.profile.bio}</p>
      <small>{user.profile.interests.join(" · ")}</small>
    </div>
  );
}
