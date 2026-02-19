import React, { useEffect, useState } from "react";
import { User } from "../../shared/types";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>UTopia — Mock Matching</h1>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {users.map((u) => (
          <ProfileCard key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}
