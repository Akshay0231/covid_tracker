import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { getCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [countriesList, setCountriesList] = useState(["Global"]);

  useEffect(() => {
    const fetchCountries = async () => {
      // console.log(await getCountries());
      setCountriesList(await getCountries());
    };

    fetchCountries();
    // console.log("listttt", countriesList);
  }, []);

  return (
    <div>
      {countriesList.length ? (
        <FormControl className={styles.formControl}>
          <NativeSelect
            defaultValue=""
            onChange={(event) => handleCountryChange(event.target.value)}
            // className={styles.nativeSelect}
          >
            <option value="global">Global</option>
            {countriesList.map((country, index) => {
              return (
                <option key={index} value={country.countryName}>
                  {country.countryName}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      ) : null}
    </div>
  );
};

export default CountryPicker;
