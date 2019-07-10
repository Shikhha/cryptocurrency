import React from "react";
import { AppContext } from "../app/AppProvider";

export default function(props) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        if (!coinList) {
          return <div>Loading Coins...</div>;
        } else {
          return <div>{props.children}</div>;
        }
      }}
    </AppContext.Consumer>
  );
}
