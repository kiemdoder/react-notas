import { User } from "./user";

export namespace RemoteAPI {
  export function fetchUser(id: number): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve({ id, name: "Clark Kent", enabled: true }),
        2000
      );
    });
  }

  export function fetchUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() =>
        resolve(
          Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            name: "User" + i,
            enabled: i % 3 === 0,
          }))
        )
      );
    });
  }

  export function httpGet(url: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve({ id: 12, name: "User12", enabled: true }),
        2000
      );
    });
  }
}
