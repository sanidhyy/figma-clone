import { useCallback, useEffect, useState } from "react";

import { Comments } from "@/components/comments/comments";
import { CursorChat } from "@/components/cursor/cursor-chat";
import { LiveCursors } from "@/components/cursor/live-cursors";
import { FlyingReaction } from "@/components/reaction/flying-reaction";
import { ReactionSelector } from "@/components/reaction/reaction-button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { shortcuts } from "@/constants";
import { useInterval } from "@/hooks/use-interval";
import {
  useBroadcastEvent,
  useEventListener,
  useMyPresence,
} from "@/liveblocks.config";
import { CursorMode, type Reaction, type CursorState } from "@/types/type";

type LiveProps = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  undo: () => void;
  redo: () => void;
};

export const Live = ({ canvasRef, undo, redo }: LiveProps) => {
  const broadcast = useBroadcastEvent();
  const [{ cursor }, updateMyPresence] = useMyPresence();

  const [reaction, setReaction] = useState<Reaction[]>([]);
  const [cursorState, setCursorState] = useState<CursorState>({
    mode: CursorMode.Hidden,
  });

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

  const handleContextMenuClick = useCallback(
    (key: string) => {
      switch (key) {
        case "Chat":
          setCursorState({
            mode: CursorMode.Chat,
            previousMessage: null,
            message: "",
          });

          break;
        case "Undo":
          undo();
          break;
        case "Redo":
          redo();
          break;
        case "Reactions":
          setCursorState({
            mode: CursorMode.ReactionSelector,
          });
          break;
        default:
          break;
      }
    },
    [redo, undo]
  );

  useEventListener((eventData) => {
    const event = eventData.event;

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
    <ContextMenu>
      <ContextMenuTrigger
        id="canvas"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="relative flex h-full w-full flex-1 items-center justify-center"
      >
        <canvas ref={canvasRef} />

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

        <LiveCursors />

        <Comments />
      </ContextMenuTrigger>

      <ContextMenuContent className="right-menu-content">
        {shortcuts.map((shortcut) => (
          <ContextMenuItem
            key={shortcut.key}
            onClick={() => handleContextMenuClick(shortcut.name)}
            className="right-menu-item"
          >
            <p>{shortcut.name}</p>
            <p className="text-xs text-primary-grey-300">{shortcut.shortcut}</p>
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};
