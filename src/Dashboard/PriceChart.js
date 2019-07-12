import HighChartConfig from "../highchart/HighChartConfig";
import React from "react";
import { Tile } from "../shared/Tile";
import { AppContext } from "../app/AppProvider";
import ReactHighCharts from "react-highcharts";
import HighchartsTheme from "../highchart/HighChartTheme";
ReactHighCharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({ historical }) => (
        <Tile>
          {historical ? (
            <ReactHighCharts config={HighChartConfig(historical)} />
          ) : (
            <div>Loading data..</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
