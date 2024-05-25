"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import type { PropsWithChildren } from "react";

import { RoomProvider } from "@/liveblocks.config";

export const Room = ({ children }: PropsWithChildren) => {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
