import { NextResponse } from "next/server";
import { getJWT, setJWT } from "./lib/session";

export default async function middleware(req) {
  const path = req.nextUrl.pathname;

  const session = await getJWT();

  if (path.startsWith("/api")) {
    const header = req.headers.get("x-pineapple");
    const cookie = await req.cookies.get("pizza");

    if (!session || !header || !cookie || header !== cookie.value) return NextResponse.json({
      error: "Invalid authorization token."
    }, { status: 403 });

    return NextResponse.next();
  } else {
    if (!session) await setJWT();

    return NextResponse.next();
  }
}