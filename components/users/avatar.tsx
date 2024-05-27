import Image from "next/image";

import { cn } from "@/lib/utils";

import styles from "./index.module.css";

type AvatarProps = { name: string; otherStyles: string };

export const Avatar = ({ name, otherStyles }: AvatarProps) => {
  return (
    <div
      className={cn("h-9 w-9", styles.avatar, otherStyles)}
      data-tooltip={name}
    >
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(
          Math.random() * 30
        )}.png`}
        alt={`${name}'s avatar`}
        fill
        className={styles.avatar_picture}
      />
    </div>
  );
};
