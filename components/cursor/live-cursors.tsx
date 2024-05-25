import { COLORS } from "@/constants";
import type { LiveCursorProps } from "@/types/type";

import { Cursor } from "./cursor";

export const LiveCursors = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {
    if (!presence || !presence?.cursor) return;

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    );
  });
};
