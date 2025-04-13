import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Model from "./Components/Model";
import * as Sentry from "@sentry/react";
const App = () => {
  return (
    <button
      onClick={() => {
        throw new Error("This is your first error!");
      }}
    >
      Break the world
    </button>
    // <main className="bg-black">
    //   <Navbar />
    //   <Hero />
    //   <Highlights />
    //   <Model />
    // </main>
  );
};

export default Sentry.withProfiler(App);
