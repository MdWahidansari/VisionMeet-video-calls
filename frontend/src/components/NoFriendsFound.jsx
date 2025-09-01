import React from "react";

const NoFriendsFound = () => {
  return (
    <div className="card bg-base-200 p-6 text-center">
      <h3 className="font-semibold text-lg mg-2">You haven’t added any friends yet. Start connecting!</h3>
      <p className="text-base-content opacity-70">
        Start practicing by connecting with language partners below!
      </p>
    </div>
  );
};

export default NoFriendsFound;
