import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">
        This Topic is Tailwind
      </h1>
      <Card text1="vegamovies" text2="Price" num="#335" price="0.111"/>
      <Card text1="themoviesflix" text2="Price" num="#336" price="0.122"/>
    </>
  );
}

export default App;
