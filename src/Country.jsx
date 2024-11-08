import React, { useState } from "react";

function Country() {
  const countries = [
    {
      name: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    },
    {
      name: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    },
    {
      name: "United Kingdom",
      cities: ["London", "Birmingham", "Manchester", "Leeds", "Glasgow"],
    },
    {
      name: "South Africa",
      cities: [
        "Johannesburg",
        "Cape Town",
        "Durban",
        "Pretoria",
        "Port Elizabeth",
      ],
    },
  ];

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [citi, setCiti] = useState([]);

  const countryData = (e) => {
    setCountry(e.target.value);
    console.log(e.target.value);

    let result = countries.find((i) => e.target.value === i.name);
    setCiti(result ? result.cities : []);
    setCity(" ");
  };

  const cityData = (e) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <select name="" id="" value={country} onChange={countryData}>
        <option value="">Country</option>

        {countries.map((i) => {
          return (
            <>
              <option key={i.name} value={i.name}>
                {i.name}
              </option>
            </>
          );
        })}
      </select>

      <select name="" id="" value={city} onChange={cityData}>
        <option value="">City</option>

        {citi.map((i) => {
          return (
            <>
              <option key={i} value={i}>
                {i}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
}

export default Country;
