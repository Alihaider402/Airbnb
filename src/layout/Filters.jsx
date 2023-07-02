import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import LakeIcon from "../assets/home.jpg";
import RoomsIcon from "../assets/room.jpg";
import CabinsIcon from "../assets/cabins.jpg";
import ViewsIcon from "../assets/Views.jpg";
import PianoIcon from "../assets/pianos.jpg";
import PlayIcon from "../assets/plays.jpg";
import PoolsIcon from "../assets/pools.jpg";
import BeachIcon from "../assets/beach.jpg";
import MansionsIcon from "../assets/mansions.jpg";
import TinyHomeIcon from "../assets/tiny homes.jpg";
import OmgIcon from "../assets/OMG.jpg";
import TrendingIcon from "../assets/trending.jpg";
import BoatsIcon from "../assets/boats.jpg";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

const filters = [
  {
    icon: LakeIcon,
    title: "LakeFront",
  },
  {
    icon: RoomsIcon,
    title: "Rooms",
  },
  {
    icon: CabinsIcon,
    title: "Cabins",
  },
  {
    icon: ViewsIcon,
    title: "Amazing views",
  },
  {
    icon: PianoIcon,
    title: "Grand pianos",
  },
  {
    icon: PlayIcon,
    title: "Play",
  },
  {
    icon: BeachIcon,
    title: "Beachfront",
  },
  {
    icon: MansionsIcon,
    title: "Mansions",
  },
  {
    icon: TinyHomeIcon,
    title: "Tiny homes",
  },
  {
    icon: TrendingIcon,
    title: "Trending",
  },
  {
    icon: OmgIcon,
    title: "OMG!",
  },
  {
    icon: BoatsIcon,
    title: "Boats",
  },

  {
    icon: PoolsIcon,
    title: "Amazing pools",
  },
];

const Filters = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      centerMode={false}
      draggable
      focusOnSelect={false}
      infinite={false}
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      responsive={{
        mobile: {
          breakpoint: {
            max: 600,
            min: 0,
          },
          items: 4,
          partialVisibilityGutter: 10,
        },
        tablet: {
          breakpoint: {
            max: 900,
            min: 600,
          },
          items: 8,
          partialVisibilityGutter: 10,
        },
        desktop: {
          breakpoint: {
            max: 1560,
            min: 900,
          },
          items: 13,
          partialVisibilityGutter: 30,
        },
      }}
    >
      {filters.map((item) => {
        return <Item key={item.title} icon={item.icon} title={item.title} />;
      })}
    </Carousel>
  );
};

const Item = ({ icon, title }) => {
  return (
    <li className="pb-1 booder border-b-2 whitespace-nowrap border-transparent w-14 hover:border-slate-900">
      <a className="flex flex-col items-center gap-1" href="www.facebook.com">
        <span>
          <img src={icon} alt={title} className="h-6 w-6" />
        </span>
        <span>
          <p className="font-semibold text-xs">{title}</p>
        </span>
      </a>
    </li>
  );
};
export default Filters;
