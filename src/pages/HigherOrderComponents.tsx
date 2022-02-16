import { withUser } from "../higher-order-functions/with-user";
import { User } from "../data/user";

const UserDetail = ({ user: { name, enabled } }: { user: User }) => (
  <>
    <div>Name: {name}</div>
    <div>Enabled: {enabled ? "Yes" : "No"}</div>
  </>
);

export const HigherOrderComponents = () => {
  const UserInfo = withUser(UserDetail, 123);
  return <UserInfo />;
};
