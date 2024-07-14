"use client";

import { LatLngExpression, LatLngTuple } from "leaflet";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

export default function Client() {
  const [ll, setLL] = useState<LatLngTuple>([13.08268, 80.270721]);

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
        <DynamicMap latlng={[ll, setLL]} />
      </section>

      <section className="flex w-full flex-col md:flex-row md:justify-between mt-5 space-y-3 md:space-y-0">
        <div>
          <h1 className="text-left text-3xl font-bold font-mono">
            Latitude: {ll[0]}
          </h1>
          <h1 className="text-left text-3xl font-bold font-mono">
            Longitude: {ll[1]}
          </h1>
        </div>
        <button
          onClick={() => pinLoc()}
          className="text-2xl max-w-28 px-5 py-2 bg-black text-white hover:bg-white hover:text-black border border-black font-mono"
        >
          PIN
        </button>
      </section>
    </main>
  );
}
