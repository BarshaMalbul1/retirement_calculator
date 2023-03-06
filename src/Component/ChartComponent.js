/* Imports */


import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


function ChartComponent({data}){
//     let root = am5.Root.new("chartdiv");
// root.setThemes([
//   am5themes_Animated.new(root)
// ]);
// let chart = root.container.children.push(am5xy.XYChart.new(root, {
//   panX: true,
//   panY: true,
//   wheelX: "panX",
//   wheelY: "zoomX",
//   pinchZoomX:true
// }));

// chart.get("colors").set("step", 3);

// let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
// cursor.lineY.set("visible", false);

// let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//   maxDeviation: 0.3,
//   baseInterval: {
//     timeUnit: "day",
//     count: 1
//   },
//   renderer: am5xy.AxisRendererX.new(root, {}),
//   tooltip: am5.Tooltip.new(root, {})
// }));

// let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//   maxDeviation: 0.3,
//   renderer: am5xy.AxisRendererY.new(root, {})
// }));

// let series = chart.series.push(am5xy.LineSeries.new(root, {
//   name: "Series 1",
//   xAxis: xAxis,
//   yAxis: yAxis,
//   valueYField: "value1",
//   valueXField: "date",
//   tooltip: am5.Tooltip.new(root, {
//     labelText: "{valueX}: {valueY}\n{previousDate}: {value2}"
//   })
// }));

// series.strokes.template.setAll({
//   strokeWidth: 2
// });

// series.get("tooltip").get("background").set("fillOpacity", 0.5);

// let series2 = chart.series.push(am5xy.LineSeries.new(root, {
//   name: "Series 2",
//   xAxis: xAxis,
//   yAxis: yAxis,
//   valueYField: "value2",
//   valueXField: "date"
// }));
// series2.strokes.template.setAll({
//   strokeDasharray: [2, 2],
//   strokeWidth: 2
// });

// root.dateFormatter.setAll({
//   dateFormat: "yyyy-MM-dd",
//   dateFields: ["valueX"]
// });

// let data = [{
//   date: new Date(2019, 5, 12).getTime(),
//   value1: 50,
//   value2: 48,
//   previousDate: new Date(2019, 5, 5)
// }]

// series.data.setAll(data);
// series2.data.setAll(data);

// series.appear(1000);
// series2.appear(1000);
// chart.appear(1000, 100);

// amCharts
return( 
    console.log({data})
);
}
export default ChartComponent;
