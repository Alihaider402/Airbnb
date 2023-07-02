import React from "react";
import Navbar from "./layout/Nav";
import Card from "./components/Card";
import Filters from "./layout/Filters";
import PriceSwitcher from "./layout/PriceSwitcher";
import Footer from "./layout/Footer";

// icons
import { MapIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-2 pb-[60px] sm:px-3 lg:px-6 my-8">
        <Filters />
        <div className="py-7 flex justify-center">
          <PriceSwitcher />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          ].map((item) => {
            return <Card key={item} />;
          })}
        </div>
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2">
          <button className="flex items-center gap-1 bg-[#222222] text-white py-[14px] px-[19px] rounded-full hover:scale-105 transition-all">
            <span className="text-sm font-semibold">Show map</span>
            <MapIcon className="h-5 w-5" />
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
