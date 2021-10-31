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
    const res = await API.getAllRecords("617f0fd050eb48d4773ae2be");

    const imagesCID = res.map((r) => {
      return r.fields[0].value;
    });

    let images = await Promise.all(
      imagesCID.map(async (id) => {
        let img = await API.getMedia(id);
        return {
          sm: img.sm.url,
          md: img.md.url,
          raw: img.raw.url,
        };
      })
    );

    setPhotosList(images.sort((a, b) => (Math.random() >= 0.5 ? -1 : 1)));
  };

  return [photosList, loadPhotos];
}
