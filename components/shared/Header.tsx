"use client"
import { SignedOut } from "@clerk/clerk-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="flex">
          <Image
            src={"/assets/images/logo.svg"}
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items-center justify-end">
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNavItems />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
