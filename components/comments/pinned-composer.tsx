"use client";

import { Composer, ComposerProps } from "@liveblocks/react-comments";
import Image from "next/image";

type PinnedComposerProps = {
  onComposerSubmit: ComposerProps["onComposerSubmit"];
};

export const PinnedComposer = ({
  onComposerSubmit,
  ...props
}: PinnedComposerProps) => {
  return (
    <div className="absolute flex gap-4" {...props}>
      <div className="relative flex h-9 w-9 select-none items-center justify-center rounded-bl-full rounded-br-full rounded-tl-md rounded-tr-full bg-white shadow">
        <Image
          src={`https://liveblocks.io/avatars/avatar-${Math.floor(
            Math.random() * 30
          )}.png`}
          alt="someone"
          width={28}
          height={28}
          className="rounded-full"
        />
      </div>
      <div className="flex min-w-96 flex-col overflow-hidden rounded-lg bg-white p-2 text-sm shadow">
        {/**
         * We're using the Composer component to create a new comment.
         * Liveblocks provides a Composer component that allows to
         * create/edit/delete comments.
         *
         * Composer: https://liveblocks.io/docs/api-reference/liveblocks-react-comments#Composer
         */}
        <Composer
          onComposerSubmit={onComposerSubmit}
          autoFocus={true}
          onKeyUp={(e) => {
            e.stopPropagation();
          }}
        />
      </div>
    </div>
  );
};
