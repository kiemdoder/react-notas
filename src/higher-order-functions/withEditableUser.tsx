import { useEffect, useState } from "react";
import { User } from "../data/user";
import { RemoteAPI } from "../data/remote-api";

export const withEditableUser = (
  Component: (props: any) => JSX.Element,
  userId: number
) => {
  return (props: any) => {
    const [originalUser, setOriginalUser] = useState<User>();
    const [user, setUser] = useState<User>();

    useEffect(() => {
      RemoteAPI.fetchUser(userId).then((user) => {
        setOriginalUser(user);
        setUser(user);
      });
    });

    const onChangeUser = (changes: Partial<User>) => {
      if (user) {
        setUser({ ...user, ...changes });
      }
    };

    const onSaveUser = () => {
      if (user) {
        RemoteAPI.updateUser(user).then((updatedUser) => {
          setOriginalUser(updatedUser);
          setUser(updatedUser);
        });
      }
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};
