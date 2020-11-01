import React from "react";
import styles from "./Grid.module.css";
import Photo from "./Photo";
import usePhotos from "../../lib/usePhotos";

export default function PhotoGrid(props) {
  const [photos, loadPhotos] = usePhotos();
  if (!photos) {
    console.log("Fetching photos");
    loadPhotos();
  }

  return (
    <div className={styles.grid}>
      {photos
        ? photos.map((img) => <Photo photoSrc={img.imageMain.url} />)
        : ([1,2,3,4,5,6,7,8,9,10].map(() => <Photo photoSrc="" />))}
    </div>
  );
}
