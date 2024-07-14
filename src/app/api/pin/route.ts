import { pusherServer } from "@/lib/pusher";

interface LatitudeNLongitude {
  latitude: string;
  longitude: string;
}

export async function POST(req: Request) {
  const ll: LatitudeNLongitude = await req.json();
  console.log(ll)

  pusherServer.trigger("event", "setLL", ll);

  return new Response(JSON.stringify({ success: true }));
}
