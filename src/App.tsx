import React from "react";
import "./App.css";
import { AppLayout } from "./components/containers/AppLayout/AppLayout";
import { useAppSelector } from "./app/hooks";
import { selectPageComponent } from "./features/page-nav/pageNavSlice";
import { Sidenav } from "./features/page-nav/Sidenav";

function Header() {
  return <span>Header..</span>;
}

function App() {
  const Page = useAppSelector(selectPageComponent);

  return (
    <AppLayout sideNavWeight={1} contentWeight={3}>
      <Header />
      <Sidenav />
      <Page />
    </AppLayout>
  );
}

export default App;
