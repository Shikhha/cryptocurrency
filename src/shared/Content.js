import React from "react";
import { AppContext } from "../app/AppProvider";

export default function(props) {
  return (
    <AppContext.Consumer>
      {({ coinList, firstVisit, prices }) => {
        if (!coinList) return <div>Loading Coins...</div>;
        if (!prices && !firstVisit) return <div>Loading Prices...</div>;
        else return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}
