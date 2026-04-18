import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/",
  "/dashboard",
  "/clients",
  "/bookings",
  "/concepts",
  "/staffs",
  "/finances",
  "/profile",
];

const publicRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("access_token")?.value;

  const isProtected = protectedRoutes.some((route) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route),
  );
  const isPublicRoute = publicRoutes.some((route) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route),
  );

  if (!accessToken && isProtected) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (accessToken && isPublicRoute) {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  const response = NextResponse.next();

  return response;
}

// Chỉ định middleware chạy trên những đường dẫn nào.
// Loại trừ các file tĩnh, api, hình ảnh...
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};
