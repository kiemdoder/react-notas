import { useEffect, useState } from "react";
import { User } from "../data/user";
import { RemoteAPI } from "../data/remote-api";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (
  Component: (props: any) => JSX.Element,
  resourcePath: string,
  resourceName: string
) => {
  return (props: any) => {
    const [originalData, setOriginalData] = useState<any>();
    const [data, setData] = useState<any>();

    useEffect(() => {
      RemoteAPI.httpGet(resourcePath).then((user) => {
        setOriginalData(user);
        setData(user);
      });
    });

    const onChange = (changes: Partial<User>) => {
      if (data) {
        setData({ ...data, ...changes });
      }
    };

    const onSave = () => {
      if (data) {
        RemoteAPI.updateUser(data).then((updatedUser) => {
          setOriginalData(updatedUser);
          setData(updatedUser);
        });
      }
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
