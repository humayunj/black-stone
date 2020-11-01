import React, { useState } from "react";

export default function usePhotos() {
  let [photosList, setPhotosList] = useState(null);

  const loadPhotos = async () => {
    const token = "5a83969bc29f11416619c798b5ea02";
    const query = `
query MyQuery {
  allImages {
    id
    title
    createdAt
    imageMain {
      url
    }
  }
}
`;
    const res = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
      }),
    });

    const toOBJ = await res.json();
    const images = toOBJ.data.allImages;
    setPhotosList(images);
  };

  return [photosList, loadPhotos];
}
