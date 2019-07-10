import React from "react";
import "./App.css";
import styled from "styled-components";
import Layout from "./Layout";
import Header from "./Header";
import AppProvider from "./AppProvider";
import Settings from "../settings";
import Content from "../shared/Content";

function App() {
  return (
    <Layout>
      <AppProvider>
        <Header />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </Layout>
  );
}

export default App;
