import { useEffect, useState } from "react";
import { User } from "../data/user";
import { RemoteAPI } from "../data/remote-api";

export const withUser = (
  Component: (props: any) => JSX.Element,
  userId: number
) => {
  return (props: any) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
      RemoteAPI.fetchUser(userId).then(setUser);
    }, [userId]);

    return user ? <Component {...props} user={user} /> : <span>Loading..</span>;
  };
};
