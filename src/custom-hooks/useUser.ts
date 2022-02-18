import { User } from "../data/user";
import { useEffect, useState } from "react";
import { RemoteAPI } from "../data/remote-api";

export const useUser = (userId: number) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    RemoteAPI.fetchUser(userId).then((user) => {
      setUser(user);
    });
  }, [userId]);

  return user;
};
