import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableUrl = url

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const {
            data: { confirmed, deaths, recovered, lastUpdate },
        } = await axios.get(changeableUrl);
        return { confirmed, deaths, recovered, lastUpdate };
    } catch (error) {
        console.log('Error in fetchData', error)
        return error;
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            recovered: dailyData.recovered.total,
            reportDate: dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        return error;
    }
};

export const getCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        const countriesList = countries.map((country) => ({
            countryName: country.name
        }))
        console.log('countriesList', countriesList)
        return countriesList
    } catch (error) {
        return error
    }
}