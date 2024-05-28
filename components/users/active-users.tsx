import { useMemo } from "react";

import { generateRandomName } from "@/lib/utils";
import { useOthers, useSelf } from "@/liveblocks.config";

import { Avatar } from "./avatar";

export const ActiveUsers = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;

  const memorizedUsers = useMemo(
    () => (
      <div className="flex items-center justify-center gap-1 py-2">
        <div className="flex pl-3">
          {currentUser && (
            <Avatar
              name="You"
              otherStyles="border-[3px] border-primary-green"
            />
          )}

          {users.slice(0, 3).map(({ connectionId }) => {
            return (
              <Avatar
                key={connectionId}
                name={generateRandomName()}
                otherStyles="-ml-3"
              />
            );
          })}

          {hasMoreUsers && (
            <div className=" ml-[-0.75rem] flex h-14 w-14 min-w-[56px] items-center justify-center rounded-full border-4 border-white bg-gray-400 text-white">
              +{users.length - 3}
            </div>
          )}
        </div>
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [users.length]
  );

  return memorizedUsers;
};
