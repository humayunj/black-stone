import React from "react";
import styles from "./Grid.module.css";
import Photo from "./Photo";
import usePhotos from "../../lib/usePhotos";
import PhotoModal from "../PhotoGrid/PhotoModal";
import { useState } from "react";

export default function PhotoGrid(props) {
  const [photos, loadPhotos] = usePhotos();
  const [modalIndex, setModalIndex] = useState(-1);
  if (!photos) {
    loadPhotos();
  }

  return (
    <>
      <div className={styles.grid}>
        {photos
          ? photos.map((img, ind) => (
              <Photo
                photoSrc={img.imageMain.url}
                showModal={() => setModalIndex(ind)}
              />
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => <Photo photoSrc="" />)}
      </div>

      {photos && modalIndex > -1 && (
        <PhotoModal
          photoList={photos}
          startIndex={modalIndex}
          hideModal={() => setModalIndex(-1)}
        />
      )}
    </>
  );
}
