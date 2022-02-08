import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { ComponentTypes } from "./components/ComponentTypes";
import { AppLayout } from "./components/containers/AppLayout";

function Header() {
  return <span>Header..</span>;
}

function SideNav() {
  return <div>Side nav..</div>;
}

function App() {
  return (
    <AppLayout header={Header} sideNav={SideNav} content={ComponentTypes} />
  );
}

export default App;
