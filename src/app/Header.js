import React from "react";
import styled from "styled-components";

const Head = styled.div`
  display: grid;
  grid-template-columns: 100px auto 100px 100px;
`;

export default function() {
  return (
    <Head>
      <div>CryptoDash</div>
      <div />
      <div>Dashboard</div>
      <div>Settings</div>
    </Head>
  );
}
