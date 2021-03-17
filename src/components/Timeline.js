import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/usePhotos";
import Post from "./post";

export default function Timeline() {
  const { photos } = usePhotos();

  console.log(photos);

  return (
    <div className="col-span-2">
      {!photos ? (
        <>
          <Skeleton count={4} width={640} height={500} className="mb-5" />
        </>
      ) : photos && photos.length > 0 ? (
        photos.map((content) => (
          <Post key={content.docId} content={content}></Post>
        ))
      ) : (
        <p className="text-2xl text-center">Follow people to see photos!</p>
      )}
    </div>
  );
}
