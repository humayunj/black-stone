import React, { useState } from "react";
import API from "../API";
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
    const res = await API.getAllRecords("image");
    const imagesCID = res.map((r) => {
      return r.fields.imagessss;
    });

    let images = await Promise.all(
      imagesCID.map(async (id) => {
        try {
          let img = await API.getMedia(id);
          return {
            sm: img.sm.url.replace("http://", "https://"),
            md: img.md.url.replace("http://", "https://"),
            raw: img.raw.url.replace("http://", "https://"),
          };
        } catch (er) {
          return null;
        }
      })
    );
    images = images.filter((f) => f != null);

    setPhotosList(images.sort((a, b) => (Math.random() >= 0.5 ? -1 : 1)));
  };

  return [photosList, loadPhotos];
}
