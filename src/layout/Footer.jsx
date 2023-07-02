import React, { useState } from "react";
import Items from "../components/items";
import { Suppot, Community, Hosting, Airbnb } from "./menu";
// icons
import {
  GlobeAltIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  const openFooter = () => setShowFooter(true);
  const closeFooter = () => setShowFooter(false);
  return (
    <footer className="bg-white lg:fixed bottom-0 left-0 right-0">
      <div className="flex flex-col">
        <div
          className={`lg:hidden w-full gap-6 sm:px-8 px-5 pt-5 pb-10 rounded-t-lg bg-slate-100 transition`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            <Items Links={Suppot} title="Suppot" />
            <hr />
            <Items Links={Community} title="Community" />
            <hr />
            <Items Links={Hosting} title="Hosting" />
            <hr />
            <Items Links={Airbnb} title="Airbnb" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between border-t-2 py-4 px-4 sm:px-10">
          <div className="flex flex-wrap gap-6 text-sm">
            <span>&copy; 2023 Airbnb, Inc</span>
            <a href="www.google.com">
              <span className="hover:underline duration-75">Terms</span>
            </a>
            <a href="www.google.com">
              <span className="hover:underline duration-75">Sitemap</span>
            </a>
            <a href="www.google.com">
              <span className="hover:underline duration-75">Privacy</span>
            </a>
            <a href="www.google.com">
              <span className="hover:underline duration-75">
                Your privacy choices
              </span>
            </a>
            <a href="www.google.com">
              <span className="hover:underline duration-75">Destinations</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <a
              href="www.google.com"
              className="flex items-center gap-2 font-semibold text-sm"
              items-center
              gap-2
              font-semibold
              text-sm
            >
              <GlobeAltIcon className="h-4 w-5 font-semibold" />
              <span className="hover:underline duration-75"> English (US)</span>
            </a>
            <a
              href="www.google.com"
              className="flex items-center gap-2 font-semibold text-sm"
            >
              <span className="hover:underline duration-75">USD</span>
            </a>
            <button
              onClick={openFooter}
              className="flex items-center gap-2 font-semibold text-sm"
            >
              <span className="hover:underline duration-75">
                Support & resources{" "}
              </span>
              <ChevronUpIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={closeFooter}
        className={`hidden lg:block fixed left-0 right-0 ${
          showFooter ? "top-0" : "top-full"
        } z-30 bg-black/75 ${
          showFooter ? "bottom-0" : "bottom-full"
        } transition`}
      >
        <div className="relative h-full">
          <div
            className={`absolute top-full left-0 ${
              showFooter ? "-translate-y-full" : ""
            } w-full gap-6 sm:px-8 px-5 pt-5 pb-10 rounded-t-lg border boder-2 border-gray-800 bg-white transition`}
          >
            <button onClick={closeFooter}>
              <XMarkIcon className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
              <Items Links={Suppot} title="Suppot" />
              <Items Links={Community} title="Community" />
              <Items Links={Hosting} title="Hosting" />
              <Items Links={Airbnb} title="Airbnb" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
