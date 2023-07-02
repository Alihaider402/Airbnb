import React from "react";
import cardImage from "../assets/pexels-julia-volk-6118469.jpg";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const Card = () => {
  return (
    <div className="relative cursor-pointer">
      <div className="position absolute top-4 right-3">
        <button>
          <HeartIcon className="w-6 h-6 text-white " />
        </button>
      </div>
      <div className="h-[250px]">
        <div className="h-full rounded-xl w-full overflow-hidden">
          <img
            className="max-w-full object-cover"
            src={cardImage}
            alt={cardImage}
          />
        </div>
      </div>
      <div className="flex flex-col  mt-1">
        <div className="flex justify-between">
          <span className="text-base font-semibold">
            East cost of chine city
          </span>
          <span className="flex justify-center items-center gap-2">
            <span>
              <StarIcon className="w-4 h-4" />{" "}
            </span>
            4.83
          </span>
        </div>
        <p className="text-base text-slate-500">Highland Lake</p>
        <p className="text-sm text-slate-500  mb-2">Sep 4-7</p>
        <p className="text-sm font-semibold underline">
          $889 <span className="font-normal">night</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
