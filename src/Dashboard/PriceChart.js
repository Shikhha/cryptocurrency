import HighChartConfig from "../highchart/HighChartConfig";
import React from "react";
import { Tile } from "../shared/Tile";
import { AppContext } from "../app/AppProvider";
import ReactHighCharts from "react-highcharts";

export default function() {
  return (
    <AppContext.Consumer>
      {() => (
        <Tile>
          <ReactHighCharts config={HighChartConfig()} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
