import { useState } from "react";
import leadactor2f from "./assets/ranking/leadactor2f.png";
import actor2f from "./assets/ranking/actor2f.png";
import emmyaward2f from "./assets/ranking/emmyaward2f.png";
import grammyholder2f from "./assets/ranking/grammyholder2f.png";
import grammynominee3f from "./assets/ranking/grammynominee3f.png";
import risingactor2f from "./assets/ranking/risingactor2f.png";

function Ranking() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const ranks = [
    {
    name: "ACTOR AWARD",
    badge: actor2f,
    description: "A beginner award.",
    details: "must win level ....."
  },
    {
    name: "LEAD ACTOR AWARD",
    badge: leadactor2f,
    description: "meow",
    details: "must win level ....."
  },
   {
    name: "RISING STAR AWARD",
    badge: risingactor2f,
    description: "meow",
    details: "must win level ....."
  },
   {
    name: "EMMY AWARDS",
    badge: emmyaward2f,
    description: "meow",
    details: "must win level ....."
  },
   {
    name: "GRAMMY NOMINEE",
    badge: grammynominee3f,
    description: "meow",
    details: "must win level ....."
  },
   {
    name: "GRAMMY AWARD HOLDER",
    badge: grammyholder2f,
    description: "meow",
    details: "must win level ....."
  },
];
  return (
    <div className="flex flex-col gap-3 w-72">
      {ranks.map((rank, index) => (
        <div key={index} className="bg-gray-800 p-2 rounded-lg">

          <div className="flex justify-between items-center">

            <div className="flex gap-3 items-center">
              <img src={rank.badge} className="w-12 h-15" />

              <div className="flex flex-col text-left leading-tight">
                <h2>{rank.name}</h2>
                <p className="text-xs mt-1">{rank.description}</p>
              </div>
            </div>

            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="text-yellow-400 text-xs"
            >
              {openIndex === index ? "Hide" : "Know More"}
            </button>
          </div>

          {openIndex === index && (
            <div className="mt-1 text-xs border-t pt-2">
              {rank.details}
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default Ranking;