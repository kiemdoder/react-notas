import React, { useEffect } from "react";
import { useState } from "react";
import { User } from "../data/user";
import { RemoteAPI } from "../data/remote-api";

//--[Component with children]---------------------------------------------------------------------------------------------------------
const List = (props: any) => <ul>{props.children}</ul>;
const ListItem = (props: any) => (
  <li>
    {props.name}: {props.num}
  </li>
);
ListItem.defaultProps = { name: "Default", num: 100 };

//class component
class Title extends React.Component<{ title: string }> {
  render = () => <h4>{this.props.title}</h4>;
}

//class component with state
class CounterA extends React.Component<{ start: number }, { counter: number }> {
  //<props-type, state-type>
  state = {
    counter: this.props.start,
  };

  render() {
    return (
      <strong
        onClick={() => this.setState({ counter: this.state.counter + 1 })}
        className="clickable"
      >
        {this.state.counter}
      </strong>
    );
  }
}

//function component with state
const CounterB = (props: { start: number }) => {
  const [counter, setCounter] = useState(props.start);

  return (
    <strong onClick={() => setCounter(counter + 1)} className="clickable">
      {counter}
    </strong>
  );
};

//component that loads async data
const AsyncData = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const user = await RemoteAPI.fetchUser(1);
      setUser(user);
    })();
  }, []); // [] will make the effect happen only on the first render

  return <span>{user ? user.name : "loading.."}</span>;
};

export const ComponentTypesPage = () => (
  <div>
    <Title title="Toets 1 2 3" />
    <List>
      <ListItem name="a" num={123} />
      <ListItem name="b" num={432} />
      <ListItem /> {/* use default props */}
    </List>
    CounterA:
    <CounterA start={10} />
    <br />
    CounterB:
    <CounterB start={20} />
    <br />
    <AsyncData />
  </div>
);
