import { useUser } from "../custom-hooks/useUser";
import { useResource } from "../custom-hooks/useResource";
import { User } from "../data/user";
import { useDataSource } from "../custom-hooks/useDataSource";
import { RemoteAPI } from "../data/remote-api";

const UserInfo1 = ({ userId }: { userId: number }) => {
  const user = useUser(userId);
  return <span>User name: {user ? user.name : "Loading..."}</span>;
};

const UserInfo2 = ({ resourceURL }: { resourceURL: string }) => {
  const user = useResource(resourceURL) as unknown as User;
  return <span>User name: {user ? user.name : "Loading..."}</span>;
};

const UserInfo3 = ({
  getResourceFn,
}: {
  getResourceFn: () => Promise<User>;
}) => {
  const user = useDataSource<User>(getResourceFn);
  return <span>User name: {user ? user.name : "Loading..."}</span>;
};

export const CustomHooksPage = () => {
  return (
    <>
      <p>useUser(id: number)</p>
      <UserInfo1 userId={12} />

      <hr />
      <p>useResource(resourceURL: string )</p>
      <UserInfo2 resourceURL="/user/123" />

      <hr />
      <p>{"useDataSource(getResourceFn: () => Promise<any> )"}</p>
      <UserInfo3 getResourceFn={() => RemoteAPI.fetchUser(32)} />
    </>
  );
};
