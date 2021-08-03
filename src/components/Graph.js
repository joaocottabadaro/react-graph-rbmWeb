import React from "react";

// react plugin used to create charts
import { Bar } from "react-chartjs-2";

const Graph = (props) => {
  const { graphLabels, graphData } = props;

  console.log(graphData);
  return (
    <div className="chart">
      <Bar
        data={{
          labels: graphLabels,
          datasets: graphData
        }}
        width={300}
        height={300}
        options={{
          maintainAspectRatio: false,
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var currentValue = dataset.data[tooltipItem.index];
                // return 'R$ ' + formatMoney(currentValue);
                return "R$" + currentValue;
              }
            }
          },
          legend: {
            display: false,
            position: "bottom"
          },
          plugins: {
            labels: {
              fontSize: 16,
              fontColor: "white"
            }
          }
        }}
      />
    </div>
  );
};

export default Graph;
