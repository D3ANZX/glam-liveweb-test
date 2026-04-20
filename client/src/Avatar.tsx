import { useState } from "react";

import hair1 from "./assets/Hair1.png";

import eyes1 from "./assets/Headwite.png";
import eyes2 from "./assets/Headwite.png";

import lips1 from "./assets/Headwite.png";
import lips2 from "./assets/Headwite.png";

import head1 from "./assets/Headwite.png";
import head2 from "./assets/Headneutral.png";
import head3 from "./assets/Headbrown.png";
import head4 from "./assets/Headblck.png";

function Avatar() {

  const [selectedPart, setSelectedPart] = useState("hair");

  const [avatar, setAvatar] = useState({
    hair: hair1,
    eyes: eyes1,
    lips: lips1,
    head: head1
  });

  const shopItems: any = {
    hair: [
      { img: hair1, price: 0 }
    ],
    eyes: [
      { img: eyes1, price: 0 },
      { img: eyes2, price: 30 }
    ],
    lips: [
      { img: lips1, price: 0 },
      { img: lips2, price: 20 }
    ],
    head: [
      { img: head1, price: 0 },
      { img: head2, price: 0 },
      { img: head3, price: 0 },
      { img: head4, price: 0 }
    ]
  };

  return (
    <div className="text-white">

      {/*AVATAR PREVIEW*/}
      <div className="relative w-9 h-13 mx-auto mb-3">
        <img src={avatar.head} className="absolute w-full h-full" />
        <img src={avatar.eyes} className="absolute w-full h-full" />
        <img src={avatar.lips} className="absolute w-full h-full" />
        <img src={avatar.hair} className="absolute w-full h-full" />
      </div>

      {/*CATEGORY BUTTONS */}
      <div className="flex justify-around mb-3">
        {["hair", "eyes", "lips", "head"].map((part) => (
          <button
            key={part}
            onClick={() => setSelectedPart(part)}
            className={`px-6 py-1 rounded text-xs ${
              selectedPart === part
                ? "bg-yellow-400 text-black"
                : "bg-gray-700"
            }`}
          >
            {part}
          </button>
        ))}
      </div>

      {/*SHOP ITEMS*/}
      <div className="grid grid-cols-6 gap-2">
        {shopItems[selectedPart].map((item: any, index: number) => (
          <div
            key={index}
            onClick={() =>
              setAvatar({
                ...avatar,
                [selectedPart]: item.img
              })
            }
            className="bg-white p-2 rounded cursor-pointer hover:scale-105 transition"
          >
            <img src={item.img} alt="" className="w-full" />
            <p className="text-black text-xs text-center mt-1">
              {item.price} coins
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Avatar;