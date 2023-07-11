import { entities } from "misskey-js";

export function usernameWithHost(user: entities.User): string {
  let username = user.username
  if (user.host) username += `@${user.host}`
  return username
}

export class Utils {
  static usernameWithHost = usernameWithHost
}