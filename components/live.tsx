import { useCallback, useEffect, useState } from "react";

import { CursorChat } from "@/components/cursor/cursor-chat";
import { LiveCursors } from "@/components/cursor/live-cursors";
import { FlyingReaction } from "@/components/reaction/flying-reaction";
import { ReactionSelector } from "@/components/reaction/reaction-button";
import useInterval from "@/hooks/useInterval";
import {
  useBroadcastEvent,
  useEventListener,
  useMyPresence,
  useOthers,
} from "@/liveblocks.config";
import {
  CursorMode,
  type Reaction,
  type CursorState,
  type ReactionEvent,
} from "@/types/type";

export const Live = () => {
  const others = useOthers();
  const broadcast = useBroadcastEvent();
  const [myPresence, updateMyPresence] = useMyPresence();

  const [reaction, setReaction] = useState<Reaction[]>([]);
  const [cursorState, setCursorState] = useState<CursorState>({
    mode: CursorMode.Hidden,
  });

  const { cursor } = myPresence as {
    cursor: {
      x: number;
      y: number;
    };
  };

  useInterval(() => {
    setReaction((reaction) => {
      return reaction.filter((react) => react.timestamp > Date.now() - 4000);
    });
  }, 1000);

  useInterval(() => {
    if (
      cursor &&
      cursorState.mode === CursorMode.Reaction &&
      cursorState.isPressed
    ) {
      setReaction((prevReaction) => {
        return prevReaction.concat([
          {
            point: { x: cursor.x, y: cursor.y },
            value: cursorState.reaction,
            timestamp: Date.now(),
          },
        ]);
      });

      broadcast({
        x: cursor.x,
        y: cursor.y,
        value: cursorState.reaction,
      });
    }
  }, 100);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();

      if (cursor === null || cursorState.mode !== CursorMode.ReactionSelector) {
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

        updateMyPresence({
          cursor: { x, y },
        });
      }
    },
    [cursor, cursorState.mode, updateMyPresence]
  );

  const handlePointerLeave = useCallback(
    (_e: React.PointerEvent) => {
      setCursorState({ mode: CursorMode.Hidden });

      updateMyPresence({
        cursor: null,
        message: null,
      });
    },
    [updateMyPresence]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
      const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

      updateMyPresence({
        cursor: { x, y },
      });

      setCursorState((prevCursorState) => {
        if (prevCursorState.mode === CursorMode.Reaction) {
          return { ...prevCursorState, isPressed: true };
        } else {
          return prevCursorState;
        }
      });
    },
    [updateMyPresence]
  );

  const handlePointerUp = useCallback(
    (_e: React.PointerEvent) => {
      setCursorState((prevCursorState) => {
        if (prevCursorState.mode === CursorMode.Reaction) {
          return { ...prevCursorState, isPressed: true };
        } else {
          return prevCursorState;
        }
      });
    },
    [setCursorState]
  );

  const setReactions = useCallback((reaction: string) => {
    setCursorState({
      mode: CursorMode.Reaction,
      reaction,
      isPressed: false,
    });
  }, []);

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "/") {
        setCursorState({
          mode: CursorMode.Chat,
          previousMessage: "",
          message: "",
        });
      }

      if (e.key === "Escape") {
        updateMyPresence({ message: "" });
        setCursorState({ mode: CursorMode.Hidden });
      }

      if (e.key === "e" || e.key === "E") {
        setCursorState({
          mode: CursorMode.ReactionSelector,
        });
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
      }
    };

    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [updateMyPresence]);

  useEventListener((eventData) => {
    const event = eventData.event as ReactionEvent;

    setReaction((prevReaction) => {
      return prevReaction.concat([
        {
          point: { x: event.x, y: event.y },
          value: event.value,
          timestamp: Date.now(),
        },
      ]);
    });
  });

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className="h-screen w-full flex justify-center items-center text-center"
    >
      {cursor && (
        <CursorChat
          cursor={cursor}
          cursorState={cursorState}
          setCursorState={setCursorState}
          updateMyPresence={updateMyPresence}
        />
      )}
      {cursorState.mode === CursorMode.ReactionSelector && (
        <ReactionSelector setReaction={setReactions} />
      )}
      {reaction.map((react) => (
        <FlyingReaction
          key={react.timestamp.toString()}
          x={react.point.x}
          y={react.point.y}
          timestamp={react.timestamp}
          value={react.value}
        />
      ))}
      <LiveCursors others={others} />
      <h1 className="text-4xl text-white">Hello, world!</h1>;
    </div>
  );
};
