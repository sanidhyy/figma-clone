import { cn } from "@/lib/utils";
import styles from "./index.module.css";

type FlyingReactionProps = {
  x: number;
  y: number;
  timestamp: number;
  value: string;
};

export const FlyingReaction = ({
  x,
  y,
  timestamp,
  value,
}: FlyingReactionProps) => {
  return (
    <div
      className={cn(
        `pointer-events-none absolute select-none text-${
          (timestamp % 5) + 2
        }xl ${styles["goUp" + (timestamp % 3)]}`,
        styles.disappear
      )}
      style={{ left: x, top: y }}
    >
      <div className={styles["leftRight" + (timestamp % 3)]}>
        <div className="-translate-x-1/2 -translate-y-1/2 transform">
          {value}
        </div>
      </div>
    </div>
  );
};
