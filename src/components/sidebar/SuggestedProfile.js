import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);
    // Firebase create 2 services (functions)
    // Update the following array of the logged in user (in this case profile)
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    // Update the followers array of the user who has been followed
    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  return !followed ? (
    <div className="flex flex-row items-center justify-between align-items">
      <div className="flex items-center justify-between">
        <img
          className="flex w-8 mr-3 rounded-full"
          src={`/images/avatars/${username}.jpg`}
          alt={username}
        />
        <Link to={`/p/${username}`} className="text-sm font-bold">
          {username}
        </Link>
      </div>
      <div className="">
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.protoTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
