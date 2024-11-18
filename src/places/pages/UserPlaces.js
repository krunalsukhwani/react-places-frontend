import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

import "./UserPlaces.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://farm2.staticflickr.com/1449/24800673529_64272a66ec_z_d.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building added by u2",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://farm2.staticflickr.com/1449/24800673529_64272a66ec_z_d.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
