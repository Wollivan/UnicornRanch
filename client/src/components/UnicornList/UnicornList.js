import React, { useState, useEffect } from "react";
import UnicornListItem from "../UnicornListItem/UnicornListItem";
import "./UnicornList.scss";
import { UNICORNS_API } from "../../utils/api";
import axios from "axios";

export default function UnicornList() {
  const [unicornData, setUnicornData] = useState([]);

  useEffect(() => {
    console.log("test");
    getUnicornList();
  }, []);

  const getUnicornList = () => {
    axios
      .get(UNICORNS_API)
      .then((response) => {
        setUnicornData(response.data);
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the player list data: ",
          err
        )
      );
  };

  const handleChangeLocation = (e, id) => {
    e.preventDefault();

    axios.put(`${UNICORNS_API}/${id}`, { location: e.target.value }).catch();

    const newArr = unicornData.map((unicorn) => {
      if (unicorn.id == id) {
        unicorn.location = e.target.value;
      }
      return unicorn;
    });
    console.log(newArr);
    setUnicornData(newArr);
  };

  if (unicornData) {
    return (
      <div className="unicorn-list">
        {unicornData.map((unicorn) => {
          return (
            <UnicornListItem
              id={unicorn.id}
              name={unicorn.name}
              food={unicorn.food}
              colors={unicorn.colors}
              location={unicorn.location}
              handleChangeLocation={handleChangeLocation}
            />
          );
        })}
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}
