import { User } from "./interfaces-hw";

export class UserSummary {
  summary: string;

  constructor(user: User) {
    this.summary = `${user.name} lives in ${user.address.city}, email: ${user.email}`;
  }
}
