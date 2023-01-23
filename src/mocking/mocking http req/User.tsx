import { useEffect, useState } from "react";

export const User = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((data: { name: string }) => data.name)))
      .catch((error) => setError("error fetching users..."));
  }, []);
  return (
    <>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li data-testid="listitem" key={user}>
            {user}
          </li>
        ))}
      </ul>
    </>
  );
};
