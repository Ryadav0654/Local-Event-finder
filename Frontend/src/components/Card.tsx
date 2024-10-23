import React, { useState } from "react";
import { IoHeart } from "react-icons/io5";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import card_img from '../assets/card1.jpeg'
import { Link } from "react-router-dom";
const Card = () => {
  const [isActive, setisActive] = useState<Boolean>(false);
  const [Likes, setLikes] = useState<number>(0);

  const handleLikes = () => {
    setLikes(Likes + 1);
  }

  return (
    <div
      className="cursor-pointer w-[350px] mx-auto bg-black text-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
      key={1}
    >
      <div className="relative h-64">
        {card_img && (
          <img
            width="500"
            height="500"
            src={card_img}
            // alt={event.event_title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-2 right-2 z-10">
          <div className="flex flex-col items-center justify-center p-2 ">
            <IoHeart
              onClick={() => handleLikes()}
              className={`h-8 w-8 transition-all duration-300 bg-black rounded-full 
              hover:text-red-500 backdrop-filter backdrop-blur-sm p-1`}
            />
            <span className="text-[14px] font-semibold text-white mt-1">
              {Likes}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-lg font-bold leading-tight text-white">
            {/* {event.event_title} */}
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
      </div>
      <div className="p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <span className="flex gap-3">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
              {/* {event.event_category} */}
              sport
            </span>
            <span
              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                isActive
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {isActive ? "Active" : "Inactive"}
            </span>
          </span>
          <span className="text-sm font-semibold text-yellow-500">
            {/* ${event.event_price} */}
            500
          </span>
        </div>
        <p className="text-xs mb-3 line-clamp-2">
            {/* {event.event_description} */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt unde illo distinctio qui totam nulla aliquid repellat facere non odit! Cumque, consectetur. Nostrum aspernatur labore deserunt eum. Voluptates, consectetur praesentium.
        </p>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs">
            <CalendarIcon className="h-3 w-3" />
            <span className="text-sm font-semibold text-orange-500">
              {new Date(Date.now()).toLocaleString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <MapPinIcon className="h-3 w-3 text-red-500 flex-shrink-0" />
            {/* <span className="truncate max-w-[250px]">
              {event.event_location.length > 50
                ? `${event.event_location.substring(0, 50)}...`
                : event.event_location}
            </span> */}
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <Link to={`/explore-events`}>
          <button className="w-full bg-black border text-teal-500 text-sm font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

