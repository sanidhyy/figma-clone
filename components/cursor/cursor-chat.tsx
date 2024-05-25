import CursorSVG from "@/public/cursor-svg";
import { CursorMode, type CursorChatProps } from "@/types/type";

export const CursorChat = ({
  cursor,
  cursorState,
  setCursorState,
  updateMyPresence,
}: CursorChatProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: e.target.value });
    setCursorState({
      mode: CursorMode.Chat,
      previousMessage: null,
      message: e.target.value,
    });
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (cursorState.mode === CursorMode.Chat) {
        setCursorState({
          mode: CursorMode.Chat,
          previousMessage: cursorState.message,
          message: "",
        });
      }
    }

    if (e.key === "Escape") {
      setCursorState({
        mode: CursorMode.Hidden,
      });
    }
  };

  return (
    <div
      className="absolute top-0 left-0"
      style={{
        transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`,
      }}
    >
      {cursorState.mode === CursorMode.Chat && (
        <>
          <CursorSVG color="#000" />

          <div className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]">
            {cursorState.previousMessage && (
              <div>{cursorState.previousMessage}</div>
            )}

            <input
              className="z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none"
              placeholder={
                cursorState.previousMessage ? "" : "Type a message..."
              }
              value={cursorState.message}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              maxLength={50}
              autoFocus
            />
          </div>
        </>
      )}
    </div>
  );
};
