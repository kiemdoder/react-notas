import { User } from "../../../data/user";

export const UserInfo = ({ user }: { user?: User }) => {
  if (user) {
    const { name, id, enabled } = user;
    return (
      <div>
        Name: {name}, Id: {id}, Enabled: {enabled ? "Yes" : "No"}
      </div>
    );
  } else {
    return <div>Loading..</div>;
  }
};
