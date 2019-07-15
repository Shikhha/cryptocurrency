import HighChartConfig from "../highchart/HighChartConfig";
import React from "react";
import { Tile } from "../shared/Tile";
import { AppContext } from "../app/AppProvider";
import ReactHighCharts from "react-highcharts";
import HighchartsTheme from "../highchart/HighChartTheme";
import ChartSelect from "./ChartSelect";
ReactHighCharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({ historical, changeChartSelect }) => (
        <Tile>
          <ChartSelect
            defaultValue="Months"
            onChange={e => changeChartSelect(e.target.value)}
          >
            <option value="Days">Days</option>
            <option value="Weeks">Weeks</option>
            <option value="Months">Months</option>
          </ChartSelect>
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
