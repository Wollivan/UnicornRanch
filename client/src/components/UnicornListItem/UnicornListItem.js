import React from "react";

export default function UnicornListItem({
  id,
  name,
  food,
  colors,
  location,
  handleChangeLocation,
}) {
  const getLocation = () => {
    return (
      <div className="unicorn-list__item-location-wrap">
        <button
          value="Barn"
          onClick={(e) => handleChangeLocation(e, id)}
          className={`unicorn-list__item-location-wrap-item ${
            location == "Barn" ? "active" : ""
          }`}
        >
          Barn
        </button>
        <button
          value="Trails"
          onClick={(e) => handleChangeLocation(e, id)}
          className={`unicorn-list__item-location-wrap-item ${
            location == "Trails" ? "active" : ""
          }`}
        >
          Trails
        </button>
        <button
          value="Pasture"
          onClick={(e) => handleChangeLocation(e, id)}
          className={`unicorn-list__item-location-wrap-item ${
            location == "Pasture" ? "active" : ""
          }`}
        >
          Pasture
        </button>
      </div>
    );
  };

  return (
    <div className="unicorn-list__item" key={id.toString()}>
      <h3 className="unicorn-list__name">{name}</h3>
      <p className="unicorn-list__food">Fav. food: {food}</p>
      <p className="unicorn-list__colors">Colors: {colors}</p>
      <p className="unicorn-list__location">Location: {getLocation()}</p>
    </div>
  );
}
