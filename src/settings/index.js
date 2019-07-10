import React from "react";
import Welcome from "./Welcome";
import ConfirmButton from "./ConfirmButton";
import Page from "../shared/Page";
import CoinGrid from "./CoinGrid";
export default function() {
  return (
    <Page name="Settings">
      <CoinGrid topsection />
      <Welcome />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}
