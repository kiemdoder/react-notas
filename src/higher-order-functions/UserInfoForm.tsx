import { withEditableUser } from "./withEditableUser";
import { EditUserComponentProps } from "./edit-user-component-props";

export const UserInfoForm = withEditableUser(
  ({ user, onChangeUser, onSaveUser, onResetUser }: EditUserComponentProps) => {
    return <span>user editor</span>;
  },
  123
);
