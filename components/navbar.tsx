"use client";

import Image from "next/image";
import { memo } from "react";

import { NewThread } from "@/components/comments/new-thread";
import { Button } from "@/components/ui/button";
import { ActiveUsers } from "@/components/users/active-users";
import { navElements } from "@/constants";
import type { ActiveElement, NavbarProps } from "@/types/type";

import { ShapesMenu } from "./shapes-menu";
import Link from "next/link";
import { links } from "@/config";

export const Navbar = memo(
  ({
    activeElement,
    imageInputRef,
    handleImageUpload,
    handleActiveElement,
  }: NavbarProps) => {
    const isActive = (value: string | Array<ActiveElement>) =>
      (activeElement && activeElement.value === value) ||
      (Array.isArray(value) &&
        value.some((val) => val?.value === activeElement?.value));

    return (
      <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
        <Image src="/logo.svg" alt="FigPro Logo" width={58} height={20} />

        <ul className="flex flex-row">
          {navElements.map((item: ActiveElement | any) => (
            <li
              key={item.name}
              onClick={() => {
                if (Array.isArray(item.value)) return;
                handleActiveElement(item);
              }}
              className={`group flex items-center justify-center px-2.5 py-5
            ${
              isActive(item.value)
                ? "bg-primary-green"
                : "hover:bg-primary-grey-200"
            }
            `}
            >
              {/* If value is an array means it's a nav element with sub options i.e., dropdown */}
              {Array.isArray(item.value) ? (
                <ShapesMenu
                  item={item}
                  activeElement={activeElement}
                  imageInputRef={imageInputRef}
                  handleActiveElement={handleActiveElement}
                  handleImageUpload={handleImageUpload}
                />
              ) : item?.value === "comments" ? (
                // If value is comments, trigger the NewThread component
                <NewThread>
                  <Button
                    className="relative h-5 w-5 object-contain"
                    title={item.name}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill
                      className={isActive(item.value) ? "invert" : ""}
                    />
                  </Button>
                </NewThread>
              ) : (
                <Button
                  className="relative h-5 w-5 object-contain"
                  title={item.name}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className={isActive(item.value) ? "invert" : ""}
                  />
                </Button>
              )}
            </li>
          ))}
        </ul>

        <div className="flex-row items-center justify-center gap-x-6 md:flex">
          <ActiveUsers />

          <Link
            href={links.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden md:block"
            title="Source Code"
          >
            <Image src="/github.svg" alt="GitHub" height={36} width={36} />
          </Link>
        </div>
      </nav>
    );
  },
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);

Navbar.displayName = "Navbar";
