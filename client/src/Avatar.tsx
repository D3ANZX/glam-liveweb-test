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

  const [notif, setNotif] = useState("");
  const [selectedPart, setSelectedPart] = useState("hair");  


  const [avatar, setAvatar] = useState({
    hair: hair1,
    eyes: eyes1,
    lips: lips1,
    head: head1
  });
   const saveAvatar = (updatedAvatar) => {
    setAvatar(updatedAvatar);
    localStorage.setItem("avatar", JSON.stringify(updatedAvatar));
    window.dispatchEvent(new Event("avatarUpdated"));
  };

  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const savedCoins = localStorage.getItem("coins");
    if (savedCoins) setCoins(Number(savedCoins));
  }, []);

  const shopItems: any = {
    hair: [
    { img: hair1, 
        price: 1000,
        name: "Ginger Hair",
        desc: "COMMON" },
    { img: hair2, 
        price: 0,
        name: "Curly Plop Hair",
        desc: "RISING STAR"},
    { img: hair3,
      price: 0,
      name: "Cheerleader Hair",
      desc: "COMMON" },
    { img: hair4, 
        price: 0,
        name: "High Ponytail Hair",
        desc: "ICON" },
    { img: hair5,
        price: 0,
        name: "Red Hair",
        desc: "ICON" },
      { img: hair6, 
        price: 0,
        name: "Spiky Hair",
        desc: "COMMON" },
      { img: hair7,
        price: 0,
        name: "Slicked Back Hair",
        desc: "RISING STAR" },
      { img: hair8,
        price: 0,
        name: "Bowl Hair",
        desc: "COMMON" },
      { img: hair9,
        price: 0,
        name: "Messy Hair",
        desc: "ICON" },
      { img: hair10, 
        price: 0,
        name: "Soft Girl Hair",
        desc: "RISING STAR" }

    ],
    eyes: [
      { img: eyes1, 
        price: 0,
        name: "Winged Eyes",
        desc: "beiuwefy." },
      { img: eyes2, 
        price: 0,
        name: "Dreamy Eyes",
        desc: "beiuwefy." },
      { img: eyes3, 
        price: 0,
        name: "Doe Eyes",
        desc: "beiuwefy." },
      { img: eyes4, 
        price: 0,
        name: "Goggly Eyes",
        desc: "beiuwefy." },
      { img: eyes5, 
        price: 0,
        name: "Exhausted Eyes",
        desc: "beiuwefy." },

    ],
    lips: [
      { img: lips1, 
        price: 0,
        name: "Neutral Smile",
        desc: "beiuwefy."},
      { img: lips2, 
        price: 0,
        name: "Side Smile",
        desc: "beiuwefy." },
      { img: lips3, 
        price: 0,
        name: "Red Lips",
        desc: "beiuwefy." },
      { img: lips4, 
        price: 0,
        name: "Wide Smile",
        desc: "beiuwefy." },
      { img: lips5, 
        price: 0,
        name: "Cheery Smile",
        desc: "beiuwefy." },
      { img: lips6, 
        price: 0,
        name: "Tongue Out",
        desc: "beiuwefy." }

    ],
    head: [
      { img: head1,
        price: 0,
        name: "Light Skintone",
        desc: "beiuwefy." },
      { img: head2,
        price: 0,
        name: "Tan Skintone",
        desc: "beiuwefy." },
      { img: head3, 
        price: 0,
        name: "Brown Skintone",
        desc: "beiuwefy." },
      { img: head4, 
        price: 0,
        name: "Black Skintone",
        desc: "beiuwefy." }
    ]
  };

  return (
    <div className="text-white">

      {/*AVATAR PREVIEW*/}
      <div className="relative -mt-10 w-32 h-40 mx-auto -mb-6">
        <img src={avatar.head} className="absolute w-full h-full z-0" />
        <img src={avatar.hair} className="absolute w-full h-full z-1" />
        <img src={avatar.eyes} className="absolute w-full h-full z-2" />
        <img src={avatar.lips} className="absolute w-full h-full z-3"/>
        
      </div>

      {/*CATEGORY BUTTONS */}
      <div className="flex justify-around mb-3 relative z-20">
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

      {/* NOTIFICATION */}
{notif && (
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-75 font-bold bg-red-500 text-white text-xs px-4 py-2 rounded-lg shadow-5xl z-4 animate-bounce">
  {notif}
  </div>
)}

      {/*SHOP ITEMS*/}
      <div className="grid grid-cols-3 gap-2">
        {shopItems[selectedPart].map((item: any, index: number) => (
          <div
            key={index}
            onClick={() => {

  const isLocked = coins < item.price;

  if (isLocked) {
    setNotif("NOT ENOUGH COINS!");
    setTimeout(() => setNotif(""), 1000);
    return;
  }

  // AVATAR UPDATE (CLEAN)
  const updatedAvatar = {
    ...avatar,
    [selectedPart]: item.img
  };

  setAvatar(updatedAvatar);
  localStorage.setItem("avatar", JSON.stringify(updatedAvatar));
  window.dispatchEvent(new Event("avatarUpdated"));

  // COINS UPDATE
  const newCoins = item.price > 0
    ? coins - item.price
    : coins;

  setCoins(newCoins);
  localStorage.setItem("coins", newCoins.toString());
  window.dispatchEvent(new Event("coinsUpdated"));
}}
            className="bg-white p-2 rounded cursor-pointer hover:scale-105 transition"
          >
            <img src={item.img} alt="" className="w-full" />
  <div className="text-center -mt-5">
  <p className="text-black text-xs font-bold">{item.name}</p>
  <p className="text-gray-600 text-[10px]">{item.desc}</p>
  <p className="text-yellow-600 text-[11px] font-semibold mt-1">
  {item.price === 0 ? "FREE" : `${item.price} coins`}
  </p>
</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Avatar;