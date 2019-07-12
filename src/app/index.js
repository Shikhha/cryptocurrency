import React from "react";
import "./App.css";
import styled from "styled-components";
import Layout from "./Layout";
import Header from "./Header";
import AppProvider from "./AppProvider";
import Settings from "../settings";
import { SettingsContent, DashContent } from "../shared/Content";
import Dashboard from "../Dashboard";

function App() {
  return (
    <Layout>
      <AppProvider>
        <Header />
        <SettingsContent>
          <Settings />
        </SettingsContent>
        <DashContent>
          {" "}
          <Dashboard />
        </DashContent>
      </AppProvider>
    </Layout>
  );
}

export default App;
