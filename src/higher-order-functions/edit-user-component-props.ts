import { User } from "../data/user";

export interface EditUserComponentProps {
  user: User;
  onChangeUser: (changes: Partial<User>) => void;
  onSaveUser: () => void;
  onResetUser: () => void;
}
