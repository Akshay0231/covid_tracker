import React, { Component } from "react";
import { Chart, CountryPicker, Cards } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
class App extends Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        // console.log('country in app.js', country)
        const fetchedData = await fetchData(country)
        // console.log('fetchedData', fetchedData)
        this.setState({ data: fetchedData, country: country })
    }

    render() {
        const { data, country } = this.state

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
