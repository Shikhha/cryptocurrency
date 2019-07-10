import React from "react";
import { AppContext } from "../app/AppProvider";

export default function Welcome() {
  return (
    <AppContext>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to Crypto-Dashboard, please select your favourite coins to
            begin
          </div>
        ) : null
      }
    </AppContext>
  );
}
