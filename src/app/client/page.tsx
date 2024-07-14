"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

interface LatitudeNLongitude {
  latitude: string;
  longitude: string;
}

const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

export default function Client() {
  const [ll, setLL] = useState<LatitudeNLongitude>({
    longitude: "0",
    latitude: "0",
  });

  const pinLoc = async () => {
    await fetch("/api/pin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ll),
    });
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-5 md:p-10 xl:p-24 space-x-5 md:space-x-0">
      <section className="w-full h-[300px] overflow-hidden">
        <DynamicMap />
      </section>

      <section className="flex w-full flex-col md:flex-row md:justify-between mt-5 space-y-3 md:space-y-0">
        <div>
          <h1 className="text-left text-3xl font-bold font-mono">
            Latitude: {ll.latitude}
          </h1>
          <h1 className="text-left text-3xl font-bold font-mono">
            Longitude: {ll.longitude}
          </h1>
        </div>
        <button
          onClick={() => pinLoc()}
          className="text-2xl max-w-28 px-5 py-2 bg-black text-white hover:bg-white hover:text-black border border-black font-mono"
        >
          PIN
        </button>
        <button
          onClick={() => {
            setLL({ latitude: makeid(5), longitude: makeid(5) });
          }}
          className="text-2xl max-w-28 px-5 py-2 bg-black text-white hover:bg-white hover:text-black border border-black font-mono"
        >
          INC
        </button>
      </section>
    </main>
  );
}

function makeid(length: number) {
  let result = "";
  const characters = "EW0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
