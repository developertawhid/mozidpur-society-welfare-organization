import Link from "next/link";
import { Logo } from "./logo";
import NaveBar from "./nav-bar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        <NaveBar />
      </div>
    </header>
  );
}
