import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import styled from "styled-components";
import Layout from "./Layout";
import Header from "./Header";

function App() {
  return (
    <Layout>
      <Header />
      <Welcome />
    </Layout>
  );
}

export default App;
