import { View } from '@components/view';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

const _Chart = () => {
  return (
    <View style={{ zIndex: -1 }} mv={Platform.SizeScale(15)} flex={1}>
      <AutoHeightWebView
        scrollEnabled={false}
        scrollEnabledWithZoomedin={true}
        style={
          {
            // width: Platform.deviceWidth - Platform.SizeScale(30),
            //   height: Platform.SizeScale(500),
          }
        }
        // source={{ uri: 'https://echarts.apache.org/examples/zh/index.html#chart-type-candlestick' }}
        source={{
          /*html*/
          html: `
            <html>
            <head>
              <script src="https://cdn.anychart.com/releases/v8/js/anychart-base.min.js"></script>
              <script src="https://cdn.anychart.com/releases/v8/js/anychart-ui.min.js"></script>
              <script src="https://cdn.anychart.com/releases/v8/js/anychart-exports.min.js"></script>
              <script src="https://cdn.anychart.com/releases/v8/js/anychart-stock.min.js"></script>
              <script src="https://cdn.anychart.com/releases/v8/js/anychart-data-adapter.min.js"></script>
              <link href="https://cdn.anychart.com/releases/v8/css/anychart-ui.min.css" type="text/css" rel="stylesheet">
              <link href="https://cdn.anychart.com/releases/v8/fonts/css/anychart-font.min.css" type="text/css" rel="stylesheet">
              <style type="text/css">
            
                html,
                body,
                #container {
                  width: 100%;
                  height: 100%;
                  margin: 0;
                  padding: 0;
                }
              
            </style>
            </head>
            <body>
              
              <div id="container"></div>
              
            
              <script>
            
                anychart.onDocumentReady(function () {
                  // The data used in this sample can be obtained from the CDN
                  // https://cdn.anychart.com/csv-data/csco-daily.csv
                  anychart.data.loadCsvFile(
                    'https://cdn.anychart.com/csv-data/csco-daily.csv',
                    function (data) {
                      // create data table on loaded data
                      var dataTable = anychart.data.table();
                      dataTable.addData(data);
            
                      // map loaded data for the ohlc series
                      var mapping = dataTable.mapAs({
                        open: 1,
                        high: 2,
                        low: 3,
                        close: 4
                      });
            
                      // map loaded data for the scroller
                      var scrollerMapping = dataTable.mapAs();
                      scrollerMapping.addField('value', 5);
            
                      // create stock chart
                      var chart = anychart.stock();
            
                      // create first plot on the chart
                      var plot = chart.plot(0);
                      // set grid settings
                      plot.yGrid(true).xGrid(true).yMinorGrid(true).xMinorGrid(true);
            
                      // create EMA indicators with period 50
                      plot
                        .ema(dataTable.mapAs({ value: 4 }))
                        .series()
                        .stroke('1.5 #455a64');
            
                      var series = plot.candlestick(mapping);
                      series.name('CSCO');
                      series.normal().fallingFill("#FF3165", 1);
                      series.normal().risingHatchFill("forward-diagonal", "#0066cc");
                      series.normal().fallingStroke("#FF3165", 1,'0', "round");
                      series.legendItem().iconType('rising-falling');
            
                      // create scroller series with mapped data
                      chart.scroller().candlestick(mapping);
            
                      // set chart selected date/time range
                      chart.selectRange('2007-01-03', '2007-01-20');
            
                      // set container id for the chart
                      chart.container('container');
                      // initiate chart drawing
                      chart.draw();
            
                      // create range picker
                      var rangePicker = anychart.ui.rangePicker();
                      // init range picker
                      rangePicker.render(chart);
            
                      // create range selector
                      var rangeSelector = anychart.ui.rangeSelector();
                      // init range selector
                      rangeSelector.render(chart);
                    }
                  );
                });
              
            </script>
            </body>
            </html>
                            
            
          `,
        }}
      />
    </View>
  );
};

export const Chart = memo(_Chart);

const styles = StyleSheet.create({});
