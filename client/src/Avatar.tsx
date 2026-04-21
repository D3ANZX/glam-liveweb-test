import { useState } from "react";
import { useEffect } from "react";

import hair1 from "./assets/gingerhair.png";
import hair2 from "./assets/Curlyhair.png";
import hair3 from "./assets/cheerleaderhair.png";
import hair4 from "./assets/ponytail.png";
import hair5 from "./assets/boyhair1.png";
import hair6 from "./assets/90shair.png";
import hair7 from "./assets/rockhair.png";
import hair8 from "./assets/simpleboyhair.png";
import hair9 from "./assets/curlybhair.png";
import hair10 from "./assets/softhair.png";

import eyes1 from "./assets/Cateye.png";
import eyes2 from "./assets/nonchalanteyes.png";
import eyes3 from "./assets/sparklyeyes.png";
import eyes4 from "./assets/bigeyes.png";
import eyes5 from "./assets/sleeplesseyes.png";

import lips1 from "./assets/Lips1.png";
import lips2 from "./assets/confusedlips.png";
import lips3 from "./assets/redlips.png";
import lips4 from "./assets/smilinglips.png";
import lips5 from "./assets/smileysmile.png";
import lips6 from "./assets/tongueout.png";
;

import head1 from "./assets/whitehead.png";
import head2 from "./assets/neutralhead.png";
import head3 from "./assets/brownhead.png";
import head4 from "./assets/blackhead.png";

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
      { img: hair1, price: 0 },
      { img: hair2, price: 0 },
      { img: hair3, price: 0 },
      { img: hair4, price: 0 },
      { img: hair5, price: 0 },
      { img: hair6, price: 0 },
      { img: hair7, price: 0 },
      { img: hair8, price: 0 },
      { img: hair9, price: 0 },
      { img: hair10, price: 0 }

    ],
    eyes: [
      { img: eyes1, price: 0 },
      { img: eyes2, price: 30 },
      { img: eyes3, price: 30 },
      { img: eyes4, price: 30 },
      { img: eyes5, price: 30 },

    ],
    lips: [
      { img: lips1, price: 0 },
      { img: lips2, price: 20 },
      { img: lips3, price: 30 },
      { img: lips4, price: 30 },
      { img: lips5, price: 30 },
      { img: lips6, price: 30 }

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
      <div className="relative -mt-10 w-32 h-40 mx-auto -mb-6">
        <img src={avatar.head} className="absolute w-full h-full z-0" />
        <img src={avatar.hair} className="absolute w-full h-full z-1"  />
        <img src={avatar.eyes} className="absolute w-full h-full z-2"  />
        <img src={avatar.lips} className="absolute w-full h-full z-3"/>
        
      </div>

      {/*CATEGORY BUTTONS */}
      <div className="flex justify-around mb-3 relative z-50">
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
            {part.charAt(0).toUpperCase() + part.slice(1)}
          </button>
        ))}
      </div>

      {/*SHOP ITEMS*/}
      <div className="grid grid-cols-3 gap-2">
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