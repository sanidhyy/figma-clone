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
            <div className=" bg-gray-400 min-w-[56px] w-14 h-14 ml-[-0.75rem] flex justify-center items-center text-white rounded-full border-4 border-white">
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
