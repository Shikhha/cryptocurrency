import React from "react";
import { AppContext } from "../app/AppProvider";

export const SettingsContent = props => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        if (!coinList) return <div>Loading Coins...</div>;
        else return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
};
export const DashContent = props => {
  return (
    <AppContext.Consumer>
      {({ prices, coinList }) => {
        if (!coinList) return <div>Loading Coins...</div>;
        if (!prices) return <div>Loading Prices...</div>;
        else return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
};
