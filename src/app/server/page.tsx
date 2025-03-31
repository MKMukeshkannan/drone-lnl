"use client";

import { pusherClient } from "@/lib/pusher";
import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";

export default function Server() {
  const [ll, setLL] = useState<LatLngTuple>([0, 0]);

  useEffect(() => {
    pusherClient.subscribe("event");
    pusherClient.bind("setLL", (new_ll: LatLngTuple) => setLL(new_ll));
    return () => {
      pusherClient.unsubscribe("event");
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center flex-col justify-center p-24 space-x-5">
      <h1 className="text-left text-3xl font-bold font-mono">Latitude</h1>
      <h1 className="text-left text-xl md:text-5xl font-bold font-mono">{ll[0]}</h1>
      <h1 className="text-left text-3xl font-bold font-mono mt-10">Longitude</h1>
      <h1 className="text-left text-xl md:text-5xl font-bold font-mono">{ll[1]}</h1>
      <a  href="/qr" className="py-2 px-5 bg-black text-white mt-10 rounded-md" >NEXT</a>
    </main>
  );
}
