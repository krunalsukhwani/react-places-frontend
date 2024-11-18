import React from "react";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceList.css";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {

  //if there are no places then we'll display No places found
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  //if we have list of places and then we'll send place information one by one to the PlaceItem component
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
