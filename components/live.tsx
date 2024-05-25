import { useCallback } from "react";

import { LiveCursors } from "@/components/cursor/live-cursors";
import { useMyPresence, useOthers } from "@/liveblocks.config";

export const Live = () => {
  const others = useOthers();
  const [myPresence, updatedMyPresence] = useMyPresence();

  const { cursor } = myPresence as {
    cursor: {
      x: number;
      y: number;
    };
  };

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();

      const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
      const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

      updatedMyPresence({
        cursor: { x, y },
      });
    },
    [updatedMyPresence]
  );

  const handlePointerLeave = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();

      updatedMyPresence({
        cursor: null,
        message: null,
      });
    },
    [updatedMyPresence]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
      const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

      updatedMyPresence({
        cursor: { x, y },
      });
    },
    [updatedMyPresence]
  );

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className="h-screen w-full flex justify-center items-center text-center"
    >
      <LiveCursors others={others} />
      <h1 className="text-4xl text-white">Hello, world!</h1>;
    </div>
  );
};
