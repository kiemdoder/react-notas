import { withUser } from "../higher-order-functions/with-user";
import { User } from "../data/user";
import { UserInfoForm } from "../higher-order-functions/UserInfoForm";
import { UserInfoForm2 } from "../higher-order-functions/UserInfoForm2";

const UserDetail = ({ user: { name, enabled } }: { user: User }) => (
  <>
    <div>Name: {name}</div>
    <div>Enabled: {enabled ? "Yes" : "No"}</div>
  </>
);

export const HigherOrderComponentsPage = () => {
  const UserInfo = withUser(UserDetail, 123);
  return (
    <>
      <p>withUser</p>
      <UserInfo />
      <hr />
      <p>withEditableUser</p>
      <UserInfoForm />
      <hr />
      <p>withEditableResource</p>
      <UserInfoForm2 />
    </>
  );
};
