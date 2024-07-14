"use client";

import { pusherClient } from "@/lib/pusher";
import { useEffect, useState } from "react";

interface LatitudeNLongitude {
  latitude: string;
  longitude: string;
}

export default function Server() {
  const [ll, setLL] = useState<LatitudeNLongitude>({
    longitude: "0",
    latitude: "0",
  });

  useEffect(() => {
    pusherClient.subscribe("event");
    pusherClient.bind("setLL", (new_ll: LatitudeNLongitude) => setLL(new_ll));
    return () => {
      pusherClient.unsubscribe("event");
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center flex-col justify-center p-24 space-x-5">
      <h1 className="text-left text-3xl font-bold font-mono">
        Latitude: {ll?.latitude}
      </h1>
      <h1 className="text-left text-3xl font-bold font-mono">
        Longitude: {ll?.longitude}
      </h1>
    </main>
  );
}
