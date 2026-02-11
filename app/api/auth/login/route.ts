import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password required" },
        { status: 400 },
      );
    }

    const response = await fetch(
      "https://dummyjson.com/auth/login?expiresInMins=60",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    const data = await response.json();

    const res = NextResponse.json({ success: true });

    res.cookies.set({
      name: "token",
      value: data.token,
      httpOnly: true,
      secure: true, // IMPORTANT for Vercel
      sameSite: "none", // IMPORTANT
      path: "/",
      maxAge: 60 * 60,
    });

    return res;
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

// username: emilys
// password: emilyspass
