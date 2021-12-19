import React, { ReactElement } from "react";
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";

interface Props {
  rating: number;
}

export default function Rating({ rating }: Props): ReactElement {
  //Rating can be whole number, or half number
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1;
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);
  return (
    <div className="flex flex-row flex-wrap text-yellow-500 ">
      {Array.from(Array(fullStars)).map((_, i) => (
        <ImStarFull key={i} />
      ))}
      {halfStars ? <ImStarHalf key={fullStars} /> : ""}
      {Array.from(Array(emptyStars)).map((_, i) => (
        <ImStarEmpty key={i} />
      ))}
    </div>
  );
}
