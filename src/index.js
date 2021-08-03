import React from "react";
import ReactDOM from "react-dom";
import Graph from "./components/Graph";

import "./styles.css";

class App extends React.Component {
  state = {
    firstChartData: {},
    secondChartData: {}
  };

  UNSAFE_componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      firstChartData: {
        labels: ["Absence of OB", "Closeness", "Credibility"],
        datasets: [
          {
            label: "American Express",
            backgroundColor: "lightyellow",
            borderColor: "yellow",
            borderWidth: 1,
            data: [3, 5, 6, 7, 3, 5, 6, 7]
          },
          {
            label: "Mastercard",
            backgroundColor: "lightgreen",
            borderColor: "green",
            borderWidth: 1,
            data: [4, 7, 3, 6, 10, 7, 4, 6]
          }
        ]
      },
      secondChartData: {
        labels: ["Absence of OB", "Closeness", "Credibility"],
        datasets: [
          {
            label: "Mastercard",
            backgroundColor: "lightgreen",
            borderColor: "green",
            borderWidth: 1,
            data: [4, 7, 3, 6, 10, 7, 4, 6]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React &amp; Chart.js</h1>
        <Graph
          graphLabels={this.state.firstChartData.labels}
          graphData={this.state.firstChartData.datasets}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
