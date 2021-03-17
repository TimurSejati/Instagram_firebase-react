import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserByUserId } from "../services/firebase";

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getTimeliePhotos() {
      const [{ following }] = await getUserByUserId(user?.uid);
      let followedUserPhotos = [];

      if (following.length > 0) {
        followedUserPhotos = await getPhotos(user?.uid, following);
      }

      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    if (user) {
      getTimeliePhotos();
    }
  }, [user]);

  return { photos };
}
