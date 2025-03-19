"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  const routes = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:gap-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === route.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex md:items-center md:gap-4">
        <ThemeSwitcher />
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              {session?.user?.role === "admin" && (
                <DropdownMenuItem asChild>
                  <Link href="/admin">Admin Dashboard</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-red-600 cursor-pointer"
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button variant="outline" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign up</Link>
            </Button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="pl-8 pt-2" href="/">
            <Logo />
          </Link>
          <nav className="flex flex-col gap-4  px-4 py-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex justify-center mb-2">
                <ThemeSwitcher />
              </div>
              {isAuthenticated ? (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                      Dashboard
                    </Link>
                  </Button>
                  {session?.user?.role === "admin" && (
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/admin" onClick={() => setIsOpen(false)}>
                        Admin Dashboard
                      </Link>
                    </Button>
                  )}
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Log in
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      Sign up
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
