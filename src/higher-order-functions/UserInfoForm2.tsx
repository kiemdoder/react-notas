import { EditUserComponentProps } from "./edit-user-component-props";
import { withEditableResource } from "./withEditableResource";

export const UserInfoForm2 = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }: EditUserComponentProps) => {
    if (user) {
      const { name, enabled } = user;
      return (
        <>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => onChangeUser({ name: e.target.value })}
            />
          </label>

          <label>
            Enabled:
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => onChangeUser({ enabled: e.target.checked })}
            />
          </label>
          <br />
          <button onClick={onSaveUser}>Save</button>
          <button onClick={onResetUser}>Reset</button>
        </>
      );
    }

    return <span>Loading..</span>;
  },
  "/user/123",
  "user"
);
