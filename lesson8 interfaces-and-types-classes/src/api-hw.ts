import { User } from "./interfaces-hw";

export async function fetchUser(userId: number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
}
