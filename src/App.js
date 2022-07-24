import React, { Component } from "react";
import { Chart, CountryPicker, Cards } from "./components";
import styles from "./App.module.css";
class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>App</h1>
        <CountryPicker />
        <Cards />
        <Chart />
      </div>
    );
  }
}

export default App;
