import React from "react";
import "./App.css";
import { AppLayout } from "./components/containers/AppLayout/AppLayout";
import { useAppSelector } from "./app/hooks";
import { selectPageComponent } from "./features/page-nav/pageNavSlice";
import { Sidenav } from "./features/page-nav/Sidenav";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./data/apollo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = {
  colors: {
    header: "#d1e3de",
  },
};

const queryClient = new QueryClient();

function Header() {
  return <span>Header..</span>;
}

function App() {
  const Page = useAppSelector(selectPageComponent);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={apolloClient}>
          <AppLayout sideNavWeight={1} contentWeight={3}>
            <Header />
            <Sidenav />
            <Page />
          </AppLayout>
        </ApolloProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
