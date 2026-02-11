import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
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
      secure: false, // VERY IMPORTANT in localhost
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    return res;
  } catch (err: unknown) {
    console.error("LOGIN ERROR:", err);

    let message = "Something went wrong";

    if (err instanceof Error) {
      message = err.message;
    }

    return NextResponse.json({ message }, { status: 500 });
  }
}

// username: emilys
// password: emilyspass
