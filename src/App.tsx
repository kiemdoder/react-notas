import React from "react";
import "./App.css";
import { ComponentTypes } from "./components/ComponentTypes";
import { AppLayout } from "./components/containers/AppLayout/AppLayout";

function Header() {
  return <span>Header..</span>;
}

function SideNav() {
  return <div>Side nav..</div>;
}

function App() {
  return (
    <AppLayout sideNavWeight={2} contentWeight={3}>
      <Header />
      <SideNav />
      <ComponentTypes />
    </AppLayout>
  );
}

export default App;
