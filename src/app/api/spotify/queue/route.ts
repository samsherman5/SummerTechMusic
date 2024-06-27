import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/auth";
import getQueue from "@/lib/fetch/getQueue";
import isAdminSession from "@/lib/isAdminSession";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("code");

  if (query && query === process.env.NEXT_EVENTS_KEY) {
    const queue = await getQueue();
    return NextResponse.json(queue);
  } else {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!isAdminSession(session)) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const queue = await getQueue();
    return NextResponse.json(queue);
  }
}
