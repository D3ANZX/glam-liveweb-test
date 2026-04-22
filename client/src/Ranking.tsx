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
    description: "The basic entry-level title.",
    details: "This is the entry-level stage where a performer gets their first professional credit. You have officially entered the industry! Earn this by completing the first 20 quiz and start your Hollywood journey."
  },
    {
    name: "LEAD ACTOR AWARD",
    badge: leadactor2f,
    description: "Main star of the GLAM!",
    details: "You are now carrying the show. Achieve this by completing 50 quiz."
  },
   {
    name: "RISING STAR AWARD",
    badge: risingactor2f,
    description: "A new, popular rising star.",
    details: "You are the talk of the town! Secure this rank by completing 120 quiz and prove your consistent talent."
  },
   {
    name: "EMMY AWARDS",
    badge: emmyaward2f,
    description: "Best honor for GLAM quiz.",
    details: "You have mastered the small screen! Win this by completing 180 quiz correctly. You are now making it in Television category!"
  },
   {
    name: "GRAMMY NOMINEE",
    badge: grammynominee3f,
    description: "Honorable mention. ",
    details: "You are among the elite. Earn your nomination by breaking the 200 quiz!"
  },
   {
    name: "GRAMMY AWARD HOLDER",
    badge: grammyholder2f,
    description: "Elite achievement of GLAM!",
    details: "You are a true legend! Obtain this by completing the 300 quiz. You are probably a part of Hollywood! Your GLAM Team is proud of you!"
  },
];
  return (
    <div className="flex flex-col gap-3 w-74">
      {ranks.map((rank, index) => (
        <div key={index} className="bg-gray-800 p-2 rounded-lg">

          <div className="flex justify-between items-center">

            <div className="flex gap-3 items-center">
              <img src={rank.badge} className="w-12 h-15" />

              <div className="flex flex-col text-left leading-tight w-40">
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

            <div
  className={`transition-all duration-300 overflow-hidden ${
    openIndex === index ? "max-h-20 mt-1 pt-2 border-t" : "max-h-0"
  }`}
>
  <p className="text-xs">{rank.details}</p>
</div>

        </div>
      ))}
    </div>
  );
}

export default Ranking;