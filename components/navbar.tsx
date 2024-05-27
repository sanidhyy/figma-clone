"use client";

import Image from "next/image";
import { memo } from "react";

import { ActiveUsers } from "@/components/users/active-users";
import type { NavbarProps } from "@/types/type";

export const Navbar = memo(
  ({
    activeElement,
    imageInputRef,
    handleImageUpload,
    handleActiveElement,
  }: NavbarProps) => {
    /*  const isActive = (value: string | Array<ActiveElement>) =>
      (activeElement && activeElement.value === value) ||
      (Array.isArray(value) &&
        value.some((val) => val?.value === activeElement?.value)); */

    return (
      <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
        <Image src="/logo.svg" alt="FigPro Logo" width={58} height={20} />

        {/* SOMETHING HERE */}

        <ActiveUsers />
      </nav>
    );
  },
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);

Navbar.displayName = "Navbar";
