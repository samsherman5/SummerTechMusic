import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import getQueue from "@/lib/fetch/getQueue";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("code");
  console.log(query);
  console.log(process.env.NEXT_EVENTS_KEY);

  if (query && query === process.env.NEXT_EVENTS_KEY) {
    const queue = await getQueue();
    return NextResponse.json(queue);
  }
}
