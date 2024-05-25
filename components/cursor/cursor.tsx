import CursorSVG from "@/public/cursor-svg";

type CursorProps = {
  color: string;
  x: number;
  y: number;
  message: string;
};

export const Cursor = ({ color, x, y, message }: CursorProps) => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    >
      <CursorSVG color={color} />

      {/* MESSAGE */}
    </div>
  );
};
